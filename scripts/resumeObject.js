const resumeObject = {
  header: {
    name: "Rikke Rendtorff",
    title: "Systems Developer",
    area: "Copenhagen",
    contact: "rikke@rendtorff.dk",
    url: "rikke.rendtorff.dk",
  },
  footer: "Copyright © REPLACE. All rights reserved.",
  about: {
    "Personality": {
      side: "left",
      items: [
        {
          type: "paragraph",
          content: "I'm a naturally happy and outgoing person. I'm also very curious and not afraid to ask questions. I'm comfortable both with being sociable and working entirely on my own.",
        },
        {
          type: "paragraph",
          content: "I enjoy helping people. I've posted answers on <a href=\"https://stackoverflow.com\" target=\"_blank\" rel=\"noopener noreferrer\">Stack Overflow</a> and I often join a server on <a href=\"https://discord.com\" target=\"_blank\" rel=\"noopener noreferrer\">Discord</a> where I help people with questions about programming. I've also tutored mathematics in the real world. I've been told I'm patient when teaching and explain things well.",
        },
      ],
    },
    "Passions": {
      side: "left",
      items: [
        {
          type: "paragraph",
          content: "I'm passionate about taking responsibility for a given task. I rarely start implementing a solution until I understand the goal of the task. I'm persistent and I'll keep the ball rolling until the task is clarified, completed, tested, delivered, and <i>verified</i>. If that requires administrative tasks, like getting access to a company resource, then I view that as part of the task.",
        },
        {
          type: "paragraph",
          content: "I enjoy the process from start to finish, which especially includes, but is not limited to:",
        },
        {
          type: "list",
          content: [
            "Understanding the business needs",
            "Talking to uses and stakeholders",
            "Collaborating on finding options & solutions for everyone's benefit",
            "Identifying & fixing bugs",
            "Delivering & finishing",
          ]
        },
        {
          type: "paragraph",
          content: "While writing documentation isn't my favorite part of software development, I find it to be just as important as any other part. This includes user guides, both for end users, but also documentation on how to use a library. I believe the energy spent on creating software is wasted if nobody understands how to use it.",
        },
      ],
    },
    "Goals": {
      side: "right",
      items: [
        {
          type: "paragraph",
          content: "My overall goal is to enjoy the process and have fun with it.",
        },
        {
          type: "paragraph",
          content: "I have project goals. The project becomes my \"mission\" and I'll do what is in my power to see the project goals complete.",
        },
        {
          type: "paragraph",
          content: "I have no preference between maintaining an existing system and being part of the team that creates a completely new one. In my experince maintaining an already existing system often requires adding new features. I take as much pleasure in fixing bugs as making something brand new.",
        },
      ],
    },
    "Stengths and Weaknesses": {
      side: "right",
      items: [
        {
          type: "paragraph",
          content: "I've found that my strenghts are also my weaknesses. I can be perfectionistic, which at times is the enemy of \"good enough\". It can also save a lot of time revisiting the same feature over and over fixing bugs. I'm more inclined to \"get it right the first time\" than to \"get a head start and ship it early\"."
        },
        {
          type: "paragraph",
          content: "I'd like to know and remember everything, but I'm also aware that's it's not possble. I try to find a balance between the two by knowing enough to enable me to be productive and knowing how to easily find out details when I need it. For me, that means I'm often fuzzy on the details, and I'll have to make a quick lookup in the documentation."
        },
        {
          type: "paragraph",
          content: "I'm adaptive to change. If I need to learn a new language, a new tool, or use a different procedure, I'll be happy to learn and use it. However, I find it much more movitating to understand the reasoning for the change, even when I think trying out new techonology in itself is fun."
        },
      ],
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
  languages: [
    {
      language: "Danish",
      level: "Native",
    },
    {
      language: "English",
      level: "Fluent",
    },
  ],
  hobbies: {
    include: ["Puzzles", "Woodworking"],
    extra: ["Home Renovation", "Science Fiction movies"],
  },
  education: [
    {
      year: "2009",
      name: "B.Sc. in Computer Science & Mathematics",
      place: "University of Copenhagen (<a href=\"https://di.ku.dk/\" target=\"_blank\" rel=\"noopener noreferrer\">DIKU</a>)"
    },
  ],
  certificates: [
    {
      year: "2018",
      name: "<a href=\"https://www.scrumalliance.org/community/profile/rrendtorff\" target=\"_blank\" rel=\"noopener noreferrer\">Certified ScrumMaster®</a>",
      place: "Scrum Alliance®"
    },
  ],
  experience: [
    {
      onePage: true,
      years: "2023-2023",
      monthYears: "June 2023 - August 2023",
      title: "External Consultant as Systems Developer",
      company: "Banedanmark",
      projects: [
        {
          onePage: true,
          name: "Analyzing dataflow through an Oracle database",
          results: {
            include: [
                       "Created compact diagrams to reflect dataflow",
//                       "Made recommandations to accommodate changes to incoming data",
                       "Suggested solutions to accommodate changes to incoming data"
                     ],
          },
        },
      ],
    },
    {
      onePage: true,
      years: "2022-2022",
      monthYears: "August 2022 - December 2022",
      title: "External Consultant as Systems Developer",
      company: "Nordea - Asset Management",
      projects: [
        {
          onePage: true,
          name: "Oracle PL/SQL based reporting using data from a SimCorp Dimension database",
          results: {
            include: [
                       "Modified existing reports to comply with new business requirements",
                       "Documented processes and solutions in Confluence",
                       "Improved performance on large & business heavy queries"
                     ],
          },
        },
      ],
    },
    {
      onePage: true,
      years: "2016-2022",
      monthYears: "July 2016 - July 2022",
      title: "Freelancing & Knowledge Acquisition",
      projects: [
        {
          onePage: true,
          title: "Knowledge Acquisition",
          results: {
            include: [
                       "Java, Javascript, Regex, a little Python & shell scripting",
                       "Data structures & algorithms",
                       "Calculous & linear algebra",
                     ],
            extra: ["Successfully ran \"docker run hello-world\" on a Linux Mint :)"],
          },
        },
        {
          onePage: true,
		      years: "2020-2022",
          monthYears: "January 2020 - July 2022",
          title: "Small Personal Projects",
          results: {
            include: [
                       "Created a Java project based on solutions to <a href=\"https://adventofcode.com\" target=\"_blank\" rel=\"noopener noreferrer\">advent of code</a>",
                       "Wrote user scripts in vanilla JavaScript for use on <a href=\"https://stackoverflow.com\" target=\"_blank\" rel=\"noopener noreferrer\">Stack Overflow</a>",
                     ],
            extra: ["Designed and implemented <b class=rainbow>this</b> data-driven résumé"],
            comments: [
                        "Advent of Code was implemented during March - June 2022",
                        "This résumé was implemented in late April - early May 2022"
                      ]
          },
        },
      ],
    },
    {
      onePage: true,
      years: "2012-2016",
      monthYears: "August 2012 - June 2016",
      title: "External Consultant as Systems Developer",
      company: "Nordea - Markets",
      projects: [
        {
          onePage: true,
          name: "Oracle based system with multiple interfaces",
          results: {
            include: [
                       "Kept the system up to date with changing interfacing systems",
                       "Continuously improved the system according to business requirements",
                       "Established new methods for development & release procedures",
                       "Created user guides and taught Git"
                     ],
            extra: [
                     "Changed procedures to accommodate Nordea IT standards",
                     "Maintained system source integrity when migrating to new environment",
                   ],
          },
        },
      ],
    },
    {
      years: "2011-2011",
      monthYears: "July 2011 - November 2011",
      title: "Consultant of IT and Processes",
      company: "SEB Pension",
      projects: [
        {
          name: "Web portal end-user system based on Oracle & Java components",
          results: {
            include: [
                       "Evaluated current processes",
                       "Defined areas for improvement",
                       "Introduced new overall processes",
                     ],
          },
        },
      ],
    },
    {
      onePage: true,
      years: "1998-2011",
      monthYears: "May 1998 - June 2011",
      company: "Rambøll Informatik",
      projects: [
        {
          years: "2011-2011",
          monthYears: "April 2011 - June 2011",
          name: ".NET based system for Arbejdstilsynet",
          title: "Systems Developer",
          results: {
            include: [
                       "Performed regression tests",
                     ],
          },
        },
        {
          onePage: true,
          years: "2010-2011",
          monthYears: "April 2010 - March 2011",
          name: "Oracle based student administrative system for UNI-C",
          title: "Technical Site Coordinator",
          results: {
            include: [
                       "Supervised the Indian teams on project lifecycle & technical challenges",
                       "Defined code standard & teached best practice methods",
                       "Performed code & work review",
                       "Evaluated performance on the Indian side",
                     ],
          },
        },
        {
          years: "2009-2010",
          monthYears: "September 2009 - March 2010",
          name: "Oracle based student administrative system for UNI-C",
          title: "Systems Developer",
          results: {
            include: [
                       "Acquired knowledge from previous vendor",
                       "Design of user interface and modelled business logic",
                       "Handover to L&T Infotech in India for development outsourcing",
                     ],
          },
        },
        {
          years: "2009-2009",
          monthYears: "May 2009 - August 2009",
          name: "Mærsk Electronic Product Catalogue",
          title: "Systems Expert",
          results: {
            include: [
                       "Successful handover during a 3 months period to Tata Consultancy Services at Mærsk location in London",
                       "Kept maintaining the system during the transition to the Indian team",
                     ],
          },
        },
        {
          years: "2000-2009",
          monthYears: "February 2000 - April 2009",
          name: "Mærsk Electronic Product Catalogue",
          title: "Systems Developer",
          results: {
            include: [
                       "Continuously developed & maintained a large Oracle PL/SQL system",
                       "Optimized SQL queries",
                       "Advised customer on user interfaces and techincal options",
                       "Educated customer on system use",
                     ],
            extra: [
                     "On 24 hour \"on call\" support",
                     "Managed patch and releases",
                     "Developed web user interfaces using Oracle's PL/SQL built-in packages",
                   ],
          },
        },
        {
          years: "1999-2000",
          monthYears: "June 1999 - January 2000",
          name: "Standalone Windows GIS application",
          title: "Developer",
          results: {
            include: [
                       "Created the application using esri GIS and Visual Basic 6.0",
                       "Enabled resizable polygons and attaching points to them",
                       "Ensuring interface with a large database for geographical data",
                       "API for creation of images for upload to a webserver",
                     ],
          },
        },
        {
          years: "1998-1999",
          monthYears: "May 1998 - May 1999",
          name: "Electronic product catalogue for Louis Poulsen",
          title: "Developer",
          results: {
            include: [
                       "Created load of test data into an Informix database",
                       "Developed web user interfaces"
                     ],
          },
        },
      ],
    },
  ],
  wordCloud: {
    size: {
      horizontal: 280,
      vertical: 155,
    },
    words: [
      {text: "Java",          size: 50, fillColor: "#64b5f6"},
      {text: "Oracle PL/SQL", size: 45, fillColor: "#1976d2"},
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
    "Project Lifecycle Methods": [
      {item: "Agile & Scrum",                    level: "Intermediate", lastUsed: "2022"},
      {item: "Unified Processes",                level: "Intermediate", lastUsed: "2011"},
      {item: "Traditional Waterfall",            level: "Advanced",     lastUsed: "2022"},
    ],
    "Project Lifecycle Tools": [
      {item: "Jira",                             level: "Intermediate", lastUsed: "2022"},
      {item: "Confluence",                       level: "Beginner",     lastUsed: "2022"},
      {item: "Bamboo",                           level: "Beginner",     lastUsed: "2016"},
      {item: "Artifactory",                      level: "Beginner",     lastUsed: "2016"},
      {item: "BMC Remedy",                       level: "Beginner",     lastUsed: "2016"},
      {item: "Local Sharepoint",                 level: "Beginner",     lastUsed: "2011"},
      {item: "Proprietary Tools",                level: "Intermediate", lastUsed: "2010"},
      {item: "HP Quality Center",                level: "Intermediate", lastUsed: "2013"},
    ],
    "Languages": [
      {item: "Java SE 8-11",                     level: "Advanced",     lastUsed: "2022"},
      {item: "Oracle PL/SQL",                    level: "Advanced",     lastUsed: "2023"},
      {item: "SQL (DDL/DQL/DML/DCL)",            level: "Advanced",     lastUsed: "2023"},
      {item: "DOS scripting",                    level: "Beginner",     lastUsed: "2022"},
      {item: "BASH scripting",                   level: "Beginner",     lastUsed: "2022"},
      {item: "JavaScript",                       level: "Intermediate", lastUsed: "2022"},
      {item: "Regex",                            level: "Advanced",     lastUsed: "2023"},
      {item: "PowerShell",                       level: "Beginner",     lastUsed: "2021"},
      {item: "Perl",                             level: "Beginner",     lastUsed: "2010"},
      {item: "Python",                           level: "Beginner",     lastUsed: "2021"},
      {item: "Matlab",                           level: "Beginner",     lastUsed: "2002"},
      {item: "ANSI C",                           level: "Beginner",     lastUsed: "1999"},
      {item: "LISP",                             level: "Beginner",     lastUsed: "1997"},
      {item: "Standard ML",                      level: "Beginner",     lastUsed: "1997"},
      {item: "Visual Basic 6",                   level: "Beginner",     lastUsed: "2000"},
      {item: "esri Avenue",                      level: "Beginner",     lastUsed: "2000"},
    ],
    "Development Tools": [
      {item: "Visual Studio Code",               level: "Intermediate", lastUsed: "2023"},
      {
        header: "Oracle Database tools",
        items: [
          {item: "SQL*Plus",                     level: "Advanced",     lastUsed: "2022"},
          {item: "SQL*Net",                      level: "Beginner",     lastUsed: "2016"},
          {item: "Designer",                     level: "Beginner",     lastUsed: "2010"},
          {item: "SQL Developer",                level: "Intermediate", lastUsed: "2023"},
          {item: "Data Modeller",                level: "Beginner",     lastUsed: "2011"},
        ],
      },
      {item: "TortioseSVN",                      level: "Intermediate", lastUsed: "2014"},
      {item: "Git \"command line\"",             level: "Intermediate", lastUsed: "2023"},
      {item: "TortioseGit",                      level: "Advanced",     lastUsed: "2022"},
      {item: "Sourcetree",                       level: "Beginner",     lastUsed: "2022"},
      {item: "Microsoft Visual Source Safe",     level: "Intermediate", lastUsed: "2000"},
      {item: "Apache Maven",                     level: "Intermediate", lastUsed: "2022"},
      {item: "Gradle",                           level: "Intermediate", lastUsed: "2022"},
      {
        header: "Quest",
        items: [
          {item: "SQL Navigator",                level: "Beginner",     lastUsed: "2008"},
          {item: "Toad",                         level: "Advanced",     lastUsed: "2016"},
        ],
      },
      {item: "Microsoft InstallShield",          level: "Beginner",     lastUsed: "2000"},
      {item: "esri ArcView",                     level: "Beginner",     lastUsed: "2000"},
    ],
    "Text Formatting": [
      {item: "XML",                              level: "Beginner",     lastUsed: "2023"},
      {item: "JSON",                             level: "Intermediate", lastUsed: "2023"},
      {item: "HTML5 & CSS",                      level: "Intermediate", lastUsed: "2022"},
      {item: "LaTeX",                            level: "Intermediate", lastUsed: "2008"},
    ],
    "Workstation Tools": [
      {item: "Microsoft Windows 7/8/10",         level: "Intermediate", lastUsed: "2023"},
      {
        header: "Microsoft Office",
        items: [
          {item: "Outlook",                      level: "Intermediate", lastUsed: "2023"},
          {item: "Word",                         level: "Intermediate", lastUsed: "2023"},
          {item: "Excel",                        level: "Intermediate", lastUsed: "2023"},
          {item: "Powerpoint",                   level: "Beginner",     lastUsed: "2023"},
          {item: "Visio",                        level: "Beginner",     lastUsed: "2022"},
        ],
      },
      {item: "Linux Mint/Ubuntu",                level: "Beginner",     lastUsed: "2023"},
      {item: "Oracle VM VirtualBox",             level: "Intermediate", lastUsed: "2023"},
      {item: "Thunderbird",                      level: "Intermediate", lastUsed: "2023"},
      {item: "Putty",                            level: "Intermediate", lastUsed: "2016"},
      {item: "TrueCrypt & VeraCrypt",            level: "Intermediate", lastUsed: "2023"},
      {item: "KeePass",                          level: "Intermediate", lastUsed: "2023"},
      {item: "VPN (Virtual Private Network)",    level: "Beginner",     lastUsed: "2012"},
      {item: "Notepad++",                        level: "Intermediate", lastUsed: "2023"},
      {item: "Textpad",                          level: "Intermediate", lastUsed: "2012"},
      {item: "Flameshot",                        level: "Intermediate", lastUsed: "2023"},
      {item: "ScreenToGif",                      level: "Beginner",     lastUsed: "2021"},
      {item: "Microsoft Paint & Paint 3D",       level: "Intermediate", lastUsed: "2023"},
      {item: "draw.io",                          level: "beginner",     lastUsed: "2023"},
    ],
    "Database Management Systems": [
      {item: "Informix",                         level: "Intermediate", lastUsed: "1999"},
      {item: "Oracle 8 - 18g",                   level: "Intermediate", lastUsed: "2023"},
      {item: "MySQL",                            level: "Intermediate", lastUsed: "2021"},
      {item: "Miscrosoft SQL Server",            level: "Beginner",     lastUsed: "2021"},
    ],
    "Areas of Industry": [
      {item: "Transport & Logistics",            level: "Intermediate", lastUsed: "2009"},
      {item: "Shipping",                         level: "Intermediate", lastUsed: "2009"},
      {item: "Pension",                          level: "Beginner",     lastUsed: "2011"},
      {item: "Education",                        level: "Beginner",     lastUsed: "2010"},
      {item: "Capital Markets",                  level: "Beginner",     lastUsed: "2016"},
      {item: "Counterparty Credit Risk",         level: "Intermediate", lastUsed: "2016"},
      {item: "Asset Management",                 level: "Beginner",     lastUsed: "2022"},
      {item: "Railway",                          level: "Beginner",     lastUsed: "2023"},
    ],
    "Work Areas": [
      {item: "Business Analysis",                level: "Advanced",     lastUsed: "2022"},
      {item: "Systems Analysis",                 level: "Intermediate", lastUsed: "2023"},
      {item: "Risk Analysis",                    level: "Intermediate", lastUsed: "2016"},
      {item: "Usability",                        level: "Intermediate", lastUsed: "2011"},
      {item: "User Interface Design",            level: "Intermediate", lastUsed: "2022"},
      {item: "Data Analysis",                    level: "Intermediate", lastUsed: "2016"},
      {item: "Systems Design",                   level: "Beginner",     lastUsed: "2022"},
      {item: "Database Design",                  level: "Intermediate", lastUsed: "2009"},
      {item: "Data Modelling",                   level: "Advanced",     lastUsed: "2015"},
      {
        header: "System Development",
        items: [
          {item: "Back-end",                     level: "Advanced",     lastUsed: "2022"},
          {item: "Front-end",                    level: "Intermediate", lastUsed: "2022"},
        ],
      },
      {item: "Data Integration",                 level: "Intermediate", lastUsed: "2009"},
      {item: "Data Conversion",                  level: "Intermediate", lastUsed: "2016"},
      {item: "Systems Interface Design",         level: "Intermediate", lastUsed: "2009"},
      {item: "Code Refactoring",                 level: "Intermediate", lastUsed: "2022"},
      {item: "Error Correction",                 level: "Advanced",     lastUsed: "2022"},
      {item: "Estimation",                       level: "Advanced",     lastUsed: "2022"},
      {item: "Performance Tuning",               level: "Intermediate", lastUsed: "2016"},
      {item: "Technical Advisor",                level: "Intermediate", lastUsed: "2010"},
      {item: "Project handover",                 level: "Intermediate", lastUsed: "2010"},
      {item: "Outsourcing",                      level: "Intermediate", lastUsed: "2010"},
      {item: "Coordination",                     level: "Intermediate", lastUsed: "2011"},
      {item: "Defect Management",                level: "Intermediate", lastUsed: "2010"},
      {item: "Build Manager",                    level: "Advanced",     lastUsed: "2016"},
      {item: "Configuration Manager",            level: "Intermediate", lastUsed: "2016"},
      {item: "Workflow Evaluation",              level: "Intermediate", lastUsed: "2011"},
      {item: "Project Management",               level: "Beginner",     lastUsed: "2010"},
      {item: "Process Development",              level: "Intermediate", lastUsed: "2015"},
      {item: "Quality Assurance",                level: "Advanced",     lastUsed: "2011"},
      {
        header: "Documentation",
        items: [
          {item: "Requirement Specifications",   level: "Intermediate", lastUsed: "2016"},
          {item: "UML & Use Case Modelling",     level: "Beginner",     lastUsed: "2011"},
          {item: "Non-functional Requirements",  level: "Intermediate", lastUsed: "2016"},
          {item: "Detailed Business Logic",      level: "Intermediate", lastUsed: "2016"},
          {item: "Systems Architecture",         level: "Intermediate", lastUsed: "2014"},
          {item: "Entity Relationship Modelling",level: "Intermediate", lastUsed: "2023"},
          {item: "Test Reports",                 level: "Intermediate", lastUsed: "2010"},
          {item: "Release Notes",                level: "Intermediate", lastUsed: "2016"},
          {item: "User Manuals",                 level: "Advanced",     lastUsed: "2022"},
          {item: "Precise Defect Reporting",     level: "Advanced",     lastUsed: "2011"},
          {item: "Dataflow Diagrams",            level: "Intermediate", lastUsed: "2023"},
        ],
      },
      {
        header: "Testing",
        items: [
          {item: "Creating Test Cases",          level: "Advanced",     lastUsed: "2011"},
          {item: "Creating & finding Test Data", level: "Advanced",     lastUsed: "2016"},
          {item: "Test Plan",                    level: "Intermediate", lastUsed: "2016"},
          {item: "Unit Testing",                 level: "Intermediate", lastUsed: "2022"},
          {item: "Functional Testing",           level: "Intermediate", lastUsed: "2022"},
          {item: "Smoke Testing",                level: "Intermediate", lastUsed: "2016"},
          {item: "Integration Testing",          level: "Intermediate", lastUsed: "2010"},
          {item: "Performance Testing",          level: "Intermediate", lastUsed: "2016"},
          {item: "Stress Testing",               level: "Beginner",     lastUsed: "2009"},
          {item: "Regression Test",              level: "Intermediate", lastUsed: "2011"},
        ],
      },
    ],
    "Other": [
      {item: "Node.js",                          level: "Beginner",     lastUsed: "2022"},
      {
        header: "Oracle",
        items: [
          {item: "Forms",                        level: "Beginner",     lastUsed: "2010"},
          {item: "Reports",                      level: "Beginner",     lastUsed: "2014"},
        ],
      },
      {item: "IBM Message Broker",               level: "Beginner",     lastUsed: "2007"},
      {
        header: "esri GIS",
        items: [
          {item: "ArcSDE",                       level: "Beginner",     lastUsed: "2000"},
          {item: "MapObjects",                   level: "Beginner",     lastUsed: "2000"},
        ],
      },
      {item: "SAP Crystal Reports",              level: "Beginner",     lastUsed: "2022"},
      {item: "SimCorp Dimension",                level: "Beginner",     lastUsed: "2022"},
    ],
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
