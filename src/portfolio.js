/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abdul Ahad ",
  title: "Hello, folks! I'm Abdul Ahad Jamal I am an Ios Developer ! take a sneak peak of my journey from 2017 onwards when iphone x came out",
  // subTitle: emoji(
  //   "take a sneak peak of my journey when i started in  2017 when iphone x came out "
  // ),
  resumeLink:
    "https://drive.google.com/file/d/1Ntl5kEyK2koRKVGIMgZgBjbcuZWfq9kj/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/frodo10messi",
  linkedin: "https://www.linkedin.com/in/abdul-a-1b133814a/",
  // gmail: "saadpasta70@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://frodomessi10.medium.com/",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      // skillName: "html-5",
      // fontAwesomeClassname: "fab fa-html5"
    },
    {
      // skillName: "css3",
      // fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      // skillName: "sass",
      // fontAwesomeClassname: "fab fa-sass"
    },
    {
      // skillName: "JavaScript",
      // fontAwesomeClassname: "fab fa-js"
    },
    {
      // skillName: "reactjs",
      // fontAwesomeClassname: "fab fa-react"
    },
    {
      // skillName: "nodejs",
      // fontAwesomeClassname: "fab fa-node"
    },
    {
      // skillName: "swift",
      // fontAwesomeClassname: "fab fa-swift"
    },
    {
      // skillName: "npm",
      // fontAwesomeClassname: "fab fa-npm"
    },
    {
      // skillName: "sql-database",
      // fontAwesomeClassname: "fas fa-database"
    },
    {
      // skillName: "aws",
      // fontAwesomeClassname: "fab fa-aws"
    },
    {
      // skillName: "firebase",
      // fontAwesomeClassname: "fas fa-fire"
    },
    {
      // skillName: "python",
      // fontAwesomeClassname: "fab fa-python"
    },
    {
      // skillName: "docker",
      // fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ned University",
      logo: require("./assets/images/NEDUET_logo.png"),
      subHeader: "Bachelor's degree, Software engineering",
      duration: "December 2015 - Auguest 2019"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    // {
    //   role: "Software Engineer",
    //   company: "Facebook",
    //   companylogo: require("./assets/images/facebookLogo.png"),
    //   date: "June 2018 – Present",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    // },
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "AppStore",
  subtitle: "professional apps that i worked on for clients but don't own",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "AnyRoad",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Learn More",
          url: "https://apps.apple.com/de/app/anyroad-front-desk/id1154928619?l=en-GB"
        }
        //  you can add extra buttons here.
      ]
    },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle: " Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Python",
      subtitle: "Certifcation for python",
      image: require("./assets/images/python.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Introduction to Data Science in Python",
          url: "https://www.coursera.org/account/accomplishments/verify/A3ATEGJZVGSE"
        }
      ]
    },
    {
      title: "Swift",
      subtitle: "Certifcation from Udemny for Swift",
      image: require("./assets/images/swift.png"),
      imageAlt: "Swift",
      footerLink: [
        {
          name: "iOS Chat Application like WhatsApp and Viber",
          url: "https://www.udemy.com/certificate/UC-726980d3-87d1-4ebb-9de6-1913ea962cb8/"
        },
        {
          name: "iOS: From Beginner to Paid Professional™",
          url: " https://www.udemy.com/certificate/UC-4e2ef424-6965-4ac6-b5c7-4b117ad167dd/"
        }
      ]
    },

    {
      title: "Flutter",
      subtitle: "Certifcation from Udemny for flutter",
      image: require("./assets/images/flutter.png"),
      imageAlt: "Flutter Logo",
      footerLink: [
        {
          name: "Flutter - Clean Architecture With MVVM",
          url: "https://www.udemy.com/certificate/UC-fbe5dcff-2d1f-4e24-9e3f-f567083510c2/"
        },
        {
          name: "Flutter: The Complete Developer's Guide ",
          url: "https://www.udemy.com/certificate/UC-add69029-f1ff-463c-a4ef-ab0a27d9e35f/?utm_medium=email&utm_campaign=email&utm_source=sendgrid.com"
        }
      ]
    },

    {
      title: "React Native",
      subtitle: "Certifcation from Udemny for React Native",
      image: require("./assets/images/react-native.png"),
      imageAlt: "Flutter Logo",
      footerLink: [
        {
          name: "React Native - design, code and publish",
          url: "https://www.udemy.com/certificate/UC-4d62406d-bf84-4e9b-8714-15568f6ebfef/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email"
        },
        {
          name: "React Native Firebase & Redux(Updated Hooks)",
          url: "https://www.udemy.com/certificate/UC-8LDDP6SF/"
        },
        {
          name: "A Complete RN Course - Redux - Context API ",
          url: "https://www.udemy.com/certificate/UC-2c7a481d-0b49-40df-b52d-04ac74367a19/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I have recently started to document my learnings to help others and myself",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me "),
  // subtitle:
  //   "send me a ping ",
  // number: "+92-0000000000",
  email_address: "abdul_ahad1996@live.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
