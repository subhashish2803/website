import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaBrain, FaLaptopCode, FaLightbulb, FaBook } from "react-icons/fa";

const projects = [
  {
    title: "Trident Smart Attendance Tracker",
    description: "An AI-based facial recognition system for tracking student attendance.",
    image: "/companylogo/slide1.jpg",
    ideation: "Identified attendance issues and inefficiencies in manual tracking.",
    development: ["React.js", "Node.js", "OpenCV", "TensorFlow"],
    deployment: "Hosted on cloud with database integration for real-time tracking.",
    duration: "3 months (Jan 2025 - Mar 2025)",
  },
  {
    title: "Technomania Labs",
    description: "A web platform providing structured full-stack development resources.",
    image: "/logos/mylogo.jpg",
    ideation: "Wanted to create a central hub for learning full-stack development.",
    development: ["MERN Stack", "Tailwind CSS", "Vercel"],
    deployment: "Deployed on Vercel with continuous updates.",
    duration: "Ongoing",
  },
  {
    title: "Data Analytics on Car Sales & Coffee Shop Sales",
    description: "A Power BI & MySQL dashboard for sales insights and trend analysis.",
    image: "/companylogo/OIP.jpeg",
    ideation: "Needed to analyze sales patterns for better business decisions.",
    development: ["Power BI", "MySQL", "Data Visualization"],
    deployment: "Hosted reports on Power BI service with automated data refresh.",
    duration: "2 months (Nov 2024 - Dec 2024)",
  }
];

const strengths = [
  {
    title: "Problem-Solving",
    description: "I enjoy tackling complex problems with logical solutions.",
    icon: <FaBrain className="text-violet-500 text-4xl" />,
  },
  {
    title: "Full-Stack Development",
    description: "Building scalable web apps using MERN stack & modern tools.",
    icon: <FaLaptopCode className="text-violet-500 text-4xl" />,
  },
  {
    title: "Creative Thinking",
    description: "I love designing user-friendly interfaces with a modern touch.",
    icon: <FaLightbulb className="text-violet-500 text-4xl" />,
  },
  {
    title: "Continuous Learning",
    description: "Always exploring new tech trends and improving my skills.",
    icon: <FaBook className="text-violet-500 text-4xl" />,
  },
];

const ProjectCard = ({ project }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ scale: 1, opacity: 1, transition: { duration: 0.8 } });
    } else {
      controls.start({ scale: 0.8, opacity: 0, transition: { duration: 0.8 } });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ scale: 0.8, opacity: 0 }}
      className="flex flex-col md:flex-row items-center justify-center w-full mb-16"
    >
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full md:w-1/3 rounded-lg shadow-lg"
        animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        className="md:w-2/3 md:ml-8 text-center md:text-left"
        animate={{ x: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        <p className="text-gray-300 mt-2">{project.description}</p>
        <p className="text-gray-400 text-sm mt-2">Ideation: {project.ideation}</p>
        <p className="text-gray-400 text-sm mt-2">Development: {project.development}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.development.map((tech, index) => (
            <span key={index} className="bg-gray-700 text-white px-3 py-1 rounded-md text-sm">
              {tech}
            </span>
          ))}
        </div>
        <p className="text-gray-400 text-sm mt-2">Deployment: {project.deployment}</p>
        <p className="text-gray-400 text-sm mt-2">Duration: {project.duration}</p>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    } else {
      controls.start({ opacity: 0, y: 50, transition: { duration: 0.8 } });
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      className="mt-16 w-full max-w-6xl relative z-10"
    >
      <h2 className="text-2xl font-mono font-bold bg-gradient-to-r from-teal-400 to-blue-500 dark:from-orange-500 dark:to-yellow-400 text-transparent bg-clip-text text-end mb-8">
        Experience
      </h2>
      <div className="flex flex-col gap-6">
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between"
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-white font-mono text-xs md:text-base text-center">June 2024 - Sep 2024</p>
          <p className="text-white text-xs md:text-base  font-mono text-right">
            Internship at [@OCTANET pvt.ltd ] - Worked on [Realife Industrial Projects/Fullstack Developer]
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

const Certifications = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    } else {
      controls.start({ opacity: 0, y: 50, transition: { duration: 0.8 } });
    }
  }, [controls, inView]);

  return (
    
    <motion.section
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      className="mt-16 w-full max-w-6xl relative z-10"
    >
      <h2 className="text-2xl font-sans font-bold bg-gradient-to-r from-teal-400 to-blue-500 dark:from-orange-500 dark:to-yellow-400 text-transparent bg-clip-text text- mb-8" end>
        My Certifications
      </h2>
      <div className="flex flex-col gap-6">
        
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between "
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid size-7 grid-cols-1 grid-rows-1 place-content-center border-1 border-gray-700/50 font-mono text-[10px]/7 font-medium text-gray-950 border-white/50">
            <div className="col-start-1 row-start-1 grid place-content-center">
              <div className="h-7 w-5 bg-gray-950"></div>
            </div>
            <div className="col-start-1 row-start-1 grid place-content-center tracking-widest text-white">#01</div>
          </div>

          <p className="text-white font-mono text-sm md:text-base">2024 - 2025</p>
          <p className="text-white font-mono text-sm md:text-base">
            Artifical Intelligence Certificatiion & Digital Credential
          </p><span className="flex flex-wrap gap-2 bg-[#0F62FE] text-white px-3 py-1  font-mono rounded-md text-sm">
            IBM Skills Build
          </span>


        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between "
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid size-7 grid-cols-1 grid-rows-1 place-content-center border-1 border-gray-700/50 font-mono text-[10px]/7 font-medium text-gray-950 border-white/50">
            <div className="col-start-1 row-start-1 grid place-content-center">
              <div className="h-7 w-5 bg-gray-950"></div>
            </div>
            
            <div className="col-start-1 row-start-1 grid place-content-center tracking-widest text-white">#02</div>
          </div>

          <p className="text-white text-sm font-mono md:text-base">2024 - 2025</p>
<p className="text-white text-sm font-mono md:text-base">
  Carrer Essential in Data Analysis By microsoft & linkedin
</p>
<span
  style={{
    background: "linear-gradient(90deg, #F25022, #FFB900, #7FBA00, #00A4EF)",
  }}
  className="flex flex-wrap gap-2 text-black px-3 font-mono py-1 rounded-md text-sm"
>
  Microsoft
  
</span>

        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between "
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid size-7 grid-cols-1 grid-rows-1 place-content-center border-1 border-gray-700/50 font-mono text-[10px]/7 font-medium text-gray-950 border-white/50">
            <div className="col-start-1 row-start-1 grid place-content-center">
              <div className="h-7 w-5 bg-gray-950"></div>
            </div>
            <div className="col-start-1 row-start-1 grid place-content-center tracking-widest text-white">#03</div>
          </div>

          <p className="text-white text-sm font-mono md:text-base">2024</p>
          <p className="text-white text-sm font-mono md:text-base">
            Tata Imagination Challenge
          </p><span className="flex flex-wrap gap-2 bg-[#FDFD96] text-black px-3 font-mono py-1 rounded-md text-sm">
            Tata
          </span>


        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between "
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid size-7 grid-cols-1 grid-rows-1 place-content-center border-1 border-gray-700/50 font-mono text-[10px]/7 font-medium text-gray-950 border-white/50">
            <div className="col-start-1 row-start-1 grid place-content-center">
              <div className="h-7 w-5 bg-gray-950"></div>
            </div>
            <div className="col-start-1 row-start-1 grid place-content-center tracking-widest text-white">#04</div>
          </div>

          <p className="text-white text-sm font-mono md:text-base">2023 - 2024</p>
          <p className="text-white text-sm font-mono md:text-base">
            Amazon Aws Cloud Practicioner
          </p><span className="flex flex-wrap gap-2 bg-[#FF9900] font-mono text-white px-3 py-1 rounded-md text-sm">
            Amazon Aws
          </span>


        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between "
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid size-7 grid-cols-1 grid-rows-1 place-content-center border-1 border-gray-700/50 font-mono text-[10px]/7 font-medium text-gray-950 border-white/50">
            <div className="col-start-1 row-start-1 grid place-content-center">
              <div className="h-7 w-5 bg-gray-950"></div>
            </div>
            <div className="col-start-1 row-start-1 grid place-content-center tracking-widest text-white">#05</div>
          </div>

          <p className="text-gray-300 text-sm font-mono md:text-base">2023 - 2024</p>
          <p className=" text-sm font-mono md:text-base">
            Accenture data analytics job simulation and data visualization
          </p><span className="flex flex-wrap gap-2 font-mono bg-[#A100FF] text-black px-3 py-1 rounded-md text-sm">
          Accenture
          </span>
        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between "
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid size-7 grid-cols-1 grid-rows-1 place-content-center border-1 border-gray-700/50 font-mono text-[10px]/7 font-medium text-gray-950 border-white/50">
            <div className="col-start-1 row-start-1 grid place-content-center">
              <div className="h-7 w-5 bg-gray-950"></div>
            </div>
            <div className="col-start-1 row-start-1 grid place-content-center tracking-widest text-white">#06</div>
          </div>

          <p className="text-gray-300 font-mono text-sm md:text-base">2024 - 2025</p>
          <p className="text-gray-300 font-mono text-sm md:text-base">
            Unstop's Got Latent Certificate of Participation [Shortlisted]
          </p><span className="flex flex-wrap gap-2 bg-[#1C8ADB] text-white px-3 py-1 font-mono rounded-md text-sm">
            Unstop
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center px-6 py-20 relative overflow-hidden">
      {/* Background Gradient Effect */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-green-900 via-black to-black-200 opacity-20 z-0"
        style={{
          backgroundImage: `url('https://wallpaperaccess.com/full/3441988.png')`,
        }}
      />

      {/* Header Section */}
      <section className="text-center mb-16 relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Name and Bio */}
        <motion.div
          className="text-left md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-12 h-12 bg-gradient-to-r from-black to-purple-400 clip-path-triangle flex justify-center items-center rounded-full">
            <span className="text-white font-bold text-lg">SN</span>
          </div>
          <h1 className="text-6xl font-extrabold">
            <span className="from-green-400 to-green-400 bg-gradient-to-r text-transparent bg-clip-text">
              Hi,
            </span>{" "}
            <span>I’m Subhashish Nayak</span>
          </h1>
          <p className="text-xl mt-2 text-white font-segoe">A Full Stack Developer</p>
          <p className="text-md mt-3 text-gray-300 font-segoe">
            I have expertise in React.js, Express.js, MongoDB, Tailwind CSS, Java, and Power BI.
            Currently pursuing MCA at Trident Academy of Technology, I specialize in building modern, scalable web applications.
            My key projects include a Smart Attendance Tracker using facial recognition, Technomania Labs for structured full-stack learning, and a College Placement Portal with enhanced features.
            Passionate about bridging technology and user experience, I focus on crafting intuitive and efficient applications.
          </p>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          className="md:w-1/2 flex justify-end"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/logos/Myimage1.png"
            alt="Subhashish Nayak"
            className="h-80 w-80 object-cover shadow-2xl brightness-110 contrast-125 grayscale hover:grayscale-0 transition duration-300"
          />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6 w-full">
        <h2 className="text-2xl font-plus font-bold text-center bg-gradient-to-r from-teal-400 to-blue-500 mb-10 text-transparent bg-clip-text">
          Projects
        </h2>
        <div className="max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* Strengths Section */}
      <section className="mt-16 text-center relative z-10 w-full max-w-6xl">
        <h2 className="text-2xl font-sans font-bold bg-gradient-to-r from-teal-400 to-blue-500 dark:from-orange-500 dark:to-yellow-400 text-transparent bg-clip-text">
          Strengths
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-radial from-[#D1D5DB] via-[#4B5563] to-transparent p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${index % 2 === 0 ? "animate-moveText1" : "animate-moveText2"
                }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="">{strength.icon}</div>
              <h3 className="text-sm font-segoe text-white font-sans">{strength.title}</h3>
              <p className="text-gray-300 font-sans text-sm dark:text-gray-700 mt-2">{strength.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <Experience />

      {/* Certifications Section */}
      <Certifications />

      {/* Get in Touch Section */}
      <section className="mt-16 text-center relative z-10">
        <h2 className="text-2xl font-sans font-bold bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
          Get in Touch
        </h2>
        <div className="flex justify-center gap-10 mt-6 text-3xl">
          <a href="https://github.com/subhashish2803" target="_blank" rel="noopener noreferrer">
            <FaGithub className="cursor-pointer hover:text-gray-500 transition-all" />
          </a>
          <a href="https://www.linkedin.com/in/subhashish-nayak-422775310" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="cursor-pointer hover:text-blue-500 transition-all" />
          </a>
          <a href="https://www.instagram.com/_.a.s.h.u.0.3._" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="cursor-pointer hover:text-pink-500 transition-all" />
          </a>
          <a href="mailto:nayaksubhashish456@gmail.com">
            <FaEnvelope className="cursor-pointer hover:text-gray-500 transition-all" />
          </a>
        </div>
      </section>
    </div>
  );
}