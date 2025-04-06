import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      id: 1,
      title: "Trident Academy Of Technolgy",
      degree: "Master Of Computer Applications",
      duration: "2023 - 2025",
      image: "/companylogo/channels4_profile.jpg",
      link: "https://tat.ac.in/",
    },
    {
      id: 2,
      title: " UACST,Cuttack",
      degree: "Secondary Education",
      duration: "2018 - 2020",
      image: "https://akm-img-a-in.tosshub.com/sites/resources/campus/prod/img/campusview/2023/6/pap6cdcb3637a27a849865748303.jpg",
      link: "https://udayanathcollege.ac.in/",
    },
  ];

  return (
    <section id="education" className="w-full ">
      <div className="max-w-2xl mx-auto space-y-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold">Education</h2>
        </motion.div>

        {/* Education Cards */}
        {educationData.map((edu) => (
          <motion.a
            key={edu.id}
            href={edu.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block cursor-pointer"
            initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex rounded-lg  text-black p-4 hover:bg-[#F4F5F7] transition">
              <div className="flex-none">
                <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-gray-900">
                  <img
                    className="aspect-square h-full w-full object-contain"
                    alt={edu.title}
                    src={edu.image}
                  />
                </span>
              </div>
              <div className="flex-grow ml-4 items-center flex-col group">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center font-semibold text-xs sm:text-sm">
                      {edu.title}
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
                        className="lucide lucide-chevron-right size-4 ml-1 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
                      >
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </h3>
                    <div className="text-xs sm:text-sm font-semibold text-black text-right">
                      {edu.duration}
                    </div>
                  </div>
                  <div className="font-sans text-xs font-semibold text-black">{edu.degree}</div>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Education;
