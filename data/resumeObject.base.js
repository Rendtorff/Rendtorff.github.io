const resumeObjectBase = {
  header: {
    name: "Rikke Rendtorff",
    contact: "rikke@rendtorff.dk",
    url: "rikke.rendtorff.dk",
  },
  about: {
    personality: {
      side: "left",
    },
    passions: {
      side: "left",
    },
    goals: {
      side: "right",
    },
    strengthsWeak: {
      side: "right",
    },
  },
  technologies: {
    advanced: {
      include: ["Java", "Regex", "Oracle PL/SQL"],
      extra: ["SQL"],
    },
    intermediate: {
      include: ["HTML, CSS & JavaScript"],
    },
    beginner: {
      include: ["Python", "PowerShell", "DOS-scripting"],
      extra: ["Bash-scripting"],
    },
  },
  tools: {
    include: ["Git", "Maven & Gradle", "Visual Studio Code"],
    extra: ["Notepad++"],
  },
  education: {
    edu2009: {
      year: "2009",
    },
  },
  certificates: {
    cer2018: {
      year: "2018",
      name: "<a href=\"https://www.scrumalliance.org/community/profile/rrendtorff\" target=\"_blank\" rel=\"noopener noreferrer\">Certified ScrumMaster®</a>",
      place: "Scrum Alliance®"
    }
  },
  experience: {
    exp202306: {
      onePage: true,
      duration: {
        start: {year: 2023, month: 06},
          end: {year: 2023, month: 08}
      },
      company: "Banedanmark",
      projects: {
        pro202306: {
          onePage: true,
        },
      },
    },
    exp202208: {
      onePage: true,
      duration: {
        start: {year: 2022, month: 08},
          end: {year: 2022, month: 12}
      },
      company: "Nordea - Asset Management",
      projects: {
        pro202208: {
          onePage: true,
        },
      },
    },
    exp201608: {
      onePage: true,
      duration: {
        start: {year: 2016, month: 07},
          end: {year: 2022, month: 07}
      },
      projects: {
        pro201609: {
          onePage: true,
        },
        pro202005: {
          onePage: true,
          duration: {
            start: {year: 2020, month: 01},
              end: {year: 2022, month: 07}
          },
          results: {
            comments: [
                        "User scripts were created between May 2020 - September 2022",
                        "Advent of Code was implemented during March - June 2022",
                        "This résumé was implemented in late April - early May 2022",
                        "This résumé got Danish and consultancies in October/November 2023"
                      ]
          },
        },
      },
    },
    exp201208: {
      onePage: true,
      duration: {
        start: {year: 2012, month: 08},
          end: {year: 2016, month: 06}
      },
      company: "Nordea - Markets",
      projects: {
        pro201208: {
          onePage: true,
        },
      },
    },
    exp201107: {
      duration: {
        start: {year: 2011, month: 07},
          end: {year: 2011, month: 11}
      },
      company: "SEB Pension",
      projects: {
        pro201107: {
        }
      },
    },
    exp199805: {
      onePage: true,
      duration: {
        start: {year: 1998, month: 05},
          end: {year: 2011, month: 06}
      },
      company: "Rambøll Informatik",
      projects: {
        pro201104: {
          duration: {
            start: {year: 2011, month: 04},
              end: {year: 2011, month: 06}
          },
        },
        pro201004: {
          onePage: true,
          duration: {
            start: {year: 2010, month: 04},
              end: {year: 2011, month: 03}
          },
        },
        pro200909: {
          duration: {
            start: {year: 2009, month: 09},
              end: {year: 2010, month: 03}
          },
        },
        pro200905: {
          duration: {
            start: {year: 2009, month: 05},
              end: {year: 2009, month: 08}
          },
        },
        pro200002: {
          duration: {
            start: {year: 2000, month: 02},
              end: {year: 2009, month: 04}
          },
        },
        pro199906: {
          duration: {
            start: {year: 1999, month: 06},
              end: {year: 2000, month: 01}
          },
        },
        pro199805: {
          duration: {
            start: {year: 1998, month: 05},
              end: {year: 1999, month: 05}
          },
        },
      },
    },
  },
  wordCloud: {
    size: {
      horizontal: 280,
      vertical: 155,
    },
    words: [
      {text: "Java",          size: 50, fillColor: "#64b5f6"},
      // {text: "Oracle PL/SQL", size: 45, fillColor: "#1976d2"},
      {text: "PL/SQL",        size: 45, fillColor: "#1976d2"},
      {text: "SQL",           size: 40, fillColor: "#1976d2"},
      {text: "Regex",         size: 35, fillColor: "#455a64"},
      {text: "Git",           size: 25, fillColor: "#ef6c00"},
      {text: "JavaScript",    size: 20, fillColor: "#96a6a6"},
      {text: "Maven",         size: 15, fillColor: "#ffd54f"},
      {text: "HTML",          size: 15, fillColor: "#00838f"},
      {text: "CSS",           size: 15, fillColor: "#00bfa5"},
      {text: "PowerShell",    size: 10, fillColor: "#66d9ef"},
      {text: "Scrum Master",  size: 10, fillColor: "#ffa000"},
      {text: "Python",        size: 10, fillColor: "#99e227"},
      {text: "Linux",         size: 10, fillColor: "#f92342"},
      {text: "Gradle",        size: 10, fillColor: "#8d81ff"},
    ],
  },
  list: {
    "projectMethods": {
      side: "left",
      content: {
        ite01: {name: "Agile & Scrum",                       level: "intermediate", lastUsed: "2022", stars: 4, yearsUsed: 15},
        ite02: {name: "Unified Processes",                   level: "intermediate", lastUsed: "2011"},
        ite03: {                                             level: "advanced",     lastUsed: "2022"},
      }
    },
    "projectTools": {
      side: "left",
      content: {
        ite01: {name: "Jira",                                level: "intermediate", lastUsed: "2022", stars: 3, yearsUsed: 10},
        ite02: {name: "Confluence",                          level: "beginner",     lastUsed: "2022", stars: 2, yearsUsed: 10},
        ite03: {name: "Bamboo",                              level: "beginner",     lastUsed: "2016", stars: 1, yearsUsed: 1},
        ite04: {name: "Artifactory",                         level: "beginner",     lastUsed: "2016", stars: 1, yearsUsed: 1},
        ite05: {name: "BMC Remedy",                          level: "beginner",     lastUsed: "2016"},
        ite06: {                                             level: "beginner",     lastUsed: "2011"},
        ite07: {                                             level: "intermediate", lastUsed: "2010"},
        ite08: {name: "HP Quality Center",                   level: "intermediate", lastUsed: "2013"},
      },
    },
    "languages": {
      side: "left",
      content: {
        ite01: {name: "Java SE 8-11",                        level: "advanced",     lastUsed: "2022", stars: 4, yearsUsed: 6},
        ite02: {name: "Oracle PL/SQL",                       level: "advanced",     lastUsed: "2023", stars: 4, yearsUsed: 20},
        ite03: {name: "SQL (DDL/DQL/DML/DCL)",               level: "advanced",     lastUsed: "2023", stars: 4, yearsUsed: 20},
        ite04: {name: "DOS scripting",                       level: "beginner",     lastUsed: "2022"},
        ite05: {name: "BASH scripting",                      level: "beginner",     lastUsed: "2022"},
        ite06: {name: "JavaScript",                          level: "intermediate", lastUsed: "2022", stars: 3, yearsUsed: 5},
        ite07: {name: "Regex",                               level: "advanced",     lastUsed: "2023", stars: 4, yearsUsed: 5},
        ite08: {name: "PowerShell",                          level: "beginner",     lastUsed: "2021", stars: 2, yearsUsed: 1},
        ite09: {name: "Perl",                                level: "beginner",     lastUsed: "2010"},
        ite10: {name: "Python",                              level: "beginner",     lastUsed: "2023", stars: 2, yearsUsed: 1},
        ite13: {name: "C#",                                  level: "beginner",     lastUsed: "2023"},
        ite14: {name: "HTML",                                level: "intermediate", lastUsed: "2023", stars: 2, yearsUsed: 5},
        ite15: {name: "HTML5",                               level: "intermediate", lastUsed: "2023", stars: 3, yearsUsed: 15},
        ite16: {name: "CSS",                                 level: "intermediate", lastUsed: "2023", stars: 2, yearsUsed: 15},
        ite17: {name: "Matlab",                              level: "beginner",     lastUsed: "2002"},
        ite18: {name: "ANSI C",                              level: "beginner",     lastUsed: "2023", stars: 1, yearsUsed: 1},
        ite19: {name: "LISP",                                level: "beginner",     lastUsed: "1997"},
        ite20: {name: "Standard ML",                         level: "beginner",     lastUsed: "1997"},
        ite21: {name: "Visual Basic 6",                      level: "beginner",     lastUsed: "2000"},
        ite22: {name: "esri Avenue",                         level: "beginner",     lastUsed: "2000"},
      },
    },
    "libraries": {
      side: "left",
      content: {
        ite01: {name: "JUnit Jupiter",                       level: "intermediate", lastUsed: "2022"},
        ite02: {name: "Gson",                                level: "beginner",     lastUsed: "2022"},
        // ite03: {name: "RxJava",                              level: "beginner",     lastUsed: "2023"},
      },
    },
    "developmentTools": {
      side: "left",
      content: {
        ite01: {name: "Visual Studio Code",                  level: "intermediate", lastUsed: "2023"},
        ite02: {
          // group: "Oracle Database Tools",
          items: {
            item0201: {name: "SQL*Plus",                     level: "advanced",     lastUsed: "2022", stars: 3, yearsUsed: 20},
            item0202: {name: "SQL*Net",                      level: "beginner",     lastUsed: "2016"},
            item0203: {name: "Designer",                     level: "beginner",     lastUsed: "2010"},
            item0204: {name: "SQL Developer",                level: "intermediate", lastUsed: "2023", stars: 3, yearsUsed: 10},
            item0205: {name: "Data Modeller",                level: "beginner",     lastUsed: "2011"},
          },
        },
        ite03: {name: "TortioseSVN",                         level: "intermediate", lastUsed: "2014"},
        ite04: {                                             level: "intermediate", lastUsed: "2023", stars: 4, yearsUsed: 10},
        ite05: {name: "TortioseGit",                         level: "advanced",     lastUsed: "2022"},
        ite06: {name: "Sourcetree",                          level: "beginner",     lastUsed: "2022"},
        ite07: {name: "Microsoft Visual Source Safe",        level: "intermediate", lastUsed: "2000"},
        ite08: {name: "Apache Maven",                        level: "intermediate", lastUsed: "2022", stars: 2, yearsUsed: 3},
        ite09: {name: "Gradle",                              level: "intermediate", lastUsed: "2022", stars: 1, yearsUsed: 1},
        ite10: {
          group: "Quest",
          items: {
            item1001: {name: "SQL Navigator",                level: "beginner",     lastUsed: "2008"},
            item1002: {name: "Toad",                         level: "advanced",     lastUsed: "2016", stars: 3, yearsUsed: 4},
          },
        },
        ite11: {name: "Microsoft InstallShield",             level: "beginner",     lastUsed: "2000"},
        ite12: {name: "esri ArcView",                        level: "beginner",     lastUsed: "2000"},
      },
    },
    "textFormatting": {
      side: "left",
      content: {
        ite01: {name: "XML",                                 level: "beginner",     lastUsed: "2023", stars: 2, yearsUsed: 5},
        ite02: {name: "JSON",                                level: "intermediate", lastUsed: "2023", stars: 3, yearsUsed: 4},
      },
    },
    "workstationTools": {
      side: "left",
      content: {
        ite01: {name: "Oracle VM VirtualBox",                level: "intermediate", lastUsed: "2023"},
        ite02: {name: "Notepad++",                           level: "intermediate", lastUsed: "2023"},
        ite03: {name: "Textpad",                             level: "intermediate", lastUsed: "2012"},
        ite04: {
          group: "Microsoft Office",
          items: {
            item0201: {name: "Outlook",                      level: "intermediate", lastUsed: "2023"},
            item0202: {name: "Word",                         level: "intermediate", lastUsed: "2023"},
            item0203: {name: "Excel",                        level: "intermediate", lastUsed: "2023"},
            item0204: {name: "Powerpoint",                   level: "beginner",     lastUsed: "2023"},
            item0205: {name: "Visio",                        level: "beginner",     lastUsed: "2022"},
          },
        },
        ite05: {name: "LaTeX",                               level: "intermediate", lastUsed: "2008"},
        ite06: {name: "Thunderbird",                         level: "intermediate", lastUsed: "2023"},
        ite07: {name: "Putty",                               level: "intermediate", lastUsed: "2016"},
        ite08: {name: "TrueCrypt & VeraCrypt",               level: "intermediate", lastUsed: "2023"},
        ite09: {name: "KeePass",                             level: "intermediate", lastUsed: "2023"},
        ite10: {                                             level: "beginner",     lastUsed: "2012"},
        ite11: {name: "Flameshot",                           level: "intermediate", lastUsed: "2023"},
        ite12: {name: "ScreenToGif",                         level: "beginner",     lastUsed: "2021"},
        ite13: {name: "Microsoft Paint & Paint 3D",          level: "intermediate", lastUsed: "2023"},
        ite14: {name: "draw.io",                             level: "beginner",     lastUsed: "2023"},
      },
    },
    "os": {
      side: "right",
      content: {
        ite01: {name: "Microsoft Windows 7/8/10",            level: "intermediate", lastUsed: "2023", stars: 2, yearsUsed: 20},
        ite02: {name: "Linux Mint/Ubuntu",                   level: "beginner",     lastUsed: "2023", stars: 2, yearsUsed: 10},
      }
    },
    "dbms": {
      side: "right",
      content: {
        ite01: {name: "Informix",                            level: "intermediate", lastUsed: "1999"},
        ite02: {name: "Oracle 8 - 19c",                      level: "intermediate", lastUsed: "2023", stars: 4, yearsUsed: 20},
        ite03: {name: "MySQL",                               level: "intermediate", lastUsed: "2021", stars: 2, yearsUsed: 5},
        ite04: {name: "Microsoft SQL Server",                level: "beginner",     lastUsed: "2021", stars: 2, yearsUsed: 6},
      },
    },
    "industry": {
      side: "right",
      content: {
        ite01: {
          // "group": "Transport & Logistik",
          items: {
            item0101: {                                      level: "intermediate", lastUsed: "2009"},
            item0102: {                                      level: "beginner",     lastUsed: "2023"},
          },
        },
        ite02: {                                             level: "beginner",     lastUsed: "2011"},
        ite03: {                                             level: "beginner",     lastUsed: "2010"},
        ite04: {
          // "group": "Finance",
          items: {
            item0401: {                                      level: "beginner",     lastUsed: "2016"},
            item0402: {                                      level: "intermediate", lastUsed: "2016"},
            item0403: {                                      level: "beginner",     lastUsed: "2022"},
          },
        },
      },
    },
    "workAreas": {
      side: "right",
      content: {
        ite01: {
          // group: "User Experience",
          items: {
            item0101: {                                      level: "intermediate", lastUsed: "2011"},
            item0102: {                                      level: "intermediate", lastUsed: "2022"},
          }
        },
        ite02: {
          // group: "Analysis",
          items: {
            item0201: {                                      level: "advanced",     lastUsed: "2022"},
            item0202: {                                      level: "intermediate", lastUsed: "2023"},
            item0203: {                                      level: "intermediate", lastUsed: "2016"},
            item0204: {                                      level: "intermediate", lastUsed: "2016"},
          }
        },
        ite03: {
          // group: "System Design",
          items: {
            item0301: {                                      level: "beginner",     lastUsed: "2022"},
            item0302: {                                      level: "intermediate", lastUsed: "2009"},
            item0303: {name: "Database Design",              level: "intermediate", lastUsed: "2009"},
          }
        },
        ite04: {
          // group: "Systems Development",
          items: {
            item0401: {                                      level: "advanced",     lastUsed: "2022"},
            item0402: {                                      level: "intermediate", lastUsed: "2022"},
            item0403: {                                      level: "advanced",     lastUsed: "2022"},
            item0404: {                                      level: "intermediate", lastUsed: "2022"},
            item0405: {                                      level: "advanced",     lastUsed: "2022"},
            item0406: {                                      level: "intermediate", lastUsed: "2022"},
            item0407: {                                      level: "advanced",     lastUsed: "2015"},
            item0408: {                                      level: "intermediate", lastUsed: "2009"},
            item0409: {                                      level: "intermediate", lastUsed: "2016"},
          },
        },
        ite05: {
          // group: "Management",
          items: {
            item0501: {                                      level: "intermediate", lastUsed: "2010"},
            item0502: {                                      level: "beginner",     lastUsed: "2010"},
            item0503: {                                      level: "intermediate", lastUsed: "2010"},
            item0504: {                                      level: "advanced",     lastUsed: "2016"},
            item0505: {                                      level: "intermediate", lastUsed: "2016"},
            item0506: {                                      level: "intermediate", lastUsed: "2015"},
            item0507: {                                      level: "intermediate", lastUsed: "2011"},
            item0508: {                                      level: "advanced",     lastUsed: "2011"},
            item0509: {                                      level: "intermediate", lastUsed: "2010"},
            item0510: {                                      level: "intermediate", lastUsed: "2010"},
            item0511: {                                      level: "intermediate", lastUsed: "2011"},
          },
        },
        ite06: {
          // group: "Documentation",
          items: {
            item0601: {                                      level: "intermediate", lastUsed: "2016"},
            item0602: {                                      level: "beginner",     lastUsed: "2011"},
            item0603: {                                      level: "intermediate", lastUsed: "2016"},
            item0604: {                                      level: "intermediate", lastUsed: "2016"},
            item0605: {                                      level: "intermediate", lastUsed: "2014"},
            item0606: {                                      level: "intermediate", lastUsed: "2023"},
            item0607: {                                      level: "intermediate", lastUsed: "2023"},
            item0608: {                                      level: "intermediate", lastUsed: "2010"},
            item0609: {                                      level: "advanced",     lastUsed: "2011"},
            item0610: {                                      level: "intermediate", lastUsed: "2016"},
            item0611: {                                      level: "advanced",     lastUsed: "2022"},
          },
        },
        ite07: {
          // group: "Testing",
          items: {
            item0701: {                                      level: "advanced",     lastUsed: "2011"},
            item0702: {                                      level: "advanced",     lastUsed: "2016"},
            item0703: {                                      level: "intermediate", lastUsed: "2016"},
            item0704: {                                      level: "intermediate", lastUsed: "2022"},
            item0705: {                                      level: "intermediate", lastUsed: "2022"},
            item0706: {                                      level: "intermediate", lastUsed: "2016"},
            item0707: {                                      level: "intermediate", lastUsed: "2010"},
            item0708: {                                      level: "intermediate", lastUsed: "2016"},
            item0709: {                                      level: "beginner",     lastUsed: "2009"},
            item0710: {                                      level: "intermediate", lastUsed: "2011"},
          },
        },
      },
    },
    "other": {
      side: "right",
      content: {
        ite01: {name: "Node.js",                             level: "beginner",     lastUsed: "2022"},
        ite02: {
          group: "Oracle",
          items: {
            item0101: {name: "Forms",                        level: "beginner",     lastUsed: "2010"},
            item0102: {name: "Reports",                      level: "beginner",     lastUsed: "2014"},
          },
        },
        ite03: {name: "IBM Message Broker",                  level: "beginner",     lastUsed: "2007"},
        ite04: {
          group: "esri GIS",
          items: {
            item0401: {name: "ArcSDE",                       level: "beginner",     lastUsed: "2000"},
            item0402: {name: "MapObjects",                   level: "beginner",     lastUsed: "2000"},
          },
        },
        ite05: {name: "SAP Crystal Reports",                 level: "beginner",     lastUsed: "2022"},
        ite06: {name: "SimCorp Dimension",                   level: "beginner",     lastUsed: "2022", stars: 1, yearsUsed: 1},
      },
    },
  },
  svg: {
    from: "http://svgicons.sparkk.fr/ & https://tabler-icons.io/",
    link: {
      width: "14",
      height: "14",
      viewBox: "0 0 18 18",
      stroke: "var(--text)",
      d: "M16.469,8.924l-2.414,2.413c-0.156,0.156-0.408,0.156-0.564,0c-0.156-0.155-0.156-0.408,0-0.563l2.414-2.414c1.175-1.175,1.175-3.087,0-4.262c-0.57-0.569-1.326-0.883-2.132-0.883s-1.562,0.313-2.132,0.883L9.227,6.511c-1.175,1.175-1.175,3.087,0,4.263c0.288,0.288,0.624,0.511,0.997,0.662c0.204,0.083,0.303,0.315,0.22,0.52c-0.171,0.422-0.643,0.17-0.52,0.22c-0.473-0.191-0.898-0.474-1.262-0.838c-1.487-1.485-1.487-3.904,0-5.391l2.414-2.413c0.72-0.72,1.678-1.117,2.696-1.117s1.976,0.396,2.696,1.117C17.955,5.02,17.955,7.438,16.469,8.924 M10.076,7.825c-0.205-0.083-0.437,0.016-0.52,0.22c-0.083,0.205,0.016,0.437,0.22,0.52c0.374,0.151,0.709,0.374,0.997,0.662c1.176,1.176,1.176,3.088,0,4.263l-2.414,2.413c-0.569,0.569-1.326,0.883-2.131,0.883s-1.562-0.313-2.132-0.883c-1.175-1.175-1.175-3.087,0-4.262L6.51,9.227c0.156-0.155,0.156-0.408,0-0.564c-0.156-0.156-0.408-0.156-0.564,0l-2.414,2.414c-1.487,1.485-1.487,3.904,0,5.391c0.72,0.72,1.678,1.116,2.696,1.116s1.976-0.396,2.696-1.116l2.414-2.413c1.487-1.486,1.487-3.905,0-5.392C10.974,8.298,10.55,8.017,10.076,7.825",
    },
    mail: {
      width: "14",
      height: "14",
      // viewBox: "0 0 20 20",
      viewBox: "0 0 18 18",
      stroke: "var(--text)",
      d: "M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z",
    },
    home: {
      width: "14",
      height: "14",
      // viewBox: "0 0 20 20",
      viewBox: "0 0 19 19",
      stroke: "var(--text)",
      d: "M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z",
    },
    theme: {
      width: "14",
      height: "14",
      viewBox: "0 0 18 16",
      stroke: "currentColor",
      d: "M3.34 14.66A8 8 0 1 0 14.66 3.34 8 8 0 0 0 3.34 14.66Zm9.9-1.42a6 6 0 0 1-8.48 0l8.48-8.48a6 6 0 0 1 0 8.48Z",
    },
    confetti: {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      strokeWidth: "3",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M4 5h2 M5 4v2 M11.5 4l-.5 2 M18 5h2 M19 4v2 M15 9l-1 1 M18 13l2 -.5 M18 19h2 M19 18v2 M14 16.518l-6.518 -6.518l-4.39 9.58a1.003 1.003 0 0 0 1.329 1.329l9.579 -4.39z",
    },
    stars: {
      width: "15",
      height: "14",
      viewBox: "0 0 24 20",
      stroke: "currentColor",
      strokeWidth: "2",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M17.8 19.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z M6.2 19.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z M12 9.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z",
    },
  },
};
