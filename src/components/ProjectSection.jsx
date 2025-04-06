import React from "react";
import { FiGlobe } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "Technomania Labs",
      image: "/companylogo/mylogo.jpg",
      date: "2025 march, Ongoing",
      tech: "React, Node.js, MongoDB, AWS",
      description: "As a key developer at Technomania Labs, I built and maintained the company website with interactive features, admin dashboard, and optimized performance. Implemented responsive design principles to ensure seamless user experience across all devices.",
      github: null,
      site: "https://technomania-labs.vercel.app/"
    },
    {
      id: 2,
      title: "Trident Placement Enhancement",
      image: "/companylogo/channels4_profile.jpg",
      date: "2025,ongoing",
      tech: "Python, Pandas, Scikit-learn, Tableau",
      description: "Developed data-driven recommendations to improve campus placement rates by 30%. Analyzed historical placement data, identified key success factors, and suggested targeted curriculum enhancements that were implemented by the college administration.",
      github: null,
      site: null
    },
    {
      id: 3,
      title: "Portfolio Design Journey",
      image: "/companylogo/Myimage.jpg",
      date: "2024",
      tech: "React, Next.js, Tailwind CSS, Framer Motion",
      description: "An evolving showcase of my design and development skills. This portfolio has gone through multiple iterations, each incorporating modern UI/UX principles, smooth animations, and responsive design techniques to create an engaging user experience.",
      github: "https://github.com/yourusername/portfolio",
      site: "https://yourportfolio.com"
    },
    {
      id: 4,
      title: "Data Analytics Projects",
      image: "/companylogo/OIP.jpeg",
      date: "2024 June-Oct",
      tech: "Power BI, Tableau, SQL, Python",
      description: "Created interactive dashboards and reports for clients across various industries. Completed Microsoft Data Analysis certification while developing solutions that helped businesses visualize metrics, identify trends, and make data-driven decisions.",
      github: null,
      site: null
    },
    {
      id: 5,
      title: "Octanet Internship Project",
      image: "/companylogo/octanet.jpeg",
      date: "Summer 2023",
      tech: "MERN Stack (MongoDB, Express, React, Node.js)",
      description: "During my internship at Octanet, I developed a full-featured e-commerce platform including product catalog, user authentication, shopping cart functionality, and payment integration. This project helped me master full-stack development workflows.",
      github: null,
      site: null
    }
  ];

  return (
    <div className="bg-white">
      <section id="projects" className="min-h-screen font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6">
        <div className="space-y-12 py-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="bg-black inline-block text-white px-3 py-1 rounded-md text-sm">
                Projects
              </div>
              <h2 className="text-3xl text-black font-bold tracking-tighter sm:text-5xl">
                I like building things
              </h2>
              <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              These projects span across different stacks. Working on these projects helped me explore various amazing frameworks, understand how they work, and see how they transform ideas into reality. A showcase of my technical capabilities across full-stack development, data analysis, and UI/UX design.
              </p>
            </div>
          </div>

          <ul className="mb-4 ml-4 divide-y divide-dashed border-l text-gray-600">
            {projects.map((project) => (
              <li key={project.id} className="relative ml-10 py-4">
                <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto">
                    <img 
                      className="aspect-square h-full w-full object-contain" 
                      alt={project.title} 
                      src={project.image} 
                    />
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-start gap-1">
                  <time className="text-xs text-gray-500">{project.date}</time>
                  <h2 className="font-semibold leading-none text-lg">{project.title}</h2>
                  <p className="text-xs text-gray-600">{project.tech}</p>
                  <span className="text-sm font-semibold text-gray-600">
                    {project.description}
                  </span>
                </div>
                {(project.github || project.site) && (
                  <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
                    {project.site && (
                      <a href={project.site} target="_blank" rel="noopener noreferrer">
                        <div 
                          className="items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black text-white shadow  flex gap-2" 
                          title="Site"
                        >
                          <FiGlobe className="h-4 w-4" />
                          Site
                        </div>
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <div 
                          className="items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-800 text-white shadow hover:bg-gray-900 flex gap-2" 
                          title="Github"
                        >
                          <FaGithub className="h-4 w-4" />
                          Source
                        </div>
                      </a>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ProjectSection;