import MovieCity from "../assets/projects/MovieCity.png";
import GoodWill from "../assets/projects/GoodWill.png";
import WhiteBoard from "../assets/projects/WhiteBoard.png";
import HyperLocalBE from "../assets/projects/HyperLocalBE.png";
import Delishably from "../assets/projects/Delishably.png";
import NewsMonkey from "../assets/projects/NewsMonkey.png";
import IRTour from "../assets/projects/IR.png";
import Mutation from "../assets/projects/Mutation.jpg";
import Notes4U from "../assets/projects/Notes4U.png";
import CakeSite from "../assets/projects/Cakesite.png";
import Crypto from "../assets/projects/Crypto.png";
import MeetUp from "../assets/projects/MeetUp.png";
import More from "../assets/projects/more.png";




// export const HERO_CONTENT = ``;

export const ABOUT_TEXT = `
Hello! My name is Akash Singh Narvariya, and I am pursuing my Bachelor’s in CSE from IIIT Sri City with a strong CGPA of 8.13.
I’m passionate about technology, particularly in full-stack development and Machine Learning, and I’ve had hands-on experience working with
frontend and backend frameworks, including React, Node.js, MongoDB, LSTM, and RNN.


`;

export const ABOUT_TEXT_2 = `
In my previous internships at Baoiam and Cookiezen, I worked as a full-stack developer, developing scalable solutions and managing server-side 
operations for efficient data handling  In these roles, I collaborated closely with teams to enhance functionality and resolve issues, which 
not only improved the user experience but also taught me the importance of teamwork and effective troubleshooting.
`;


export const PROJECTS = [
  
  
   {
    title: "WhiteBoard",
    image: WhiteBoard,
    description:
      " A real-time collaborative whiteboard application that enables multiple users to draw, write, and share ideas simultaneously. It supports live synchronization to reflect updates instantly across all connected users. Features include drawing tools, color selection, and undo/redo functionality. The system is designed for smooth performance and responsiveness. It demonstrates the use of real-time communication and interactive UI design.",
    technologies: ["NodeJS", "Express", "Socket.io", "Typescript", "Authentication", "MongoDB", "Ajax", "Session/cookie", "HTML", "CSS", "React", "Redux", "Tailwind", "Apis"],
    Link: "https://white-board-lemon.vercel.app/",
    GithubLink: "https://github.com/Akashsnar/WhiteBoard"
  },
  
 {
    title: "HyperLocal",
    image: HyperLocalBE,
    description:
      " A hyperlocal platform designed to provide services and content based on the user’s current location. It helps users discover nearby businesses, events, and resources efficiently. Location-based APIs are integrated to deliver accurate and relevant results. The application focuses on speed, scalability, and user-friendly design. It showcases the implementation of geolocation and personalized user experiences",
    technologies: ["NodeJS", "Redis", "Kafka", "ElasticSearch", "Authentication", "MongoDB", "Session/cookie", "Apis"],
    Link: "https://github.com/Akashsnar/HyperLocalBE",
    GithubLink: "https://github.com/Akashsnar/HyperLocalBE"
  },
  

  {
    title: "MovieCity",
    image: MovieCity,
    description:
      " A movie suggestion platform Facilitates users to obtain information about various movies (more than 1 million) and actors. Integrated Bootstrap, ReactJS, Redux and AJAX, improving page load speed by 40% and user satisfaction by 20",
    technologies: ["HTML", "CSS", "React", "Redux", "Apis"],
    Link: "https://movie-city-dun.vercel.app/",
    GithubLink: "https://github.com/Akashsnar/MovieCity"
  },


  {
    title: "Crypto Communication",
    image: Crypto,
    description:
      `
The Aim is the communication in the Smart Grid Power System for communication between Nodes with
Low Computational Power.
We use an Enhanced Certificateless Authentication and Key Agreement Protocol for the purpose. Which
has low overhead and provides highly secure communication using El-Gamal ECC-based Key Exchange
with low computational Cost
      `,
    technologies: ["Python", "Numpy", "PyECC", "fastapi", "React"],
    Link: "https://github.com/Akashsnar/Crypto-Communication",
    GithubLink: "https://github.com/Akashsnar/Crypto-Communication"
  },

  {
    title: "NewsMonkey",
    image: NewsMonkey,
    description:
      "News Website to get all types of news across the world (100+ countries). ∗ Project runs on online news APIs to fetch the news and implements functionalities of searching and filtering. ∗ Projects use technologies such as HTML5, CSS3, JAVASCRIPT, REACT.JS, and AXIOMS.",
    technologies: ["Node", "Express", "HTML", "CSS", "Api", "Bootstrap"],
    Link: "https://newsmonkey-hazel.vercel.app/",
    GithubLink: "https://github.com/Akashsnar/NewsApp"
  },


  {
    title: "IR-Tourism",
    image: IRTour,
    description:
      `
This project is a tourism-related search information retrieval system designed to provide users with relevant information
about tourist destinations, attractions, services and hotels.Also this project provides facility to mark the resultant searches 
as relevant or non relevant documents by user
      `,
    technologies: ["Python", "nltk", "Flask", "React", "prettytable", "web scraping"],
    Link: "https://github.com/Akashsnar/IR-Tourism-data/tree/master",
    GithubLink: "https://github.com/Akashsnar/IR-Tourism-data/tree/master"
  },

  {
    title: "GoodWill",
    image: GoodWill,
    description:
      "A full-stack web development project for NGO marketplaces. Developed a user-friendly platform that allows NGOs to showcase causes and provide better donation platform to users, website works on 3 mode functionality.Employed various technologies, including HTML5, CSS3, JavaScript, Bootstrap, Node.js, Express.js, MongoDB, and AJAX. ",
    technologies: ["NodeJS", "HTML", "CSS", "React", "MongoDB", "Ajax", "Session/cookie", "Admin-management-system", "Query/Search optimisation", "Redux"],
    Link: "https://good-will-2-0.vercel.app/",
    GithubLink: "https://github.com/Akashsnar/GoodWill_2.0"
  },

  {
    title: "Delishably",
    image: Delishably,
    description:
      `
The aim of the Restaurant Chain Management System is to create an admin application that can be used by the Restaurant Owner 
and Workers which helps to improve their efficiency and to maximize the profit margin of restaurant owners by providing them 
better service which includes data visualization as well
      `,
    technologies: ["Java", "JDK", "MySQL", "MySQL Workbench", "Java", "JDBC API", "JavaFX", "Scene Builder"],
    Link: "https://github.com/Akashsnar/Delishably",
    GithubLink: "https://github.com/Akashsnar/Delishably"
  },

  {
    title: "Mutation Prediction for Coronaviruse",
    image: Mutation,
    description:
      `This project aims to predict potential future mutations in the genome sequences of coronaviruses, such as SARS-CoV-2, using RNN and LSTM models.
      The project leverages Long Short-Term Memory (LSTM) Recurrent Neural Networks (RNNs) to analyze time-sequenced genome data.`,
    technologies: ["python", "tensorflow", "pytorch", "LSTM", "RNN"],
    Link: "https://github.com/Akashsnar/BioInformatics/",
    GithubLink: "https://github.com/Akashsnar/BioInformatics"
  },
  {
    title: "Notes4U",
    image: Notes4U,
    description:
      `
The aim of the Restaurant Chain Management System is to create an admin application that can be used by the Restaurant Owner 
and Workers which helps to improve their efficiency and to maximize the profit margin of restaurant owners by providing them 
better service which includes data visualization as well
      `,
    technologies: ["React", "MongoDB", "Node", "Authentication/Tokenisation", "Javascript", "Bootstrap"],
    Link: "https://notes-react-app-three.vercel.app/",
    GithubLink: "https://github.com/Akashsnar/NotesReactApp/tree/main"
  },
  {
    title: "Cakesite",
    image: CakeSite,
    description:
      `
CakeSite is a Simple HTML/CSS project build with bootstrap. Site builded to promote the Cake App "DeliCake"
 with user review, user plan and App Download features
      `,
    technologies: ["HTML", "CSS", "Bootstrap", "ionicons"],
    Link: "https://notes-react-app-three.vercel.app/",
    GithubLink: "https://github.com/Akashsnar/NotesReactApp/tree/main"
  },



  {
    title: "MeetUp",
    image: MeetUp,
    description:
      `MeetUp is a video meet site it is the loose clone of the zoom app. Its is build with the stream Apis for the video call and
       clerk Apis for the authentication. Website provide features of create meeting links, record the meetings, chatting during meetings.
      `,
    technologies: ["javascript", "express", "stream", "rest-api", "nextjs", "zoom", "tailwind", "clerk"],
    Link: "https://meet-up-ashy.vercel.app/",
    GithubLink: "https://github.com/Akashsnar/MeetUp/"
  },
 
  {
    title: "See all my Projects",
    image: More,
    description:
      ``,
    technologies: ["Github"],
    Link: "https://github.com/Akashsnar?tab=repositories/",
    GithubLink: "https://github.com/Akashsnar?tab=repositories"
  },
];

export const CONTACT = {
  address: "Banglore - India",
  phoneNo: "7067971622 / 9926225540",
  email: "aksn0204@gmail.com",
};
