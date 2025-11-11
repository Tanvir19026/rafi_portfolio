// Hero
import FacebookCircleLineIcon from "remixicon-react/FacebookCircleLineIcon";
import LinkedinBoxLineIcon from "remixicon-react/LinkedinBoxLineIcon";
import GithubLineIcon from "remixicon-react/GithubLineIcon";
import TerminalBoxLineIcon from "remixicon-react/TerminalBoxLineIcon";
import CodepenLineIcon from "remixicon-react/CodepenLineIcon";
/* eslint-disable react/jsx-key */
export const heroIcons = [
  {
    icon: <FacebookCircleLineIcon />,
    link: "https://www.facebook.com/tanvir.rafi.3348",
    color: "hover:bg-blue-600",
  },
  {
    icon: <LinkedinBoxLineIcon />,
    link: "https://www.linkedin.com/in/tanvir-rafi-8a6aa2202/",
    color: "hover:bg-blue-500",
  },
  {
    icon: <GithubLineIcon />,
    link: "https://github.com/Tanvir19026",
    color: "hover:bg-gray-800",
  },
  {
    icon: <TerminalBoxLineIcon />,
    link: "https://codeforces.com/profile/Tanvir19026",
    color: "hover:bg-orange-500",
  },
  {
    icon: <CodepenLineIcon />,
    link: "https://www.hackerrank.com/profile/tanvirrafi1999",
    color: "hover:bg-green-500",
  },
];

// About Me
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import Projector2LineIcon from "remixicon-react/Projector2LineIcon";
import GroupLineIcon from "remixicon-react/GroupLineIcon";
import AwardFillIcon from "remixicon-react/AwardFillIcon";

export const aboutData = [
  {
    title: "Github Repos",
    amount: 63,
    icon: <GithubFillIcon />,
  },
  {
    title: "Successful Projects",
    amount: 10,
    icon: <Projector2LineIcon />,
  },
  {
    title: "Codeforces Problem Solve",
    amount: 176,
    icon: <GroupLineIcon />,
  },
  {
    title: "Hacker Ranck",
    amount: 100,
    icon: <AwardFillIcon />,
  },
];

import DownloadLineIcon from "remixicon-react/DownloadLineIcon";
import ArrowLeftSFillIcon from "remixicon-react/ArrowLeftSFillIcon";

export const downloadIcon = <DownloadLineIcon />;
export const arrowLeftIcon = <ArrowLeftSFillIcon />;

export const aboutText =
  " I am a passionate and motivated Full-Stack Web Developer with a focus on building responsive, secure, and efficient applications. My core technical expertise is centered on the MERN stack (React, Node.js, Express.js, MongoDB) , supplemented by experience in Python (Django), PostgreSQL, and MySQL. My commitment to security is highlighted by my thesis, 'WebGuard'—a platform I developed to simulate and educate on cyberattacks (SQLi, XSS), a research that was subsequently published. I am dedicated to collaborative growth and applying a comprehensive, security-conscious approach to modern web development.";
// End of About Me

// Experience
export const experienceData = [
  {
    year: 2019,
    title: "Starting the Journey",
    education:
      "Started BSc in Computer Science & Engineering at Mawlana Bhashani Science and Technology University in 2019.",
    experience: [
      "Built a strong foundation in programming, data structures, and computer science fundamentals.",
      "Completed SSC from Nabarun Biddya Niketon with GPA 5.00 and HSC from Shahid Smrity Govt College with GPA 4.50.",
    ],
  },
  {
    year: 2022,
    title: "Exploring Web Development",
    education:
      "Began learning web development and programming basics as part of the university curriculum.",
    experience: [
      "Started learning HTML, CSS, JavaScript, and basic front-end concepts.",
      "Worked on small personal projects to practice coding skills.",
    ],
  },
  {
    year: 2023,
    title: "Project Leadership",
    education:
      "Focused on practical projects and hands-on development experience.",
    experience: [
      "Led the Easy Learn Android project (2023) as project lead, overseeing design, development, and team coordination.",
      "Participated in multiple coding competitions within the department to enhance problem-solving skills.",
    ],
  },
  {
    year: 2024,
    title: "Advanced Learning & MERN Stack",
    education:
      "Expanded knowledge in fullstack web development, specializing in the MERN stack since 2022.",
    experience: [
      "Developed MERN stack projects to gain practical experience and build portfolio.",
      "Continued contributing to personal and academic projects to strengthen skills.",
    ],
  },
  {
    year: 2025,
    title: "Research, IELTS & Professional Growth",
    education:
      "Focused on web security research, language proficiency, and continuous skill improvement.",
    experience: [
      "Conducted research on web security in the final year, which was published in a journal.",
      <>
        Visit my journal here:{" "}
        <a
          href="http://www.iapress.org/index.php/soic/article/view/2457"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 underline"
        >
          Journal Link
        </a>
      </>,
      "Completed IELTS exam with overall score 6.0 (S:6.5, W:6.5, R:5.5, L:6.0).",
      "Applied research knowledge to enhance project security and code quality.",
      "Plan to engage in further research, explore innovative web solutions, and build impactful applications.",
    ],
  },
];


// Skills
export const skillsData = [


  {
    name: "HTML",
    icon: "/skills/html.png",
  },
  {
    name: "CSS",
    icon: "/skills/css.png",
  },
  {
    name: "JavaScript",
    icon: "/skills/js.png",
  },
  {
    name: "TailwindCSS",
    icon: "/skills/tailwind.png",
  },
  {
    name: "Web Security",
    icon: "/skills/sec.png",
  },
  {
    name: "ReactJS",
    icon: "/skills/react.png",
  },
  {
    name: "SQL",
    icon: "/skills/sql.png",
  },
  {
    name: "AI",
    icon: "/skills/ai.png",
  },
  {
    name: "Framer Motion",
    icon: "/skills/framer.png",
  },
  {
    name:"Django",
    icon:"/skills/django.png"

  },
  {
    name: "NextJS",
    icon: "/skills/nextjs.png",
  },
  {
    name: "NodeJS",
    icon: "/skills/nodejs.png",
  },
  {
    name: "MongoDB",
    icon: "/skills/mongodb.png",
  },
  {
    name: "Github",
    icon: "/skills/github.png",
  },
   {
    name: "Bootsrap",
    icon: "/skills/bt.png",
  },
   {
    name: "Machine Learning",
    icon: "/skills/ml.png",
  },
     {
    name: "API",
    icon: "/skills/api.png",
  },
  {
    name: "Gsap",
    icon: "/skills/gsap.png",
  },
];

// Reviews
import StarFillIcon from "remixicon-react/StarFillIcon";
import StarHalfLineIcon from "remixicon-react/StarHalfLineIcon";
import ArrowLeftSLineIcon from "remixicon-react/ArrowLeftSLineIcon";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";

/* eslint-disable react/jsx-key */
export const starIcons = [<StarFillIcon />, <StarHalfLineIcon />];
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />];

export const reviewsData = [
  {
    image: "/reviews/client-4.png",
    name: "Mark T., Freelance Graphic Designer",
    comment:
      "Your work on our website has been phenomenal. The design is visually stunning and incredibly user-friendly. We've received countless compliments from our customers, and our sales have noticeably increased. Thank you for capturing our brand's essence so perfectly!",
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    image: "/reviews/client-2.png",
    name: "Sarah B., E-commerce Store Owner",
    comment:
      "Working with you, has been an absolute pleasure. The portfolio website you created for me is sleek, modern, and beautifully showcases my work. Your attention to detail and creative flair are truly impressive. I couldn't be happier with the final result!",
    stars: [1, 1, 1, 1, 1],
  },
  {
    image: "/reviews/client-3.png",
    name: "Emily R., CEO of Tech Startup",
    comment:
      "The redesign of our corporate website exceeded all expectations. Your innovative ideas and professional execution have given us a site that is not only visually appealing but also highly functional. We've seen a significant improvement in user engagement thanks to your expertise.",
    stars: [1, 1, 1, 1, 1],
  },
  {
    image: "/reviews/client-1.png",
    name: "Bob W., Lifestyle Blogger",
    comment:
      "I absolutely love the blog design you created for me, [Web Designer's Name]. It's exactly what I envisioned—stylish, unique, and easy to navigate. Your responsiveness and creative input were invaluable. My readers are raving about the new look, and I couldn't be more thrilled!",
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    image: "/reviews/client-5.png",
    name: "David H., Director of Non-Profit Organization",
    comment:
      "your work on our non-profit’s website has been transformative. The design is clean, engaging, and effectively conveys our mission. We've seen an increase in online donations and volunteer sign-ups, all thanks to your fantastic design. Your dedication and talent are greatly appreciated!",
    stars: [1, 1, 1, 1, 1],
  },
];

// Projects
export const projectsData = [
  {
    name: "CareerWave",
    desc: "A career guidance platform to help students and professionals explore career paths, manage resumes, and access job opportunities.",
    url: "/projects/career.jpg",
    tech: ["ReactJS", "TailwindCSS", "MongoDB","Express"],
    liveLink: "https://resonant-kleicha-c82a67.netlify.app/", // ✅ added https://
    githubLink: "https://github.com/Tanvir19026/CarrerWave",
  },
  {
    name: "WebGuard",
    desc: "A web security-focused project aimed at identifying vulnerabilities and providing secure web solutions.",
    url: "/projects/webguard.jpg",
    tech: ["ReactJS", "NodeJS", "TailwindCSS", "MongoDB"],
    liveLink: "https://webguards.netlify.app/", // ✅ added https://
    githubLink: "https://github.com/Tanvir19026/webguard_new",
  },
  {
    name: "Expresso Coffee",
    desc: "A coffee shop management system and online ordering platform for a seamless customer experience.",
    url: "/projects/coffee.jpg",
    tech: ["ReactJS","TailwindCSS","NodeJS","MongoDB"],
    liveLink: "https://expressocoffee-ad7c6.web.app/", // ✅ added https://
    githubLink: "https://github.com/Tanvir19026/ExpressoCoffee",
  },
  {
    name: "Dragon News",
    desc: "A news portal platform offering categorized news articles with responsive design and modern UI.",
    url: "/projects/drag.jpg",
    tech: [ "ReactJS", "TailwindCSS","JavaScript"],
    liveLink: "https://imaginative-kashata-3d2a4a.netlify.app/", // ✅ added https://
    githubLink: "https://github.com/Tanvir19026/dragon_news",
  },
  {
    name: "Easy Learn",
    desc: "An Android-based learning platform project for students to access educational content and improve skills.",
    url: "/projects/easylearn.png",
    tech: ["Android", "Java", "Firebase"],
    liveLink: "#", // still no live demo, you can add later
    githubLink: "https://github.com/Tanvir19026/easy_learn",
  },
];



export const projectsButton = [
  "All"
];

// Pricing Plans
export const pricingPlans = [
  {
    title: "Basic",
    pricing: "$500 - $1,000",
    features: [
      "Up to 5 pages",
      "Responsive design ",
      "Basic SEO ",
      "Contact form",
      "Social media links",
      "1 month support",
    ],
    recommended: "Small businesses, personal websites, bloggers",
  },
  {
    title: "Premium",
    pricing: "$5,000 - $10,000",
    features: [
      "Unlimited pages",
      "Responsive design",
      "Comprehensive SEO",
      "Contact form ",
      "Social media links",
      "Advanced security",
      "E-commerce (unlimited products)",
      "Blog setup",
      "Google Analytics with custom reports",
      "6 months support",
    ],
    recommended: "Medium-sized businesses, online stores, service providers",
  },
  {
    title: "Standard",
    pricing: "$1,500 - $3,000",
    features: [
      "Up to 10 pages",
      "Responsive design",
      "Advanced SEO",
      "CContact form",
      "Social media links",
      "E-commerce (20 products)",
      "Blog setup",
      "Google Analytics",
      "3 months support",
    ],
    recommended:
      "Large businesses, complex e-commerce sites, custom web applications",
  },
];

import CheckLineIcon from "remixicon-react/CheckLineIcon";

export const checkIcon = <CheckLineIcon />;

// Q & A
export const questions = [
  {
    question: "How much do you charge for a website?",
    answer:
      "Our website packages usually range from £2997 – £4997. However it really depends on what kind of website you need. We recently wrote a full guide on how much it costs for a website to give you an idea of the different options available.",
  },
  {
    question: "Why are you so expensive?",
    answer:
      "he process we use to build your website takes a certain amount of time and a lot of planning and research. Unlike other agencies, we DON’T use templates. We build your website from scratch, which means you get a unique design tailored around your business. Buying a website from us should not just simply be seen as a business expense as your website is a sales tool that should earn you money",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "It takes approximately 6-10 weeks to build a website from start to finish, providing we have all the information from you. Our full web design process is broken down here. Generally speaking, the website will only take a long time if we are still waiting for text and images from yourself.",
  },
  {
    question: "How do we communicate throughout the website build?",
    answer:
      "Before we begin working together, we’ll usually have an initially chat on the phone or via Skype to discuss the project. Once we get started, most of the communication will take place over email. This makes the process a lot easier as we’ll have all of the information saved and can come back to it later. Once we’ve finished the project, we will book in your 1hr digital marketing training session.",
  },
  {
    question: "What will you need from me?",
    answer:
      "It really depends on what type of website you want. We’ll be able to discuss this on our discovery call before we start working together. Depending on which package we agree on we could need…",
  },
  {
    question: "What if I don’t like the website?",
    answer:
      "You’re in luck. We offer a risk-free guarantee. Before we build your new website, we’ll design a mockup of your homepage. We’ll design a layout in Photoshop first, that way you’ll get to see our initial designs within approximately ten days. This is your opportunity to give us feedback and if you really don’t like it, you don’t have to move forward. Best part is, this won’t cost you anything.",
  },
  {
    question: "Do you offer a payment schedule?",
    answer:
      "Yes, we split the payment into two. The first 50% is usually taken once you have seen the mockup of your homepage and you’re happy to move forward. The following 50% is taken 30 days after this.",
  },
  {
    question: "Can I make the final payment when the site is ready to go live?",
    answer:
      "No. In the past we have found that projects can take a lot longer than expected to complete. We might be waiting for information from you and this can delay the process. Sometimes these delays can take months. This is why we always invoice 30 days after the original payment. At this point we’ll be well on our way with your new website and you’ll be able to see the progress.",
  },
  {
    question: "Who hosts the website?",
    answer:
      "If we build your website, we will generally manage the hosting for you so you don’t need to do anything. We use the same hosting company for our own website and for ALL our clients. Each website is managed individually to avoid any security issues. Every website we build has unlimited bandwidth, 20GB of disk space, 2GB Ram and 99.9% uptime. We’ve used the same company for 5 years and we don’t plan on changing this anytime soon.",
  },
  {
    question: "Can I update the website myself once it’s been built?",
    answer:
      "Yes. We like to offer the ability for our clients to update the website themselves. We we’ll give you all the training and tools to be able to make website amendments. We use a easy to use platform called WordPress so you can add edit and delete content without paying us to do it for you.",
  },
  {
    question:
      "What if I don’t want to manage the website at all. Can you do it all for me?",
    answer:
      "Yes, we can arrange a maintenance package to suit your needs. This can range from 1hr per month to 10 hours per month and we can discuss a package that’s right for you.",
  },
];

import ArrowDropDownLineIcon from "remixicon-react/ArrowDropDownLineIcon";
export const questionArrow = <ArrowDropDownLineIcon />;

// Navbar
import CopyrightLineIcon from "remixicon-react/CopyrightLineIcon";

export const copyRightIcon = <CopyrightLineIcon />;

import Home5LineIcon from "remixicon-react/Home5LineIcon";
import UserLineIcon from "remixicon-react/UserLineIcon";
import HistoryLineIcon from "remixicon-react/HistoryLineIcon";
import BriefcaseLineIcon from "remixicon-react/BriefcaseLineIcon";
import UserStarLineIcon from "remixicon-react/UserStarLineIcon";
import ProjectorLineIcon from "remixicon-react/ProjectorLineIcon";
import PriceTag3LineIcon from "remixicon-react/PriceTag3LineIcon";
import ContactsBook2LineIcon from "remixicon-react/ContactsBook2LineIcon";
import QuestionAnswerLineIcon from "remixicon-react/QuestionAnswerLineIcon";

export const navbarData = [
  {
    id: "home",
    name: "Home",
    icon: <Home5LineIcon />,
  },
  {
    id: "about",
    name: "About",
    icon: <UserLineIcon />,
  },
  {
    id: "experience",
    name: "MyRoad",
    icon: <HistoryLineIcon />,
  },
  {
    id: "skills",
    name: "Skills",
    icon: <BriefcaseLineIcon />,
  },

  {
    id: "projects",
    name: "Projects",
    icon: <ProjectorLineIcon />,
  },

  {
    id: "contact",
    name: "Contact",
    icon: <ContactsBook2LineIcon />,
  },

];

// Toggle
import MoonFoggyFillIcon from "remixicon-react/MoonFoggyFillIcon";
import SunFoggyFillIcon from "remixicon-react/SunFoggyFillIcon";

export const sunIcon = <SunFoggyFillIcon />;
export const moonIcon = <MoonFoggyFillIcon />;
