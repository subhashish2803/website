const Skills = () => {
    const skills = [
      "React", "Next.js", "Typescript/Javascript", "Node.js", "Pandas", "Python", "Flask", "Go",
      "Django", "GraphQL", "MySQL", "PostgreSQL", "MongoDB", "AWS (EC2, S3, Lambda, RDS)", "Redis",
      "Java","Mern", "Zustand", "Git"
    ];
  
    return (
      <section id="skills" className="max-w-2xl mx-auto space-y-4">
        <div className="flex flex-col gap-y-3">
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {skills.map((skill, index) => (
              <div key={index} className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black text-white font-semibold shadow hover:bg-primary/80">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  