// let variables = ["id", "achievementName", "keyName", "certificateTitle","certificateType","forAchievement"];

let noOfAchievement = 1;

const earnedCertificates = [
  {
    id: noOfAchievement++,
    achievementName: "Full Stack Web Development",
    keyName: "fsWebDev",
  },
  {
    id: noOfAchievement++,
    achievementName: "Programming Language",
    keyName: "pLang",
  },
  {
    id: noOfAchievement++,
    achievementName: "Competitive Programming",
    keyName: "compProg",
  },
  {
    id: noOfAchievement++,
    achievementName: "Corporate Compliance",
    keyName: "corporateCompliance",
  },
  // {
  //   id: noOfAchievement++,
  //   achievementName: "Experience",
  //   keyName: "exp",
  // },
  // {
  //   id: noOfAchievement++,
  //   achievementName: "Participation",
  //   keyName: "participate",
  // },
];

let fsWebDevCount = 1;
const fsWebDev = [
  {
    keyValue: fsWebDevCount++,
    certificateTitle: "Build Your Own Static Website",
    certificateType: 1,
    forAchievement: "Full Stack Web Development",
    imageName: "Build Your Own Static Website",
    issueDate: "February 8, 2022",
    description: "Web Development.",
    duration: "55+ Hrs",
    imagePath:
      "./assets/Certificates/Full Stack Web Development/Build Your Own Static Website.jpg",
    verificationLink: "https://10xiitian.ccbp.in/certificate/ZSKZRZNPMD",
  },
  {
    keyValue: fsWebDevCount++,
    certificateTitle: "Build Your Own Responsive Website",
    certificateType: 1,
    forAchievement: "Full Stack Web Development",
    imageName: "Build Your Own Responsive Website",
    issueDate: "July 7, 2023",
    description: "Web Development.",
    duration: "56+ Hrs",
    imagePath:
      "./assets/Certificates/Full Stack Web Development/Build Your Own Responsive Website.jpg",
    verificationLink: "https://10xiitian.ccbp.in/certificate/OMURCWPYQZ",
  },
  {
    keyValue: fsWebDevCount++,
    certificateTitle: "Build Your Own Dynamic Web Application",
    certificateType: 1,
    forAchievement: "Full Stack Web Development",
    imageName: "Build Your Own Dynamic Web Application",
    issueDate: "July 10, 2023",
    description: "Web Development.",
    duration: "104+ Hrs",
    imagePath:
      "./assets/Certificates/Full Stack Web Development/Build Your Own Dynamic Web Application.jpg",
    verificationLink: "https://10xiitian.ccbp.in/certificate/WUUZUWTUHT",
  },
  {
    keyValue: fsWebDevCount++,
    certificateTitle: "JavaScript Essentials",
    certificateType: 1,
    forAchievement: "Full Stack Web Development",
    imageName: "JavaScript Essentials",
    issueDate: "July 29, 2023",
    description: "Web Development.",
    duration: "46+ Hrs",
    imagePath:
      "./assets/Certificates/Full Stack Web Development/JavaScript Essentials.jpg",
    verificationLink: "https://10xiitian.ccbp.in/certificate/CZVNCEDFXF",
  },
  {
    keyValue: fsWebDevCount++,
    certificateTitle: "Introduction to Databases",
    certificateType: 1,
    forAchievement: "Full Stack Web Development",
    imageName: "Introduction to Databases",
    issueDate: "August 8, 2023",
    description: "Web Development.",
    duration: "56+ Hrs",
    imagePath:
      "./assets/Certificates/Full Stack Web Development/Introduction to Databases.jpg",
    verificationLink: "https://10xiitian.ccbp.in/certificate/IPZEPHJTED",
  },
  {
    keyValue: fsWebDevCount++,
    certificateTitle: "Responsive Web Design using Flexbox",
    certificateType: 1,
    forAchievement: "Full Stack Web Development",
    imageName: "Responsive Web Design using Flexbox",
    issueDate: "September 16, 2023",
    description: "Web Development.",
    duration: "42+ Hrs",
    imagePath:
      "./assets/Certificates/Full Stack Web Development/Responsive Web Design using Flexbox.jpg",
    verificationLink: "https://10xiitian.ccbp.in/certificate/CFYRPSNPVN",
  },
  {
    keyValue: fsWebDevCount++,
    certificateTitle: "Node JS",
    certificateType: 1,
    forAchievement: "Full Stack Web Development",
    imageName: "Node JS",
    issueDate: "September 19, 2023",
    description: "Web Development.",
    duration: "42+ Hrs",
    imagePath: "./assets/Certificates/Full Stack Web Development/Node JS.jpg",
    verificationLink: "https://10xiitian.ccbp.in/certificate/QUIOYCPWZH",
  },
  {
    keyValue: fsWebDevCount++,
    certificateTitle: "React JS - Getting started",
    certificateType: 1,
    forAchievement: "Full Stack Web Development",
    imageName: "React JS - Getting started",
    issueDate: "September 22, 2023",
    description: "Web Development.",
    duration: "42+ Hrs",
    imagePath:
      "./assets/Certificates/Full Stack Web Development/React JS - Getting started.jpg",
    verificationLink: "https://10xiitian.ccbp.in/certificate/",
  },
];

let pLangCount = 1;
const pLang = [
  {
    keyValue: pLangCount++,
    certificateTitle: "Python & OOP Concepts",
    certificateType: 1,
    forAchievement: "Programming Language",
    imageName: "Python & OOP Concepts",
    issueDate: "February 12, 2022",
    description: "Python Concepts.",
    duration: "57+ Hrs",
    imagePath:
      "./assets/Certificates/Programming Language/Python & OOP Concepts.jpg",
    verificationLink: "https://10xiitian.ccbp.in/certificate/EXSGOWJFSE",
  },
  {
    keyValue: pLangCount++,
    certificateTitle: "C++ and Foundations of STL",
    certificateType: 1,
    forAchievement: "Programming Language",
    imageName: "C++ and Foundations of STL",
    issueDate: "October 9, 2022",
    description: "C++.",
    duration: "15+ Hrs",
    imagePath:
      "./assets/Certificates/Programming Language/C++ and Foundations of STL.jpg",
    verificationLink: "https://10xiitian.ccbp.in/certificate/VWQJVAFLJA",
  },
];

let compProgCount = 1;
const compProg = [
  {
    keyValue: compProgCount++,
    certificateTitle: "Elementary Data Structures and Algorithms",
    certificateType: 1,
    forAchievement: "Competitive Programming",
    imageName: "Elementary Data Structures and Algorithms",
    issueDate: "February 13, 2022",
    description: "DSA Fundamentals.",
    duration: "29+ Hrs",
    imagePath:
      "./assets/Certificates/Competitive Programming/Elementary Data Structures and Algorithms.jpg",
    verificationLink: "https://10xiitian.ccbp.in/certificate/ZHXOQGMJWU",
  },
  {
    keyValue: compProgCount++,
    certificateTitle: "C++ and Foundations of STL",
    certificateType: 1,
    forAchievement: "Competitive Programming",
    imageName: "C++ and Foundations of STL",
    issueDate: "October 9, 2022",
    description: "C++.",
    duration: "15+ Hrs",
    imagePath:
      "./assets/Certificates/Competitive Programming/C++ and Foundations of STL.jpg",
    verificationLink: "https://10xiitian.ccbp.in/certificate/VWQJVAFLJA",
  },
];

let corporateComplianceCount = 1;
const corporateCompliance = [
  {
    keyValue: corporateComplianceCount++,
    certificateTitle: "Corporate Etiquette",
    certificateType: 2,
    forAchievement: "Corporate Compliance",
    imageName: "Corporate Etiquette",
    issueDate: "May 5, 2022",
    description: "Corporate Training.",
    issuedBy: "Learning and Development",
    imagePath:
      "./assets/Certificates/Corporate Compliance/Corporate Etiquette.jpg",
    certificationNo: "E-202205-176223",
  },
  {
    keyValue: corporateComplianceCount++,
    certificateTitle: "Business Ethics",
    certificateType: 2,
    forAchievement: "Corporate Compliance",
    imageName: "Business Ethics",
    issueDate: "May 9, 2022",
    description: "Corporate Training.",
    issuedBy: "Learning and Development",
    imagePath: "./assets/Certificates/Corporate Compliance/Business Ethics.jpg",
    certificationNo: "E-202205-176750",
  },
  {
    keyValue: corporateComplianceCount++,
    certificateTitle: "NBSO",
    certificateType: 2,
    forAchievement: "Corporate Compliance",
    imageName: "NBSO",
    issueDate: "May 9, 2022",
    description: "Corporate Training.",
    issuedBy: "Learning and Development",
    imagePath: "./assets/Certificates/Corporate Compliance/NBSO.jpg",
    certificationNo: "E-202205-176744",
  },
  {
    keyValue: corporateComplianceCount++,
    certificateTitle: "POSH",
    certificateType: 2,
    forAchievement: "Corporate Compliance",
    imageName: "POSH",
    issueDate: "May 9, 2022",
    description: "Corporate Training.",
    issuedBy: "Learning and Development",
    imagePath: "./assets/Certificates/Corporate Compliance/POSH.jpg",
    certificationNo: "E-202205-176747",
  },
];

// let expCount = 1;
// const exp = [
//   {
//     keyValue: expCount++,
//     certificateTitle: "",
//      certificateType: 3,
//     forAchievement: "Experience",
//     imageName: "",
//     issueDate: "",
//     description: "",
//     duration: "",
//     imagePath: "./assets/Certificates/Experience/",
//     verificationLink: "",
//   },
// ];

// let participateCount = 1;
// const participate = [
//   {
//     keyValue: participateCount++,
//     certificateTitle: "",
//      certificateType: 4,
//     forAchievement: "Participation",
//     imageName: "",
//     issueDate: "",
//     description: "",
//     duration: "",
//     imagePath: "./assets/Certificates/Participation/",
//     verificationLink: "",
//   },
// ];

// let id, forPath, imageName, imagePath;
// profileImage.map(imgItem => {
//     ({id, forPath, imageName, imagePath} = imgItem);

//     if(forPath=="home")
//         console.log(imagePath);
// });

export {
  earnedCertificates,
  fsWebDev,
  pLang,
  compProg,
  corporateCompliance,
  // exp,
  // participate,
};
