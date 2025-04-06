import React from "react";

const FloatingNavbar = () => {
  return (
    <div className="w-max p-2 rounded-full border z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
      {navItems.map((item, index) => (
        <div key={index} className="flex aspect-square cursor-pointer items-center justify-center rounded-full" style={{ width: "40px" }}>
          <a
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
            href={item.href}
          >
            {item.icon}
          </a>
        </div>
      ))}
    </div>
  );
};

const navItems = [
  {
    href: "/",
    icon: (
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
        className="lucide lucide-home size-4"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
  },
  {
    href: "/projects",
    icon: (
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
        className="lucide lucide-code size-4"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    href: "/music",
    icon: (
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
        className="lucide lucide-music size-4"
      >
        <path d="M9 18V5l12-2v13"></path>
        <circle cx="6" cy="18" r="3"></circle>
        <circle cx="18" cy="16" r="3"></circle>
      </svg>
    ),
  },
  {
    href: "/blog",
    icon: (
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
        className="lucide lucide-notebook size-4"
      >
        <path d="M2 6h4"></path>
        <path d="M2 10h4"></path>
        <path d="M2 14h4"></path>
        <path d="M2 18h4"></path>
        <rect width="16" height="20" x="4" y="2" rx="2"></rect>
        <path d="M16 2v20"></path>
      </svg>
    ),
  },
  {
    href: "https://github.com/smrutid12",
    icon: (
      <svg
        viewBox="0 0 438.549 438.549"
        className="size-4"
        fill="currentColor"
      >
        <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227..."></path>
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/smrutid12/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-4"
      >
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.105-.895-2-2-2s-2 .895-2 2v5.5h-3v-10h3v1.732c.834-1.225 2.367-2.232 4-2.232 2.481 0 4.5 2.019 4.5 4.5v6z" />
      </svg>
    ),
  },
];


{/* Background Gradient Effect */ }
<div
  className="absolute inset-0 bg-gradient-to-br from-green-900 via-black to-black-200 opacity-20 z-0"
  style={{
    backgroundImage: `url('https://wallpaperaccess.com/full/3441988.png')`,
  }}
/>
{/* Right Side: Image */ }
<motion.div
  className="md:w-1/2 flex justify-end"
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>
  <img
    src="/companylogo/Myimage1.png"
    alt="Subhashish Nayak"
    className="h-80 w-80 object-cover shadow-2xl brightness-110 contrast-125 grayscale hover:grayscale-0 transition duration-300"
  />
</motion.div>















//
{/* Header Section */ }
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
    <p className="text-xl mt-2 text-black font-semibold font-segoe">A Full Stack Developer. I love building things, traveling and helping people.</p>
    <h3 className="font-bold font-plus text-2xl text-black font-sans">About</h3>
    <p className="text-md mt-1 text-gray-600 font-segoe">
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
      src="/companylogo/Myimage1.png"
      alt="Subhashish Nayak"
      className="h-80 w-80 object-cover shadow-2xl brightness-110 contrast-125 grayscale hover:grayscale-0 transition duration-300"
    />
  </motion.div>
</section>


export default FloatingNavbar;






