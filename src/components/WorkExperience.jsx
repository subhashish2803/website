import { useState } from "react";

const experiences = [
  {
    company: "Ceeras It Solution",
    logo: "/companylogo/ceeras.jpeg",
    url: "https://www.ceeras.in/",
    position: "Junior Software Developer",
    duration: "feb 2024 - Current",
    description:
      "Implemented a multi-tenant web dashboard for the MeSH eSIM platform using Flask and PostgreSQL. Developed a scheduler with Celery and RabbitMQ for asynchronous task management. Dockerized deployments and set up CI/CD pipelines with GitLab. Enhanced error detection by 20% using Kibana and optimized system performance with caching."
  },
  
];

export default function WorkExperience() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="work" className="w-full">
      <div className="max-w-2xl mx-auto space-y-4">
        <h2 className="text-xl font-bold">Work Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="block cursor-pointer">
            <div className="rounded-lg bg-card text-card-foreground flex p-4 hover:bg-[#F4F5F7] relative group">
              <div className="flex-none">
                <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="aspect-square h-full w-full object-contain"
                  />
                </span>
              </div>
              <div className="flex-grow ml-4 flex flex-col">
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="font-semibold leading-none text-xs sm:text-sm">
                    {exp.company}
                  </h3>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`lucide lucide-chevron-right size-4 transform transition-transform duration-300 ease-in-out ${openIndex === index ? "rotate-90" : ""}`}
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </button>
                </div>
                <div className="font-sans text-xs font-semibold ">{exp.position}</div>
                <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right font-semibold">
                  {exp.duration}
                </div>
              </div>
              
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-40 opacity-100 py-3" : "max-h-0 opacity-0"}`}
            >
              <div className="text-xs sm:text-sm bg-gray-100 p-3 rounded-md">
                {exp.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
