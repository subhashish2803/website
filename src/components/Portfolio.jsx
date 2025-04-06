import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaBrain, FaLaptopCode, FaLightbulb, FaBook } from "react-icons/fa";
import { FaHandSparkles } from "react-icons/fa";
import Navbar from "./Navbar";
import Education from "./Education";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";
const projects = [
  
  {
    title: "Technomania Labs",
    description: "A web platform providing structured full-stack development resources.",
    image: "/companylogo/mylogo.jpg",
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
      className="flex flex-col md:flex-row items-center justify-center w-full "
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
        <h3 className="text-xl font-bold text-black">{project.title}</h3>
        <p className="text-gray-500 mt-2">{project.description}</p>
        <p className="text-gray-500 text-sm mt-2">Ideation: {project.ideation}</p>
        <p className="text-gray-500 text-sm mt-2">Development: {project.development}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.development.map((tech, index) => (
            <span key={index} className="bg-black text-white px-3 py-1 rounded-md text-sm">
              {tech}
            </span>
          ))}
        </div>
        <p className="text-gray-500 text-sm mt-2">Deployment: {project.deployment}</p>
        <p className="text-gray-500 text-sm mt-2">Duration: {project.duration}</p>
      </motion.div>
    </motion.div>
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
      className="mt-16 w-full max-w-6xl text-center relative z-10"
    >
      <h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl mb-8" end>
        My Certifications
      </h2>
      <div className="flex flex-col gap-6">

        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between "
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
           <div className="grid size-7 grid-cols-1 grid-rows-1 place-content-center border-1 border-gray-700/50 font-mono text-[10px]/7 font-medium text-gray-950 border-gray-700">
                            <div className="col-start-1 row-start-1 grid place-content-center">
                                <div className="h-7 w-5 bg-white"></div>
                            </div>
                            <div className="col-start-1 row-start-1 grid place-content-center tracking-widest text-black">01</div>
                        </div>

          <p className="text-black font-mono text-sm md:text-base">2024 - 2025</p>
          <p className="text-black font-mono text-sm md:text-base">
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
           <div className="grid size-7 grid-cols-1 grid-rows-1 place-content-center border-1 border-gray-700/50 font-mono text-[10px]/7 font-medium text-gray-950 border-gray-700">
                            <div className="col-start-1 row-start-1 grid place-content-center">
                                <div className="h-7 w-5 bg-white"></div>
                            </div>
                            <div className="col-start-1 row-start-1 grid place-content-center tracking-widest text-black">02</div>
                        </div>

          <p className="text-black text-sm font-mono md:text-base">2024 - 2025</p>
          <p className="text-black text-sm font-mono md:text-base">
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
           <div className="grid size-7 grid-cols-1 grid-rows-1 place-content-center border-1 border-gray-700/50 font-mono text-[10px]/7 font-medium text-gray-950 border-gray-700">
                            <div className="col-start-1 row-start-1 grid place-content-center">
                                <div className="h-7 w-5 bg-white"></div>
                            </div>
                            <div className="col-start-1 row-start-1 grid place-content-center tracking-widest text-black">03</div>
                        </div>

          <p className="text-black text-sm font-mono md:text-base">2024</p>
          <p className="text-black text-sm font-mono md:text-base">
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
           <div className="grid size-7 grid-cols-1 grid-rows-1 place-content-center border-1 border-gray-700/50 font-mono text-[10px]/7 font-medium text-gray-950 border-gray-700">
                            <div className="col-start-1 row-start-1 grid place-content-center">
                                <div className="h-7 w-5 bg-white"></div>
                            </div>
                            <div className="col-start-1 row-start-1 grid place-content-center tracking-widest text-black">04</div>
                        </div>
          <p className="text-black text-sm font-mono md:text-base">2023 - 2024</p>
          <p className="text-black text-sm font-mono md:text-base">
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
           <div className="grid size-7 grid-cols-1 grid-rows-1 place-content-center border-1 border-gray-700/50 font-mono text-[10px]/7 font-medium text-gray-950 border-gray-700">
                            <div className="col-start-1 row-start-1 grid place-content-center">
                                <div className="h-7 w-5 bg-white"></div>
                            </div>
                            <div className="col-start-1 row-start-1 grid place-content-center tracking-widest text-black">05</div>
                        </div>

          <p className="text-black text-sm font-mono md:text-base">2023 - 2024</p>
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
           <div className="grid size-7 grid-cols-1 grid-rows-1 place-content-center border-1 border-gray-700/50 font-mono text-[10px]/7 font-medium text-gray-950 border-gray-700">
                            <div className="col-start-1 row-start-1 grid place-content-center">
                                <div className="h-7 w-5 bg-white"></div>
                            </div>
                            <div className="col-start-1 row-start-1 grid place-content-center tracking-widest text-black">06</div>
                        </div>

          <p className="text-black font-mono text-sm md:text-base">2024 - 2025</p>
          <p className="text-black font-mono text-sm md:text-base">
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
    <div className="min-h-screen bg-white text-black font-sans flex flex-col items-center px-6 py-10 relative overflow-hidden">


      {/* Header Section */}
      <section id="hero" className="w-full flex justify-center">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="flex justify-between gap-2">
          {/* Text Content */}
          <div className="flex flex-col flex-1 space-y-1.5">
            <motion.div
              initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-5xl">
                <span className="from-green-400 to-green-400 bg-gradient-to-r text-transparent bg-clip-text">Hi,</span>{" "} I'm Subhashish<span className="lg:text-5xl"> 👋</span> 
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block max-w-[600px] md:text-xl text-black">
                Frontend Developer. I love building things, traveling, and helping people.
              </span>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 100,filter: "blur(5px)" }}
            animate={{ opacity: 1, x: 0,filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            
          >
            <span className="relative flex shrink-0 overflow-hidden rounded-full size-38 border">
              <img
                className="aspect-square h-full w-full contrast-125 brightness-110"
                alt="Smruti Dash"
                src="/companylogo/Myimage.jpg"
              />
            </span>
          </motion.div>
        </div>
      </div>
    </section>
    <section id="about" className="w-full flex justify-center lg:mt-10 mt-5">
      <div className="max-w-2xl mx-auto">
        {/* About Title */}
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold">About</h2>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm text-gray-500 font-sans font-semibold leading-relaxed">
            Currently working as a Frontend Web Developer at{" "}
            <a
              href="https://ceeras.com"
              className="text-black underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ceeras IT Solutions
            </a>
            , where I build and optimize web applications.
          
            Turning coffee into code and making backend magic happen! Before that, I kicked off my tech journey with a <span className="underline text-black">Master's Of Computer Applications</span>, where I discovered my inner techno-nerd.
          
          
            I’m all about exploring new technologies and geeking out over cool frameworks, always curious about solving real-world problems through code and continuously improving my skills.
          </p>
        </motion.div>
      </div>
    </section>
    {/*   Education*/}
    <Education/>
    <WorkExperience/>
    <Skills/>
      {/* Projects Section */}
      <section className="py-10 px-6 w-full">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <div className="inline-block bg-black text-white rounded-lg bg-foreground text-background px-3 py-1 text-sm">
          My Projects
        </div>
        <h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl">
          Check out my latest work
        </h2>
        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
        </p>
      </div>
    </div>
        <div className="max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* Strengths Section */}
      <section className=" text-center relative z-10 w-full max-w-6xl mt-8 mb-8">
        <h2 className="inline-block bg-black text-white rounded-lg bg-foreground text-background px-3 py-1 text-sm">
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
              <h3 className="text-sm font-segoe text-black font-sans">{strength.title}</h3>
              <p className="text-black font-sans text-sm dark:text-gray-700 mt-2">{strength.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      

      {/* Get in Touch Section */}
      <section className="sm:mt-6 text-center relative z-10">
        <h2 className="inline-block bg-black text-white rounded-lg bg-foreground text-background px-3 py-1 text-sm">
          Contact
        </h2>
        <h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl ">
          Get in Touch
        </h2>
        
      </section>
      <section className="text-center py-2">
        <p className="text-lg mb-8">
          Want to connect? Send me a message on{" "}
          <a
            href="https://www.linkedin.com/in/subhashish-nayak-422775310"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 font-semibold hover:underline"
          >
            LinkedIn
          </a>{" "}
          or{" "}
          <a
            href="mailto:your.email@example.com"
            className="text-pink-400 font-semibold hover:underline"
          >
            say hello
          </a>
          . I'll try to get back to you as soon as I can!
        </p>
      </section>
      
      <Navbar />
    </div>
  );
}