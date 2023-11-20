(function() {
  "use strict";

  // Note that this script is highly dependent on
  // the layout the data objects, including key names.

  // ---------------------------------------------------------
  // -- constants --------------------------------------------

  // https://www.compart.com/en/unicode/U+2003
  const BreakEmSpace = "<br />&emsp;"

  const themeDark = "dark";
  const themeLight = "light";

  // used with confettiButton & fairyDustCursor
  const fairyDust = {turnOff: false};
  const fairyDustScriptName = "scripts/fairyDustCursor.js";

  // used for levels in the consultancy page
  const images = {
    colour: "/images/stars/favicon.png",
    gray: "/images/stars/favicon-gray.png"
  }

  const content = {
    paragraph: "paragraph",
    list: "list",
    image: "image"
  }

  const classNames = {
    header: {
      info: "info",
      home: "home",
      mail: "mail",
    },
    experience: {
      subHeader: "experienceSubHeader",
      subProject: "subProject",
      multipleTitle: "multiTitle",
      experience: "experience",
      activeYears: "activeYears",
      company: "company",
      project: "project",
      role: "role",      // text underline
    },
    guide: {
      headers: {
        header: "guide-header",
        subHeader: "guide-subheader",
      },
      grid: {
        container: "grid-container",
        item: "grid-item",
      },
      height: {
        zero: "zeroheight",
        max: "maxheight"
      }
    },
    grid: {              // used in the print guide
      container: "grid-container",
      item: "grid-item",
    },
    buttons: {
      active: "active",
      half: "narrow"
    },
    language: "language", // spoken languages
    extra: "extra",       // does not appear on the "One Page Résumé"
    tdEmpty: "empty",     // an empty table data element
    show: "show",         // visibility
  }

  const allIDs = {
    header: {
      header: "header",
      contact: "areaContact",
      url: "url",
    },
    list: {
      list: "list",
      left: "leftList",
      right: "rightList",
    },
    about: {
      about: "about",
      left: "leftAbout",
      right: "rightAbout",
    },
    navigation: "navigation",
    buttons: {
      onePage: "onePageButton",
      extended: "extendedButton",
      list: "listButton",
      about: "aboutButton",
      confetti: "confettiButton",
      lightDark: "lightDarkButton",
      language: "languageButton",
      consult: "consultButton",
    },
    activeNshadow: {
      activeLanguage: "activeLanguagePage",
      shadows: "forShadow",
      template: "template",
    },
    fourOfour: {
      fourOfour: "fourOfour",
      text: "fourOfourText",
    },
    notice: {
      background: "noticeBackground",
      notice: "notice",
      text: "noticeText",
      close: "closeNotice",
    },
    consult: {
      consultancies: "consultancies",
      introduction: "introduction",
      introLists: "introLists",
      experience: "experienceConsult",
      skillsList: "skillsList",
      print: {
        guide: "printGuide",
        guideContent: "printGuideContent"
      }
    },
    noscript: "goodluck",
    wordCloud: "cloud",
    content: "content",
    resume: "resume",
    splash: "splash",
  }
  const ShowHideIDs = [
                        allIDs.resume,
                        allIDs.list.list,
                        allIDs.about.about,
                        allIDs.consult.consultancies
                      ]

  const documentTitleMap = new Map(); // Used to set the browser tab title.


  // ---------------------------------------------------------
  // -- removing splash screen -------------------------------
  const hideSplash = () => {
    const splash = document.getElementById(allIDs.splash);
    splash.classList.remove(classNames.show);
    setTimeout(() => splash.remove(), 1000); // same duration as the css "transition"
  }


  // ---------------------------------------------------------
  // -- notice & 404 screen ----------------------------------
  const insertError = (textElement, error) => {
    const errObj = (error.error) ? error.error : error;
    let text = error.customMessage ? error.customMessage + ". <br /> Reason: " : "";

    if (Object.prototype.toString.call(errObj) === "[object Response]") {
      text += errObj.status + " - " + errObj.statusText;
    } else {
      text += errObj;
    }
    textElement.innerHTML = text;
  }

  // ---------------------------
  const showNotice = (error) => {
    const noticeBackground = document.getElementById(allIDs.notice.background);
    noticeBackground.removeAttribute("style");

    const noticeText = noticeBackground.querySelector(`#${allIDs.notice.text}`);
    insertError(noticeText, error);
  }

  // ---------------------------
  const addNoticeListener = () => {
    const closeNotice = document.getElementById(allIDs.notice.close);
    addListener(closeNotice,
                ({ target }) => {
                  const noticeBackground = target.closest(`#${allIDs.notice.background}`);
                  noticeBackground.className = "";
                  noticeBackground.style.display = "none";
    });
  }

  // ---------------------------
  const do404 = (error) => {
    const content = document.getElementById(allIDs.content);
    content && (content.style.display = "none");
    const navigation = document.getElementById(allIDs.navigation);
    navigation && (navigation.style.display = "none");

    const fourOfour = document.getElementById(allIDs.fourOfour.fourOfour);
    fourOfour.removeAttribute("style");

    const fourOfourText = fourOfour.querySelector(`#${allIDs.fourOfour.text}`);
    insertError(fourOfourText, error);
  }

  // ---------------------------
  const hide404 = () => {
    const fourOfour = document.getElementById(allIDs.fourOfour.fourOfour);
    fourOfour.style.display = "none";

    const content = document.getElementById(allIDs.content);
    content && content.removeAttribute("style");
    const navigation = document.getElementById(allIDs.navigation);
    navigation && navigation.removeAttribute("style");
  }


  // ---------------------------------------------------------
  // -- fetching scripts -------------------------------------

  // Discord conversations helping me to sort out loading the scripts:
  // https://discord.com/channels/238666723824238602/238727576628101122/964037129611116574
  // https://discord.com/channels/238666723824238602/238727576628101122/964820771467837440

  const addScript = (url) => {
    if (document.querySelector(`script[src="${url}"]`)) {
      return Promise.resolve();
    }

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.head.append(script);

    return new Promise((resolve, reject) => {
      script.addEventListener("load", resolve, {once: true});
      script.addEventListener("error",
                              () => reject(new Error(`The loading of ${url} failed`)),
                              {once: true});
    });
  }


  // ---------------------------------------------------------
  // -- word cloud -------------------------------------------
  const wordCloud = async ({ size, words }) => {

    try {
      const urls = [
        "https://d3js.org/d3.v7.min.js",
        "https://cdn.jsdelivr.net/gh/jasondavies/d3-cloud/build/d3.layout.cloud.js",
      ];

      await Promise.all(urls.map(addScript));

    } catch (error) {
      console.error("Word cloud not possible.", error);
      return; // exit with no word cloud
    }

    // This overwrites the @media style
    // const cloud = document.getElementById("cloud");
    // cloud.style.marginBottom = (100 - parseInt(size.vertical)) + "px";
    // so it's setup with a "magic number" in the .css file.

    const layout = d3.layout.cloud()
      .size([size.horizontal, size.vertical])
      .words(words)
      .padding(5)
      .rotate(function() { return ~~(Math.random() * 2) * 90; })
      .font("Verdana")
      .fontSize(function(d) { return d.size; })
      .on("end", draw);

      layout.start();

      function draw(words) {
        d3.select(`#${allIDs.wordCloud}`)
          .append("svg")
            .attr("width", layout.size()[0])
            .attr("height", layout.size()[1])
          .append("g")
            .attr("transform", "translate(" +
                   layout.size()[0] / 2 + "," +
                   layout.size()[1] / 2 + ")")
          .selectAll("text")
            .data(words)
          .enter().append("text")
            .style("font-size", function(d) { return d.size + "px"; })
            .style("font-family", "Verdana, Helvetica, Arial, sans-serif")
             // .style("font-family", "Impact")
            .attr("text-anchor", "middle")
            .attr("transform", function(d) {
              return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .style("fill", function(d) { return d.fillColor; })
            .text(function(d) { return d.text; });
      }

      copyCloudToShadowTemplate(); // done here, since wordCloud is async
  }


  // ---------------------------------------------------------
  // -- document title ---------------------------------------
  const setDocumentTitle = ({ displayName, documentType, languageSymbol }) => {
    const documentTitle = document.querySelector("head title");

    if (!documentTitleMap.has(languageSymbol) && displayName && documentType) {
      const title = displayName + " - " + documentType
      documentTitle.innerText = title;
      documentTitleMap.set(languageSymbol, title);
    }

    if (documentTitleMap.has(languageSymbol)) {
      documentTitle.innerText = documentTitleMap.get(languageSymbol);
    }
  }


  // ---------------------------------------------------------
  // -- header -----------------------------------------------
  const createSvg = ({ width, height, viewBox, d,
                       fill,
                       stroke, strokeWidth,
                       strokeLinecap, strokeLinejoin }) => {

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", d);

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    svg.setAttribute("viewBox", viewBox);

    if (fill)
     svg.setAttribute("fill", fill);
    if (stroke)
     svg.setAttribute("stroke", stroke);
    if (strokeWidth)
     svg.setAttribute("stroke-width", strokeWidth);
    if (strokeLinecap)
     svg.setAttribute("stroke-linecap", strokeLinecap);
    if (strokeLinejoin)
     svg.setAttribute("stroke-linejoin", strokeLinejoin);

    svg.append(path);
    return svg;
  }

  // ---------------------------
  const wrapNobr = (element) => {
    const nobr = document.createElement("nobr");
    nobr.append(element);
    return nobr;
  }

  // ---------------------------
  const createHeader = ({ header, svg }) => {
    const name = document.createElement("h1");
    name.innerText = header.name

    const title = document.createElement("h2");
    title.innerText = header.title;

    const area = document.createElement("span");
    area.innerText = header.area;
    area.prepend(createSvg(svg.home));
    area.className = classNames.header.home;

    const contact = document.createElement("span");
    contact.innerText = header.contact;
    contact.prepend(createSvg(svg.mail));
    contact.className = classNames.header.mail;

    const pAreaContact = document.createElement("div");
    pAreaContact.append(wrapNobr(area), wrapNobr(contact));
    pAreaContact.id = allIDs.header.contact;

    const url = document.createElement("span");
    url.innerText = header.url;
    url.prepend(createSvg(svg.link));
    url.id = allIDs.header.url;
    const pUrl = document.createElement("p");
    pUrl.append(wrapNobr(url));

    const info = document.createElement("div");
    info.className = classNames.header.info;
    info.append(pAreaContact, pUrl);

    const documentHeader = document.getElementById(allIDs.header.header);
    documentHeader.append(name, title, info);
  };


  // ---------------------------------------------------------
  // -- footer -----------------------------------------------
  const createFooter = ({ footer, header: { name } }) => {
    const documentFooter = document.querySelector("footer p");
    documentFooter.innerText = footer.replace("REPLACE", name);
  }


  // ---------------------------------------------------------
  // -- theme default ----------------------------------------
  const defaultTheme = () => {
    document.body.dataset.theme =
      window.matchMedia("(prefers-color-scheme: dark)")
            .matches
              ? themeDark
              : themeLight;
  }


  // ---------------------------------------------------------
  // -- menu buttons -----------------------------------------
  const hideExtra = () => {
    document.querySelectorAll(`.${classNames.extra}`)
           .forEach(element => element.style.display = "none");
  }

  const showExtra = () => {
    document.querySelectorAll(`.${classNames.extra}`)
            .forEach(element => element.removeAttribute("style"));
  }

  // hides the divs that should not be snown
  const showHide = (show) => {
    document.getElementById(show).removeAttribute("style");
    ShowHideIDs.forEach( // ShowHideIDs contains all the page major divs
      id => {
        if (id !== show)
          document.getElementById(id).style.display = "none";
    });
  }

  // ---------------------------
  // Moves the active class to the pressed button
  const handleActive = ({ target }) => {
    const activeButtonClass = classNames.buttons.active;
    const active = document.querySelector(`.${activeButtonClass}`);
    if (active === target)
      return;
    active.classList.remove(activeButtonClass);
    target.classList.add(activeButtonClass);
  }

  // ---------------------------
  const setUpButton = (button, { text, language }) => {
    button.innerText = text;
    button.title = text;
    if (language)
      button.dataset.language = language;
  }

  // ---------------------------
  const setUpHalfButton = (button, svgObject, { title, toggle }) => {
    // I can't remember why I added this span.
    // ..it's invisible, so perhaps to aid screenreaders.. ?!?
    const span = document.createElement("span");
    span.className = classNames.buttons.half;
    span.innerText = title;

    button.title = toggle;
    button.append(span, createSvg(svgObject));
  }

  // ---------------------------
  const toggleLightDark = () => {
    // Toggle between "light" and "dark" for the data-theme attribute.
    const theme = document.body.dataset.theme;
    document.body.dataset.theme = theme === themeDark
                                    ? themeLight
                                    : themeDark;
  }

  // ---------------------------
  const toggleFairyDust = async (button) => {
    if (fairyDust.stopLoop) { // the function is set, so the confetti is on
      button.disabled = true;

      fairyDust.stopLoop();
      // remove the function from the object
      delete fairyDust.stopLoop;

      // ensure the button cannot be pressed because that would result in
      // the old run removing the eventListners added by the new run
      setTimeout(() => button.disabled = false, 1000)
    } else {
      fairyDust.turnOff = false;

      // get the script
      try {
        await addScript(fairyDustScriptName);
      } catch (error) {
        console.error("fairyDust confetti not possible.", error);
        return;
      }
      fairyDustCursor(fairyDust);
    }
  }

  // ---------------------------
  const addListener = (element, foonction) => {
    element.addEventListener("click", foonction);
  }

  // ---------------------------
  const setupButtons = ({ svgObjects: svg,
                          languageDictionary: {
                            menu: menuDictionary = {},
                            language : languageStr
                          }}) => {

    const buttonActions =
      new Map([
        [
          allIDs.buttons.onePage,
          button => {
                      setUpButton(button, { text: menuDictionary.onePage });
                      addListener(button,
                                  event => {hideExtra();
                                            showHide(allIDs.resume);
                                            handleActive(event);})
                    }
        ],
        [
          allIDs.buttons.extended,
          button => {
                      setUpButton(button, { text: menuDictionary.extended });
                      addListener(button,
                                  event => {showExtra();
                                            showHide(allIDs.resume);
                                            handleActive(event);})
                    }
        ],
        [
          allIDs.buttons.list,
          button => {
                      setUpButton(button, { text: menuDictionary.list });
                      addListener(button,
                                  event => {showHide(allIDs.list.list);
                                            handleActive(event);})
                    }
        ],
        [
          allIDs.buttons.about,
          button => {
                      setUpButton(button, { text: menuDictionary.aboutMe });
                      addListener(button,
                                  event => {showHide(allIDs.about.about);
                                            handleActive(event);})
                    }
        ],
        [
          allIDs.buttons.confetti,
          button => {
                      setUpHalfButton(button,
                                      // resumeObject.svg.confetti,
                                      svg.stars,
                                      menuDictionary.confetti);
                      addListener(button, () => toggleFairyDust(button));
                    }
        ],
        [
          allIDs.buttons.lightDark,
          button => {
                      setUpHalfButton(button,
                                      svg.theme,
                                      menuDictionary.theme);
                      addListener(button, () => toggleLightDark());
                    }
        ],
        [
          allIDs.buttons.language,
          button => {
                      const otherLanguage = getOtherLanguageSymbol(languageStr);
                      setUpButton(button,
                                  {
                                    text: menuDictionary.otherlanguage, // Dansk || English
                                    language: Symbol.keyFor(otherLanguage)
                                  });
                      addListener(button, () => changeLanguage(otherLanguage));
                    }
        ],
        [
          allIDs.buttons.consult,
          button => {
                      setUpButton(button, { text: menuDictionary.consult });
                      addListener(button,
                                  event => {showHide(allIDs.consult.consultancies);
                                            handleActive(event);})

                    }
        ],
      ]);

    [...document.getElementsByTagName("button")]
      .forEach(button => buttonActions.has(button.id)
                         && buttonActions.get(button.id)(button));
  }


  // ---------------------------------------------------------
  // -- Page sub titles --------------------------------------
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const createTitle = (str, headerType = "h3") => {
    const title = document.createElement(headerType);
    title.append(capitalize(str));
    return title;
  }


  // ---------------------------------------------------------
  // -- unordered lists --------------------------------------
  const listCollection = (array, className) => {
    return [...array].map(
      element => {
        const listElement = document.createElement("li");
        listElement.innerHTML = element; // because they may contain html tags
        if (className)
          listElement.className = className;
        return listElement;
    });
  }

  // ---------------------------
  const listSummary = (arrayOfObjects) => {
    return [...arrayOfObjects].map(
      element => {
        const listElement = document.createElement("li");
        listElement.innerHTML = // because they may contain html tags
          element.role
          + BreakEmSpace
          + element.project;
        return listElement;
    });
  }

  // ---------------------------
  const listItems = ({ listObject, applyExtra = true }) => {
    const list = document.createElement("ul");
    if (Object.prototype.toString.call(listObject) === "[object Array]") {
      list.append(...listCollection(listObject));
    } else {
      if (listObject.include)
        list.append(...listCollection(listObject.include));
      if (listObject.extra)
        list.append(...listCollection(listObject.extra, applyExtra ? classNames.extra : null));
      if (listObject.summary)
        list.append(...listSummary(listObject.summary));
    }
    return list;
  }


  // ---------------------------------------------------------
  // -- tables -----------------------------------------------
  const makeCell = (text, secondLine) => {
    const cell = document.createElement("td");
    cell.innerHTML = text +
                     (secondLine
                        ? "<br />" + secondLine
                        : "");
    return cell;
  }

  // ---------------------------
  const makeTable = ({ subDataArray, fromPlace = " - " }) => {
    const table = document.createElement("table");

    table.append(...[...subDataArray].map(
      element => {
        const row = document.createElement("tr");
        row.append(makeCell(element["year"]),
                   makeCell(element["name"],
                            fromPlace + " " + element["place"]));
        return row;
    }));

    return table;
  }

  // ---------------------------
  const makeTableLang = (subDataObject) => {
    const table = document.createElement("table");

    table.append(...[...subDataObject].map(
      element => {
        const row = document.createElement("tr");
        const language = makeCell(element["language"]);
        language.className = classNames.language;
        row.append(language,
                   makeCell(element["level"]));
        return row;
    }));

    return table;
  }


  // ---------------------------------------------------------
  // -- populate the page of silly list ----------------------
  const sortOrder = {
    group: 0,
    year: 1,
    name: 2,
    language: 3,
    level: 4,
    stars: 5,
    yearsUsed: 6,
    lastUsed: 7,
    fromPlace: 8,
    place: 9,
    max: Number.MAX_VALUE
  };
  const sortBy = (a, b) => (sortOrder[a] || sortOrder.max) - (sortOrder[b] || sortOrder.max);

  // ---------------------------
  const common = ["group", "name", "lastUsed"];
  const filterFullList = (key) => common.concat(["level"]).includes(key);
  const filterconsultList = (key) => common.concat(["stars","yearsUsed"]).includes(key);

  // ---------------------------
  const makeImage = (source) => {
    const image = document.createElement("img");
    image.src = source;
    return image;
  }

  // ---------------------------
  const newTechRowObject = (row) => {
    if (row.groupName && row.name) {
      return { ...row,
               name: (row.groupName.substr(0,row.groupName.indexOf(' ')) || row.groupName)
                     + " " + row.name };
    }
    return row;
  }

  // ---------------------------
  const makeTechRow = (objectParam) => {
    const { dataObjectRow,
            languageDictionary: { levels, consult } = {},
            settings: { prepend = false, consultPage = false } = {} } = objectParam;

    const useFilter = consultPage ? filterconsultList : filterFullList

    const row = document.createElement("tr");
    row.append(...Object.entries(consultPage
                                   ? newTechRowObject(dataObjectRow)
                                   : dataObjectRow)
                        .filter(([key, _]) => useFilter(key))
                        .sort(([keyA, _], [keyB, __]) => sortBy(keyA, keyB))
                        .map(
      ([key, value]) => {
        const cell = document.createElement("td");

        switch (key) {
          case "level":
            cell.append(getWord(value, levels));
            cell.className = value;
            break;
          case "stars":
            Array.from({length: value},
                       () => cell.append(makeImage(images.colour)));
            Array.from({length: 5 - value},
                       () => cell.append(makeImage(images.gray)));
            cell.title = value + " " + getWord("outOf", consult) + " 5";
            break;
          default:
            cell.append(value);
        }

        if (!consultPage && !prepend && ["group", "name"].includes(key)) {
          cell.colSpan = "2";
        }

        return cell;
    }));

    if (prepend) {
      const empty = document.createElement("td");
      empty.className = classNames.tdEmpty;
      row.prepend(empty);
    }

    return row;
  }

  // ---------------------------
  const populateList = (objectParam) => {
    const { subDataObject,
            languageDictionary,
            languageDictionary: { list : listDictionary }} = objectParam;

    const leftList = document.getElementById(allIDs.list.left);
    const rightList = document.getElementById(allIDs.list.right);

    Object.entries(subDataObject).forEach(
      ([key, value]) => {
        const subTitle = createTitle(getWord(key, listDictionary), "h3");

        const table = document.createElement("table");
        table.id = key;
        Object.values(value.content).forEach(
          item => {
            if (!item.group) {
              table.append(makeTechRow({ dataObjectRow: item, languageDictionary }));
            } else {
              table.append(makeTechRow({ dataObjectRow: { group: item.group } }));
              table.append(...Object.values(item.items)
                                    .map(groupitem =>
                                           makeTechRow({
                                             dataObjectRow: groupitem,
                                             languageDictionary,
                                             settings: {
                                               prepend: true
                                             }
                                           })
                                     )
                          );
            }
        });

        switch (value.side) {
          case "left":
            leftList.append(subTitle, table);
            break;
          case "right":
            rightList.append(subTitle, table);
        }
    });
  }


  // ---------------------------------------------------------
  // -- populate About ---------------------------------------
  const mapContent = (items) => {
    return [...items].map(
      item => {
        if (item.type === content.paragraph) {
          const paragraph = document.createElement("p");
          paragraph.innerHTML = item.content; // because they may contain html tags
          return paragraph;
        }
        if (item.type === content.list) {
          const list = document.createElement("ul");
          list.append(...listCollection(item.content));
          return list;
        }
        if (item.type === content.image) {
          const image = document.createElement("img");
          image.src = item.src;
          return image;
        }
    })
  }

  // ---------------------------
  const populateAbout = ({ subDataObject, subDictionary = {} }) => {
    const leftAbout = document.getElementById(allIDs.about.left);
    const rightAbout = document.getElementById(allIDs.about.right);

    Object.entries(subDataObject).forEach(
      ([key, value]) => {
        const subTitle = createTitle(getWord(key, subDictionary), "h3");

        const content = mapContent(value.items);

        switch (value.side) {
          case "left":
            leftAbout.append(subTitle, ...content);
            break;
          case "right":
            rightAbout.append(subTitle, ...content);
            break;
        }
    });
  }


  // ---------------------------------------------------------
  // -- populate the "Experience" ----------------------------
  const makeFlexTitle = ({ left, right, role = false }) => {
    const leftSide = document.createElement("h4");
    if (role)
      leftSide.className = classNames.experience.role; // text underline
    leftSide.append(left);

    const heading = document.createElement("div");
    heading.classList.add(classNames.experience.subHeader);

    heading.append(leftSide);

    if (right) {
      const rightSide = document.createElement("span");
      rightSide.className = classNames.experience.activeYears;
      rightSide.innerText = right;
      heading.append(rightSide);
    }

    return heading;
  }

  // ---------------------------
  const makeCompanySpan = (text) => {
    const span = document.createElement("span");
    span.className = classNames.experience.company;
    span.innerText = text;

    const outer = document.createElement("nobr");
    outer.append(span);

    return outer;
  }

  // ---------------------------
  const durationOption = { month: "long", year: "numeric" };

  const durationString = ({ duration, languageStr = "en-GB", type = "years" }) => {
    if (!duration)
      return

    if (type === "years") {
      // "2016-2022"
      return duration.start?.year + "-" + duration.end?.year
    } else {
      // "July 2016 - August 2022"
      const start = new Date(+duration.start?.year, +duration.start?.month - 1);
      const end = new Date(+duration.end?.year, +duration.end?.month - 1);

      return start.toLocaleString(languageStr, durationOption) + " - " +
               end.toLocaleString(languageStr, durationOption);
    }
  }

  // ---------------------------
  const makeproject = (objectParameter) => {
    const { element,
            subDictionary,
            languageSymbol,
            settings: { applyExtra = true, durationType = "years" } } = objectParameter;

    const container = document.createElement("div");

    if (element.title) {
      const head = makeFlexTitle({ left: element.title,
                                   right: durationString({
                                            duration: element.duration,
                                            type: durationType,
                                            languageStr: Symbol.keyFor(languageSymbol)
                                          }),
                                   role: true });
      container.append(head);
    }

    if (element.name || element.summary) {

      const projectName = document.createElement("span");
      projectName.className = classNames.experience.project;
      const project = document.createElement("i");

      if (element.name) {
        project.innerText = getWord("project", subDictionary) + ": ";
        const name = document.createElement("span");
        name.innerHTML = element.name; // may contain HTML
        projectName.prepend(project, name);
      } else {
        project.innerText = getWord("projectsSummary", subDictionary) + ": ";
        projectName.prepend(project);
      }

      container.append(projectName);
    }

    if (element.results) {
      const result = listItems({ listObject: element.results, applyExtra: applyExtra });
      container.append(result);
    }

    if (element.technologies) {
      const technologies = document.createElement("span");
      technologies.append(getWord("technologies", subDictionary) + ": ",
                          element.technologies.join(", "));
      technologies.className = classNames.experience.project;
      container.append(technologies);
    }

    return container;
  }

  // ---------------------------
  const populateExperiences = (objectParameter) => {
    const { subDataObject,
            languageSymbol = getLanguageSymbol(),
            subDictionary,
            settings = {} } = objectParameter;
    const { applyExtra = true, durationType = "years" } = settings;

    return Object.values(subDataObject).map(
      (subDataValueObj) => {
        const container = document.createElement("div");
        container.className = classNames.experience.experience;
        if (applyExtra && !subDataValueObj.onePage)
          container.classList.add(classNames.extra);

        const company = subDataValueObj.company;
        const jobtitle = subDataValueObj.title;

        if (company)
          container.append(makeFlexTitle({ left: makeCompanySpan(company),
                                           right: durationString({
                                                    duration: subDataValueObj.duration,
                                                    type: durationType,
                                                    languageStr: Symbol.keyFor(languageSymbol)
                                                  })
                                        })
                          );
		    if (jobtitle)
          container.append(makeFlexTitle({ left: jobtitle,
                                           right: company
                                                    ? null
                                                    : durationString({
                                                        duration: subDataValueObj.duration,
                                                        type: durationType,
                                                        languageStr: Symbol.keyFor(languageSymbol)
                                                      }),
                                           role: company ? true : false }));

        Object.values(subDataValueObj.projects).forEach(
          element => {
            const subProject = makeproject({
                                 element,
                                 subDictionary,
                                 languageSymbol,
                                 settings
                               });
            if (jobtitle && company) {
              subProject.className = classNames.experience.subProject;
            } else {
              subProject.className = classNames.experience.multipleTitle;
            }
            if (applyExtra && !element.onePage)
              subProject.classList.add(classNames.extra);
            container.append(subProject);
        });

        return container;
    })
  }


  // ---------------------------------------------------------
  // -- populate Consultancies  ------------------------------
  const getSetConsultTitle = (titleStr, elementId) => {
    const title = createTitle(titleStr, "h2")

    const element = document.getElementById(elementId);
    element.append(title);

    return element;
  }

  // ---------------------------
  const populateConsultBasics = ({ subDataObject, subDictionary, elementID, titleStr }) => {
    const basics = getSetConsultTitle(titleStr, elementID);

    const basicsObj = {};

    // change each of the basics key/value pairs objects
    // ..to objIndex: {"key": key, "value": value}
    Object.entries(subDataObject).forEach(
      ([key, value], index) => {
        basicsObj[index] = {
          key: getWord(key, subDictionary),
          value: "<b>" + value + "</b>"
        };
    });

    basics.append(makeConsultTable(basicsObj));
  }

  // ---------------------------
  const populateConsultIntroduction = ({ subDataObject, elementID, titleStr }) => {
    const introduction = getSetConsultTitle(titleStr, elementID);
    introduction.append(...mapContent(subDataObject.items));
  }

  // ---------------------------
  const populateConsultWithList = ({ subDataObject, elementID, titleStr }) => {
    const introduction = getSetConsultTitle(titleStr, elementID);
    introduction.append(listItems({ listObject: subDataObject }));
  }

  // ---------------------------
  const populateConsultIndustries = ({ subDataObject, elementID, titleStr }) => {
    const industries = getSetConsultTitle(titleStr, elementID);

    const list = document.createElement("ul");

    list.append(...[...Object.values(subDataObject)].map(
      element => {
        const listElement = document.createElement("li");

        if (!element.group) {
          listElement.innerHTML = element.name;
        } else {
          listElement.innerHTML = element.group;

          // create the sublist:
          const elementSubList = document.createElement("ul");
          elementSubList
            .append(...[...Object.values(element.items)]
                      .map(item => {
                        const subListElement = document.createElement("li");
                        subListElement.innerHTML = item.name;
                        return subListElement;
                      })
             )
          listElement.append(elementSubList);
        }

        return listElement;
      })
    );

    industries.append(list);
  }

  // ---------------------------
  const makeConsultRow = (row) => {
    const tableRow = document.createElement("tr");
    tableRow
      .append(...[...Object.entries(row)]
                .sort(([keyA, _], [keyB, __]) => sortBy(keyA, keyB))
                .map(([_,value]) => {
                        const cell = document.createElement("td");
                        cell.innerHTML = value;
                        return cell;
                 })
       );
    return tableRow;
  }
  // ---------------------------
  const makeConsultTable = (rows, fromPlace) => {
    const table = document.createElement("table");
    table.append(...[...Object.values(rows)].map((row) => {
      return makeConsultRow(fromPlace ? {...row, fromPlace} : row);
    }));
    return table;
  }
  // ---------------------------
  const populateConsultTable = ({ subDataObject, elementID, titleStr, fromPlace }) => {
    const section = getSetConsultTitle(titleStr, elementID);
    section.append(makeConsultTable(subDataObject, fromPlace));
  }

  // ---------------------------
  const populateConsultExperiences = ({ subDataObject,
                                        subDictionary,
                                        languageSymbol,
                                        elementID,
                                        titleStr }) => {

    const experinece = getSetConsultTitle(titleStr, elementID);
    experinece.append(
      ...populateExperiences({
           subDataObject,
           subDictionary,
           languageSymbol: languageSymbol,
           settings: {
             applyExtra: false,
             durationType: "months",
           }
         })
     );
  }

  // ---------------------------
  const filterListKeepStarred = (listObject) => {
    const filtered =
      Object.entries(listObject)
            .map(([key, value]) => {
                  return {[key]:  // keep the structure with the same object key
                          Object.entries(value.content)
                                .map(([contentKey, contentValue]) => {

                                  // keep all items that has a stars attribute
                                  if (contentValue.stars) {
                                    return {[contentKey]: contentValue};
                                  }

                                  // go into the group
                                  if (contentValue.group) {
                                    return Object.entries(contentValue.items)
                                          .map(([groupKey, groupValue]) => {
                                            if (groupValue.stars) {
                                              return {[groupKey]:
                                                      {
                                                        groupName: contentValue.group,
                                                        ...groupValue
                                                      }
                                                    }
                                              }
                                            })
                                          .filter(Boolean) // remove null group items
                                  }

                                 })
                                .filter(Boolean)   // remove null items
                                .filter(item => {  // remove empty arrays
                                  return Object.prototype.toString.call(item) === "[object Object]"
                                        || item.length > 0;
                                 })
                                .flat()            // no nested arrays
                  }
             })
            .filter((item) => Object.values(item)[0].length > 0); // remove empty subjects

    return filtered;
  }

  // ---------------------------
  const arrayObjecstToObjects = (arrayObject) => {

    const object = {};

    arrayObject
      .forEach(item => {
        Object.entries(item)
              .forEach(([key, value]) => {
                object[key] = {};
                value.forEach((arrItem) => {
                  Object.entries(arrItem)
                        .forEach(([arrItemkey, arrItemvalue]) => {
                          object[key][arrItemkey] = arrItemvalue;
                        });
                });
              });
       });

    return object;
  }

  // ---------------------------
  const consultSkillsHeader = ["name", "level", "yearsUsed", "lastUsed"];
  const makeConsultSkillsHeader = (subDictionary) => {
    const tableHeader = document.createElement('thead');

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
    Array.from({ length: consultSkillsHeader.length}, (_, i) => {
      const header = document.createElement("th");
      header.innerText = getWord(consultSkillsHeader[i], subDictionary);
      tableHeader.append(header);
    })

    return tableHeader;
  }

  // ---------------------------
  const populateConsultSkillsList = ({ subDataObject,
                                       languageDictionary,
                                       elementID,
                                       titleStr }) => {

    const skillsList = getSetConsultTitle(titleStr, elementID);

    const filteredListObject =
      arrayObjecstToObjects(filterListKeepStarred(subDataObject));

    const { list: listDictionary,
            consult: { skills : skillsDictionary }} = languageDictionary;

    Object.entries(filteredListObject)
          .forEach(([key, value]) => {
                      const subTitle = createTitle(getWord(key, listDictionary), "h5");

                      const table = document.createElement("table");
                      table.append(makeConsultSkillsHeader(skillsDictionary));
                      Object.values(value)
                            .forEach(item =>
                                       table.append(
                                         makeTechRow({
                                           dataObjectRow: item,
                                           languageDictionary,
                                           settings: {
                                             consultPage: true
                                           }
                                         })
                                       )
                             );

                      skillsList.append(subTitle, table);
      });
  }

  // ---------------------------
  const makeConsultGuideItem = (itemObject) => {
    const guideItem = document.createElement("div");
    guideItem.className = classNames.grid.item;
    guideItem.append(...mapContent(Object.values(itemObject.items)));
    return guideItem;
  }
  // ---------------------------
  const populatePrintGuide = ({ subDataObject,
                                elementID,
                                titleStr }) => {

    const {zero, max} = classNames.guide.height;

    const printGuide = getSetConsultTitle(titleStr, elementID);

    const subTitle = createTitle(subDataObject.notes.header + ":", "h5");
    subTitle.className = classNames.guide.headers.subHeader;
    const guideNotes = document.createElement("div");
    guideNotes.append(subTitle, ...mapContent([subDataObject.notes.item]));

    const guideContainer = document.createElement("div");
    guideContainer.className = classNames.grid.container;
    [...Object.values(subDataObject.guide)]
      .forEach(value => {
        guideContainer.append(makeConsultGuideItem(value));
       });

    const printGuideContent = document.createElement("div");
    printGuideContent.id = allIDs.consult.print.guideContent;
    printGuideContent.className = zero;
    printGuideContent.append(guideNotes, guideContainer);

    const printGuideHeader = printGuide.querySelector("h2");
    printGuideHeader.className = classNames.guide.headers.header;
    printGuideHeader.addEventListener("click", () => {
      if (printGuideContent.className === zero) {
        printGuideContent.className = max;
      } else {
        printGuideContent.className = zero;
      }
    });

    printGuide.append(printGuideContent);
  }

  // ---------------------------
  const populateConsultancies = (objectParam) => {
    const { consultDataObject,
            dataObject,
            languageDictionary,
            languageDictionary: {
              consult : consultDictionary,
              resume : resumeDictionary,
              list: listDictionary
            },
            languageSymbol} = objectParam;

    populateConsultIntroduction({
      subDataObject: consultDataObject.introduction,
      elementID: allIDs.consult.introduction,
      titleStr: getWord("introduction", consultDictionary)
    });

    populateConsultBasics({
      subDataObject: consultDataObject.basics,
      subDictionary: consultDictionary,
      elementID: allIDs.consult.introLists,
      titleStr: getWord("basics", consultDictionary)
    });

    [
      {
        subDataObject: consultDataObject.roles,
        titleStr: getWord("roles", consultDictionary)
      },
      {
        subDataObject: consultDataObject.competences,
        titleStr: getWord("competences", consultDictionary)
      },
      {
        subDataObject: consultDataObject.focus,
        titleStr: getWord("focus", consultDictionary)
      },
    ].forEach(item => populateConsultWithList({ ...item, elementID: allIDs.consult.introLists }));

    populateConsultIndustries({
      subDataObject: dataObject.list.industry.content,
      elementID: allIDs.consult.introLists,
      titleStr: getWord("industry", listDictionary)
    });

    [
      {
        subDataObject: dataObject.education,
        titleStr: getWord("education", resumeDictionary),
        fromPlace: getWord("fromPlace", resumeDictionary)
      },
      {
        subDataObject: dataObject.certificates,
        titleStr: getWord("certificates", resumeDictionary),
        fromPlace: getWord("fromPlace", resumeDictionary)
      },
      {
        subDataObject: dataObject.languages,
        titleStr: getWord("languages", resumeDictionary)
      },
    ].forEach(item => populateConsultTable({ ...item, elementID: allIDs.consult.introLists }));

    const mergedConsultExperience =
      merge_recursive(consultDataObject.experience,
                      ...Object.keys(consultDataObject.experience)
                            .map((key) => {
                                    return {[key] : dataObject.experience[key] || {}};
                             })
      );

    populateConsultExperiences({
      subDataObject: mergedConsultExperience,
      subDictionary: resumeDictionary,
      languageSymbol,
      elementID: allIDs.consult.experience,
      titleStr: getWord("experience", resumeDictionary)
    });

    populateConsultSkillsList({
      subDataObject: dataObject.list,
      languageDictionary,
      elementID: allIDs.consult.skillsList,
      titleStr: getWord("skillsList", consultDictionary)
    });

    populatePrintGuide({
      subDataObject: consultDataObject.printGuide,
      elementID: allIDs.consult.print.guide,
      titleStr: getWord("printGuide", consultDictionary)
    });
  }


  // ---------------------------------------------------------
  // -- populate the page ------------------------------------
  const populateResume = ({ dataObject, languageDictionary, languageSymbol }) => {

    for (const [key, subDataObject] of Object.entries(dataObject)) {

      switch (key) { // do not create area & title elements for those
        case "header":
        case "footer":
        case "svg":
        case "wordCloud":
          continue;
      }

      if (key === "list") {
        populateList({
          subDataObject,
          languageDictionary
        });
        continue;
      }

      if (key === "about") {
        populateAbout({
          subDataObject,
          subDictionary: languageDictionary.about
        });
        continue;
      }

      const area = document.getElementById(key);
      const title = createTitle(getWord(key, languageDictionary.resume));

      switch (key) {
        case "languages":
          area.append(title, makeTableLang(subDataObject));
          break;

        case "education":
        case "certificates":
          area.append(title,
                      makeTable({
                        subDataArray: Object.values(subDataObject),
                        fromPlace: languageDictionary.resume?.fromPlace
                      })
                     );
          break;

        case "tools":
        case "hobbies":
          area.append(title, listItems({ listObject: subDataObject }));
          break;

        case "experience":
          area.append(title,
                      ...populateExperiences({
                           subDataObject,
                           subDictionary: languageDictionary.resume,
                           languageSymbol
                         })
                     );
          break;

        case "technologies":
          area.append(title);
          for (const [subKey, techDataObject] of Object.entries(subDataObject)) {
            area.append(createTitle(getWord(subKey, languageDictionary.levels), "h4"),
                        listItems({ listObject: techDataObject }));
          }
          break;
      }

    }
  }


  // ---------------------------------------------------------
  // -- languages --------------------------------------------

  /* https://www.localeplanet.com/icu/ has a list of locale ids
     like:
      da     Danish              dansk
      da_DK  Danish (Denmark)    dansk (Danmark)
      da_GL  Danish (Greenland)  dansk (Grønland)
      ...
      en_DK  English (Denmark)   English (Denmark)
  */

  const languages = Object.freeze({
    daDK: Symbol.for("da-DK"),
    enGB: Symbol.for("en-GB")
  });

  // ---------------------------
  const getLanguageSymbol = (languageStr) => {
    for (const lang of (languageStr ? [languageStr] : []).concat(window.navigator.languages)) {
      switch (lang.substring(0, 2)) {
        case 'da':
          return languages.daDK;
        case 'en':
          return languages.enGB;
      }
    }

    return languages.enGB;  // default
  }

  // ---------------------------
  const getOtherLanguageSymbol = (language) => {
    const symbol = typeof language === 'symbol' ? language : Symbol.for(language);

    switch (symbol) {
      case Symbol.for("en-GB"):
        return languages.daDK;
      case Symbol.for("da-DK"):
        return languages.enGB;
    }
    return;
  }

  // ---------------------------
  // Using the code from https://stackoverflow.com/a/59243564
  // by: https://stackoverflow.com/users/456164/thiago-mata
  const merge_recursive = (...list) => {
    return list.reduce(
      (a,b) => {
        if ( // for non objects return b if exists or a
             ! ( a instanceof Object ) || ! ( b instanceof Object )
              ||
             // arrays are objects, but if the content isn't..
             ( (( a instanceof Array ) || ( b instanceof Array ))
                && typeof a[1] !== 'object')
           ) {
          return b !== undefined ? b : a;
        }

        // for objects, get the keys and combine them
        const keys = Object.keys(a).concat(Object.keys(b));
        return keys.map(key => {return {
                                  [key]: merge_recursive(a[key],b[key]) }
                               })
                   .reduce((x,y) => {return { ...x, ...y }} );
        }
    )
  }

  // ---------------------------
  /* Note that this requires a webserver during development,
      ..since browsers require either loading from a src using a script tag
      ..or fetching from a same server.
      Fetching from the local filesystem gives a CORS violation.
  */
  const loadLanguage = async (languageSymbol) => {
    let languageStr;
    try {
      // may throw TypeError: undefined is not a symbol
      languageStr = Symbol.keyFor(languageSymbol);
    } catch {
      // set it to English
      languageStr = Symbol.keyFor(languages.enGB);
    }

    const urls = [
      `data/resumeObject.${languageStr}.json`,
      `data/resumeConsultObject.${languageStr}.json`,
      `data/resumeDictionary.${languageStr}.json`,
    ];

    const [languageDataObject, languageConsultDataObject, languageDictionary] =
      await Promise.all(
        urls.map(url =>
                   fetch(url)
                  .then(result => {
                          if (result.ok && result.status === 200) {
                            return result.json();
                          }
                          throw result;
                    })
                  .catch((error) => {
                            console.error("loadLanguage - error.", error);
                            throw { error: error, customMessage: `Language ${languageStr} not possible`}
                    })
        )
      );

    return [
             merge_recursive(resumeObjectBase, languageDataObject || {}),
             merge_recursive(resumeConsultObjectBase, languageConsultDataObject || {}),
             languageDictionary
           ];
  }

  // ---------------------------
  const getWord = (word, list) => {
    return (list || {})[word] || word;
  }


  // ---------------------------------------------------------
  // -- Copy to/from shadow DOM ------------------------------
  const copyInitialDOM = () => {
    const current = document
                      .getElementById(allIDs.activeNshadow.activeLanguage)
                      .firstElementChild;
    current.querySelector(`#${allIDs.noscript}`)?.remove();

    const copy = current.cloneNode(true);
    copy.id = allIDs.activeNshadow.template;

    const inactiveDOM = document.getElementById(allIDs.activeNshadow.shadows);
    const shadow = inactiveDOM.attachShadow({ mode: "open" });
    shadow.append(copy);
  }

  // ---------------------------
  const setDatasetLanguage = (languageSymbol) => {
    const current = document
                      .getElementById(allIDs.activeNshadow.activeLanguage)
                      .firstElementChild;
    current.dataset.language = Symbol.keyFor(languageSymbol);
  }

  // ---------------------------
  const getShadowRoot = () => {
    return document.getElementById(allIDs.activeNshadow.shadows).shadowRoot;
  }

  // ---------------------------
  const copyCloudToShadowTemplate = () => {
    const svg = document.getElementById(allIDs.wordCloud).childNodes[0];
    const shadow = getShadowRoot();
    if (!shadow)
      return;

    shadow.getElementById(allIDs.wordCloud)?.append(svg.cloneNode(true));
  }

  // ---------------------------
  const findShadowLanguage = (languageSymbol) => {
    const shadow = getShadowRoot();
    if (!shadow)
      return;

    for (const div of shadow.childNodes) {
      if (Symbol.keyFor(languageSymbol) === div.dataset?.language) {
        return div;
      }
    }
  }

  // ---------------------------
  const swapTemplate = (languageSymbol, remove = false) => {
    const shadow = getShadowRoot();
    if (!shadow)
      return;

    const template = shadow.getElementById(allIDs.activeNshadow.template);
    const copy = template.cloneNode(true);
    copy.removeAttribute("id");

    const active = document.getElementById(allIDs.activeNshadow.activeLanguage);
    const current = active.firstElementChild;

    if (remove) {
      current.remove();
    } else {
      copy.dataset.language = Symbol.keyFor(languageSymbol);
      shadow.append(current);
    }

    active.append(copy);
  }

  // ---------------------------
  const swapLanguage = (reuseDiv, remove = false) => {
    const shadow = getShadowRoot();
    if (!shadow)
      return;

    const active = document.getElementById(allIDs.activeNshadow.activeLanguage);
    const current = active.firstElementChild;

    if (remove) {
      current.remove();
    } else {
      shadow.append(current);
    }
    active.append(reuseDiv);
  }

  // ---------------------------
  const replicateActive = () => {
    const shadow = getShadowRoot();
    if (!shadow)
      return;

    // active button
    const id = shadow
                 .querySelector(`div[data-language] #${allIDs.navigation} button.active`)
                 ?.id;
    if (id) {
      const button = document.getElementById(id);
      handleActive({ target : button });
      button.click(); // ensure the right page is shown
    }

    // expansion of printGuide
    const className = shadow
                        .querySelector(`div[data-language] #${allIDs.consult.print.guideContent}`)
                        ?.className;
    if (className) {
      const guideContent = document.getElementById(allIDs.consult.print.guideContent);
      if (guideContent)
        guideContent.className = className;
    }
  }

  // ---------------------------------------------------------
  // -- Change the language between da-DK & en-GB  -----------
  const changeLanguage = async (languageSymbol) => {
    let reuseDiv = findShadowLanguage(languageSymbol);

    if (reuseDiv) {
      swapLanguage(reuseDiv);
      setDocumentTitle({ languageSymbol: languageSymbol });
    } else {

      try {
        const [mergedDataObject, mergedConsultDataObject, languageDictionary] =
          await loadLanguage(languageSymbol);

        swapTemplate(languageSymbol);

        try {
          setUpPage({
            dataObject: mergedDataObject,
            consultDataObject: mergedConsultDataObject,
            languageDictionary,
            languageSymbol
          });

        } catch (setUpError) {
          reuseDiv = findShadowLanguage(getOtherLanguageSymbol(languageSymbol)); // original
          swapLanguage(reuseDiv, true);                                          // swap back

          console.error("changeLanguage - setUpError.", setUpError);  // for developers
          throw "Language " + Symbol.keyFor(languageSymbol) + " cannot be loaded"
        }

      } catch (error) {
        showNotice(error);
      }
    }

    replicateActive();
  }


  // ---------------------------------------------------------
  // -- Setting up the page after language load --------------
  const setUpPage = (objectParam) => {
    const { dataObject,
            languageDictionary,
            languageSymbol } = objectParam;

    addNoticeListener();

    setDocumentTitle({
      displayName: dataObject.header.name,
      documentType: dataObject.header.document,
      languageSymbol: languageSymbol
    });
    createHeader(dataObject);
    createFooter(dataObject);

    populateResume({ dataObject, languageDictionary, languageSymbol });
    populateConsultancies(objectParam);

    setupButtons({ svgObjects: dataObject.svg, languageDictionary });

    setTimeout(() => hideSplash(), 500);
  }


  // ---------------------------------------------------------
  // -- Setting up the first page  ---------------------------
  const setUpInitialPage = async (languageSymbol) => {
    const [mergedDataObject, mergedConsultDataObject, languageDictionary] =
      await loadLanguage(languageSymbol);

    defaultTheme();
    setUpPage({
      dataObject: mergedDataObject,
      consultDataObject: mergedConsultDataObject,
      languageDictionary,
      languageSymbol
    });

    // The wordcloud needs to wait until setUpPage returns, since an error
    // ..inside SetUpPage will result in trying for the other lanugage.
    // ..which would make the async wordCloud method be called twice.
    wordCloud(mergedDataObject.wordCloud);

    hideExtra();
    setDatasetLanguage(languageSymbol);
  }


  // ---------------------------------------------------------
  // -- Do it ------------------------------------------------
  const makeItHappen = async () => {

    let languageSymbol = getLanguageSymbol() // default

    // This cannot be done with the wordcloud inside
    // ..since creating the wordCloud is async
    // After the wordCloud is created, it will copy "itself" into the template
    copyInitialDOM();          // copy the initial DOM to template

    try {

      await setUpInitialPage(languageSymbol);

    } catch (error) {
      try {
        swapTemplate("", true);

        // the other language.
        // refactor if adding more languages! :)
        languageSymbol = getOtherLanguageSymbol(languageSymbol);

        await setUpInitialPage(languageSymbol);

      } catch (otherError) {

        // none of the languages work.
        console.error("makeItHappen - error.", error);            // for developers
        console.error("makeItHappen - otherError.", otherError);  // for developers

        do404("This page desperately needs developer attention..");

        setTimeout(() => hideSplash(), 500);
        return; // That's it! Nothing to be done about an error at this point.
      }
    }
  }

  window.addEventListener("load", () => makeItHappen(), false);

})();
