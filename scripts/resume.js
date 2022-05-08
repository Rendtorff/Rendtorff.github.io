(function() {
  "use strict";

  // Note that this script is highly dependent on
  // the layout of the resumeObject, including key names.

  // ---------------------------------------------------------
  // -- constants --------------------------------------------
  const fromPlace = "from ";

  const classExtra = "extra";
  const classTdEmpty = "empty"

  const themeDark = "dark";
  const themeLight = "light";

  const leftListId = "leftList";
  const rightListId = "rightList";
  const leftAboutId = "leftAbout";
  const rightAboutId = "rightAbout";

  const aboutParagraph = "paragraph";
  const aboutList = "list";

  const resumeId = "resume";
  const listId = "list";
  const aboutId = "about";
  const IDS = [resumeId, listId, aboutId];

  // used with confettiButton & fairyDustCursor
  const fairyDust = {turnOff: false};
  const fairyDustScriptName = "scripts/fairyDustCursor.js";


  // ---------------------------------------------------------
  // -- removing splash screen -------------------------------
  const hideSplash = () => {
    const splash = document.getElementById("splash");
    splash.classList.remove("show");
    setTimeout(() => splash.remove(), 1000); // same as the css "transition"
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
  const wordCloud = async () => {

    try {
      const urls = [
        "https://d3js.org/d3.v7.min.js",
        "https://cdn.jsdelivr.net/gh/jasondavies/d3-cloud/build/d3.layout.cloud.js",
      ];

      await Promise.all(urls.map(addScript));

    } catch (error) {
      console.log(error + ". Word cloud not possible.");
      return; // exit with no word cloud
    }

    const { size, words } = resumeObject.wordCloud;

    // This overwrites the @media style
    // const image = document.getElementById("image");
    // image.style.marginBottom = (100 - parseInt(size.vertical)) + "px";
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
        d3.select("#image")
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
  const createHeader = () => {
    const { header, svg } = resumeObject;

    const name = document.createElement("h1");
    const displayName = header.name;
    name.innerText = displayName
    const documentTitle = document.querySelector("head title");
    documentTitle.innerText = displayName + " - résumé";

    const title = document.createElement("h2");
    title.innerText = header.title;

    const area = document.createElement("span");
    area.innerText = header.area;
    area.prepend(createSvg(svg.home));
    area.className = "home";

    const contact = document.createElement("span");
    contact.innerText = header.contact;
    contact.prepend(createSvg(svg.mail));
    contact.className = "mail";

    const pAreaContact = document.createElement("div");
    pAreaContact.append(wrapNobr(area), wrapNobr(contact));
    pAreaContact.id = "areaContact";

    const url = document.createElement("span");
    url.innerText = header.url;
    url.prepend(createSvg(svg.link));
    url.id = "url";
    const pUrl = document.createElement("p");
    pUrl.append(wrapNobr(url));

    const info = document.createElement("div");
    info.className = "info";
    info.append(pAreaContact, pUrl);

    const documentHeader = document.getElementById("header");
    documentHeader.append(name, title, info);
  };


  // ---------------------------------------------------------
  // -- footer -----------------------------------------------
  const createFooter = () => {
    const { footer, header: { name } } = resumeObject;

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
    document.querySelectorAll(`.${classExtra}`)
           .forEach(element => element.style.display = "none");
  }

  const showExtra = () => {
    document.querySelectorAll(`.${classExtra}`)
            .forEach(element => element.removeAttribute("style"));
  }

  const showHide = (show) => {
    document.getElementById(show).removeAttribute("style");
    IDS.forEach(
      id => {  // IDS contains all the page major divs
        if (id !== show)
          document.getElementById(id).style.display = "none";
    });
  }

  // ---------------------------
  const setUpHalfButton = (button, svgObject, title) => {
    const span = document.createElement("span");
    span.className = "narrow";
    span.innerText = title;

    button.title = "Toggle " + title;
    button.append(createSvg(svgObject), span);
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
        console.log(error + ". fairyDust confetti not possible.");
        return;
      }
      fairyDustCursor(fairyDust);
    }
  }

  // ---------------------------
  const handleActive = ({ target }) => {
    const active = document.querySelector(".active");
    if (active === target)
      return;
    active.classList.remove("active");
    target.classList.add("active");
  }

  // ---------------------------
  const addListener = (button, foonction) => {
    button.addEventListener("click", foonction);
  }

  // ---------------------------
  const buttonActions =
    new Map([
      [
        "onePageButton",
        button => addListener(button,
                              event => {hideExtra();
                                        showHide(resumeId);
                                        handleActive(event);})
      ],
      [
        "extendedButton",
        button => addListener(button,
                              event => {showExtra();
                                        showHide(resumeId);
                                        handleActive(event);})
      ],
      [
        "listButton",
        button => addListener(button,
                              event => {showHide(listId);
                                        handleActive(event);})
      ],
      [
        "aboutButton",
        button => addListener(button,
                              event => {showHide(aboutId);
                                        handleActive(event);})
      ],
      [
        "confettiButton",
        button => {
                    setUpHalfButton(button,
                                    // resumeObject.svg.confetti,
                                    resumeObject.svg.stars,
                                    "Confetti");
                    addListener(button, () => toggleFairyDust(button));
                  }
      ],
      [
        "lightDarkButton",
        button => {
                    setUpHalfButton(button,
                                    resumeObject.svg.theme,
                                    "Light/Dark");
                    addListener(button, () => toggleLightDark());
                  }
      ],
    ]);

  // ---------------------------
  const setupButtons = () => {
    [...document.getElementsByTagName("button")]
      .forEach(button => buttonActions.get(button.id)(button));
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
  const listItems = (obj) => {
    const list = document.createElement("ul");
    if (obj.include)
      list.append(...listCollection(obj.include));
    if (obj.extra)
      list.append(...listCollection(obj.extra, classExtra));
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
  const makeTable = (array) => {
    const table = document.createElement("table");

    table.append(...[...array].map(
      element => {
        const row = document.createElement("tr");
        row.append(makeCell(element["year"]),
                   makeCell(element["name"],
                            fromPlace + element["place"]));
        return row;
    }));

    return table;
  }

  // ---------------------------
  const makeTableLang = (array) => {
    const table = document.createElement("table");

    table.append(...[...array].map(
      element => {
        const row = document.createElement("tr");
        const language = makeCell(element["language"]);
        language.className = "language";
        row.append(language,
                   makeCell(element["level"]));
        return row;
    }));

    return table;
  }


  // ---------------------------------------------------------
  // -- populate the page of silly list ----------------------
  const makeTechRow = (obj, prepend = false) => {
    const row = document.createElement("tr");

    row.append(...Object.entries(obj).map(
      ([key, value]) => {
        const cell = document.createElement("td");
        cell.append(value);

        if (key === "item" && !prepend) {
          cell.colSpan = "2";
        } else if (key === "level") {
          cell.className = value.toLowerCase();
        }

        return cell;
    }));

    if (prepend) {
      const empty = document.createElement("td");
      empty.className = classTdEmpty;
      row.prepend(empty);
    }

    return row;
  }

  // ---------------------------
  const populateList = (obj) => {
    const leftList = document.getElementById(leftListId);
    const rightList = document.getElementById(rightListId);

    Object.entries(obj).forEach(
      ([key, value]) => {
        const subTitle = createTitle(key, "h3");

        const table = document.createElement("table");
        table.id = key;
        [...value].forEach(
          item => {
            if (!item.header) {
              table.append(makeTechRow(item));
            } else {
              table.append(makeTechRow({ item : item.header }));
              table.append(...[...item["items"]].map(
                item => makeTechRow(item, true)
              ));
            }
        });

        switch (key) {
          case "Project Lifecycle Methods":
          case "Project Lifecycle Tools":
          case "Languages":
          case "Development Tools":
          case "Workstation Tools":
          case "Text Formatting":
            leftList.append(subTitle, table);
            break;
          case "Database Management Systems":
          case "Other":
          case "Areas of Industry":
          case "Work Areas":
            rightList.append(subTitle, table);
            break;
        }
    });
  }


  // ---------------------------------------------------------
  // -- populate About ---------------------------------------
  const populateAbout = (obj) => {
    const leftAbout = document.getElementById(leftAboutId);
    const rightAbout = document.getElementById(rightAboutId);

    Object.entries(obj).forEach(
      ([key, value]) => {
        const subTitle = createTitle(key, "h3");

        const content =
          [...value.items].map(
            item => {
              if (item.type === aboutParagraph) {
                const paragraph = document.createElement("p");
                paragraph.innerHTML = item.content; // because they may contain html tags
                return paragraph;
              }
              if (item.type === aboutList) {
                const list = document.createElement("ul");
                list.append(...listCollection(item.content));
                return list;
              }
          })

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
      leftSide.className = "role"; // text underline
    leftSide.append(left);

    const heading = document.createElement("div");
    heading.classList.add("experienceSubHeader");

    heading.append(leftSide);

    if (right) {
      const rightSide = document.createElement("span");
      rightSide.className = "activeYears";
      rightSide.innerText = right;
      heading.append(rightSide);
    }

    return heading;
  }

  // ---------------------------
  const makeCompanySpan = (text) => {
    const span = document.createElement("span");
    span.className = "company";
    span.innerText = text;

    const outer = document.createElement("nobr");
    outer.append(span);

    return outer;
  }

  // ---------------------------
  const makeproject = (obj) => {
    const container = document.createElement("div");

    if (obj.title) {
      const head = makeFlexTitle({ left: obj.title,
                                   right: obj.years,
                                   role: true });
      container.append(head);
    }

    if (obj.name) {
      const name = document.createElement("span");
      const project = document.createElement("i");
      project.innerText = "Project: ";
      name.innerText = obj.name;
      name.className = "project";
      name.prepend(project);
      container.append(name);
    }

    const result = listItems(obj.results);

    container.append(result);
    return container;
  }


  // ---------------------------
  const populateExperiences = (obj) => {

    return Object.entries(obj).map(
      ([subKey, subValueObj]) => {
        const container = document.createElement("div");
        container.className = "experience";
        if (!subValueObj.onePage)
          container.classList.add(classExtra);

        const company = subValueObj.company;
        const jobtitle = subValueObj.title;

        if (company)
          container.append(makeFlexTitle({ left: makeCompanySpan(company),
                                           right: subValueObj.years }));
		    if (jobtitle)
          container.append(makeFlexTitle({ left: jobtitle,
                                           right: company ? null : subValueObj.years,
                                           role: company ? true : false }));

        subValueObj.projects.forEach(
          element => {
            const subProject = makeproject(element);
            if (jobtitle && company) {
              subProject.className = "subProject";
            } else {
              subProject.className = "mulTitle";
            }
            if (!element.onePage)
              subProject.classList.add(classExtra);
            container.append(subProject);
        });

        return container;
    })
  }


  // ---------------------------------------------------------
  // -- populate the page ------------------------------------
  const populate = () => {
    for (const [key, valueObj] of Object.entries(resumeObject)) {

      switch (key) { // no reason to create area & title elements for those
        case "header":
        case "footer":
        case "svg":
        case "wordCloud":
          continue;
      }

      if (key === "list") {
        populateList(valueObj);
        continue;
      }

      if (key === "about") {
        populateAbout(valueObj);
        continue;
      }

      const area = document.getElementById(key);
      const title = createTitle(key);

      switch (key) {
        case "languages":
          area.append(title, makeTableLang(valueObj));
          break;

        case "education":
        case "certificates":
          area.append(title, makeTable(valueObj));
          break;

        case "tools":
        case "hobbies":
          area.append(title, listItems(valueObj));
          break;

        case "experience":
          area.append(title, ...populateExperiences(valueObj));
          break;

        case "technologies":
          area.append(title);
          for (const [subKey, subValueObj] of Object.entries(valueObj)) {
            area.append(createTitle(subKey, "h4"),
                        listItems(subValueObj));
          }
          break;
      }

    }
  }


  // ---------------------------------------------------------
  // -- Do it ------------------------------------------------
  const makeItHappen = () => {
    defaultTheme();

    wordCloud();
    createHeader();
    createFooter();

    populate();
    hideExtra();

    setupButtons();

    setTimeout(() => hideSplash(), 500);
  }

  window.addEventListener("load", () => makeItHappen(), false);

})();
