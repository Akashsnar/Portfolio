import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Aug 2023 - Sep 2023",
    role: "Full Stack Developer Intern",
    company: "CookieZen",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB", "PHP"],
  },
  
];

export const PROJECTS = [
  {
    title: "MovieCity",
    image: project1,
    description:
      " A movie suggestion platform Facilitates users to obtain information about various movies (more than 1 million) and actors. Integrated Bootstrap, ReactJS, Redux and AJAX, improving page load speed by 40% and user satisfaction by 20",
    technologies: ["HTML", "CSS", "React", "Redux", "Apis"],
    Link:"https://movie-city-dun.vercel.app/",
    GithubLink:"https://github.com/Akashsnar/MovieCity"
  },
  {
    title: "GoodWill",
    image: project2,
    description:
      "A full-stack web development project for NGO marketplaces. Developed a user-friendly platform that allows NGOs to showcase causes and provide better donation platform to users, website works on 3 mode functionality.Employed various technologies, including HTML5, CSS3, JavaScript, Bootstrap, Node.js, Express.js, MongoDB, and AJAX. ",
    technologies: ["NodeJS", "HTML", "CSS", "React", "MongoDB", "Ajax", "Session/cookie", "Admin-management-system", "Query/Search optimisation", "Redux"],
    Link:"https://good-will-2-0.vercel.app/",
    GithubLink:"https://github.com/Akashsnar/GoodWill_2.0"
  },
  {
    title: "Appoint Me",
    image: project3,
    description:
      "A doctor-patient appointment web service. Website store user details using MongoDB v7 and can support thousands of users. Utilized React, Mongoose, tokenization, CSS3 libraries, etc. AppointM",
    technologies: ["HTML", "CSS", "React", "Bootstrap", "NodeJS", "MongoDB", "Ajax", "Session/cookie"],
    Link:"https://appointme-pied.vercel.app/",
    GithubLink:"https://github.com/Akashsnar/Appointme"
  },
  {
    title: "NewsMonkey",
    image: project4,
    description:
      "News Website to get all types of news across the world (100+ countries). ∗ Project runs on online news APIs to fetch the news and implements functionalities of searching and filtering. ∗ Projects use technologies such as HTML5, CSS3, JAVASCRIPT, REACT.JS, and AXIOMS.",
    technologies: ["HTML", "CSS", "Api", "Bootstrap"],
    Link:"https://newsmonkey-hazel.vercel.app/",
    GithubLink:"https://github.com/Akashsnar/NewsApp"
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
