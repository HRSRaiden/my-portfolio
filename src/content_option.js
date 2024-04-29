import hrs from "./assets/images/hrs.jpg";
const logotext = "RAIDEN";
const meta = {
    title: "Harsh Sharma",
    description: "I’m Harsh Sharma Software engineer _ Full stack devloper,currently working in Noida, India",
};

const introdata = {
    title: "I’m Harsh Sharma",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop mobile apps",
        fourth: "I make high-end software"
    },
    description: "Result-driven graduate with 1+ years of work exp. in quality software development in C/C++ and Python. Interested in space sciences and physics.",
    // your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I graduated from NSUT, New Delhi in 2023 in Electrical Engineering with 8.4/10 GPA. I did a minor in Machine Learning and DataWarehouse management. My work interests include quality software development and learning different tech stacks along with building them. I aspire to create robust and high-end software to be a role model for following applications/services. My research interests include space, astronomy, ancient civilizations and their technologies, time theories, light, sound (basically everything related to physics) etc. In my free time, I like to do gaming, create visual arts, sing and learn martial arts.",
};
const worktimeline = [{
        jobtitle: "Software Development Engineering Intern",
        where: "Cadence Design Systems",
        date: "Aug 2023 - Present",
    },
    {
        jobtitle: "Research & Development Intern",
        where: "Ansys Software Pvt. Ltd.",
        date: "Jan 2023 - Jul 2023",
    },
    {
        jobtitle: "Full-Stack Web Development Intern",
        where: "GoGlocal, Mumbai",
        date: "Apr 2022 - Jul 2022",
    },
];

const skills = [{
        name: "Python",
        value: 100,
    },
    {
        name: "C/C++",
        value: 100,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 100,
    },
    {
        name: "Angular",
        value: 85,
    },
    {
        name: "SQL",
        value: 90,
    },
    {
        name: "R",
        value: 70,
    },
];

const services = [{
        title: "Game Development",
        description: "I make lightweight games using Unity (C#) and Unreal Engine (C++). Currently I am exploring 3D game development using unreal engine and some blenders. I also make game mods in my free time.",
    },
    {
        title: "Mobile Apps and Web Apps",
        description: "I make fast, optimized and modern design web and mobile applications. I am proficient with using React.js, Angular2, React Native, Ionic Framework, Kotlin and Dart (at front-end). I have experience in using MongoDB, Django, PostGreSQL, MySQL etc. with REST, Postman at backend. I am also getting experience with Swift so in near future I can also develop apps for iOS.",
    },
    {
        title: "UI & UX Design",
        description: "I am experienced with using Adobe XD as well as Figma for prototyping. I make modern design, creative prototypes with high end user experience. I also make logos and art forms like posters, banners and wallpapers. I am good in using Adobe creative suite, Sketchbook Pro etc.",
    },
];

const dataportfolio = [{
        img: "https://picsum.photos/400/800/?grayscale",
        description: "Go to My Resume",
        link: "https://drive.google.com/file/d/1jHsWxD1NYqT12vgSy8qApphnQBBLq2W0/view?usp=sharing",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "HackNSUT Website (2022). Created a responsive website in react to register participants for 24-hour hackathon organized by IEEE NSUT.",
        link: "https://hacknsut.ieeensut.com/",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "Controlled inverted pendulum in simulation with PID Controller in MATLAB as base to implement machine learning models to improve the performance, accuracy, and usability.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "Used Bolt Wi-Fi Module with LM35 temperature sensors with cloud connectivity to control temperature of cooling chamber with feedback machine learning model achieving an accuracy of 98.8%.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "Using multiple case studies proposed and created a blockchain model to detect fraud and assure warranty management for products bought by using their serial numbers.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "DELCON22, Made IEEE Delhi Section website for International Conference on Electrical, Electronics and Computer Engineering.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "Sentiment Analysis using Transformer based NLP: Emotion detection on basis of analysed data and trained the model to detect basic human emotions.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "IEEE NSUT, Android App: Made an informative android app that notifies students about upcoming events of IEEE NSUT.",
        link: "https://play.google.com/store/apps/details?id=com.dev.ieee_nsut&hl=en_ZA&gl=US",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "Remote Tempus Session (Project): Created a feature to enable connection of tempus sessions remotely and enable complete decentralization and shared working space for large loaded designs.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "hrsraiden@gmail.com",
    YOUR_FONE: "+91 8285583070",
    description: "Feel free to contact me through whatsapp on the same cell or send an email. I will get back to you as soon as possible!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/HRSRaiden",
    facebook: "https://instagram.com/hrsraiden",
    linkedin: "https://linkedin.com/in/hrsraiden",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};