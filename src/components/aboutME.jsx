
function About() {
  const skillGroups = [
    {
      title: "Frontend Development",
      subtitle: "Building interactive experiences",
      skills: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "Redux"],
      symbol: "01",
    },
    {
      title: "Backend Development",
      subtitle: "Building scalable applications",
      skills: ["Node.js", "Express.js", "PostgreSQL", "REST APIs", "JWT", "Joi"],
      symbol: "02",
    },
    {
      title: "Tools & Technologies",
      subtitle: "Development and deployment",
      skills: ["Git", "GitHub", "AWS", "Jenkins", "Python", "C"],
      symbol: "03",
    },
  ];

  const experience = [
    "Developed responsive user interfaces using React.js and Tailwind CSS.",
    "Implemented Redux for state management and API integration.",
    "Designed backend APIs using Node.js and Express.js with modular architecture.",
    "Implemented JWT authentication and Joi request validation.",
  ];

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#080510] text-[#F5F3FF] py-24 sm:py-28 scroll-mt-[76px]"
    >

      {/* ===================================== */}
      {/* BACKGROUND ATMOSPHERE                 */}
      {/* ===================================== */}

      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-purple-700/10 blur-[150px]" />

        <div className="absolute top-[35%] -left-40 w-[350px] h-[350px] rounded-full bg-violet-700/10 blur-[130px]" />

        <div className="absolute bottom-0 right-0 w-[450px] h-[400px] rounded-full bg-purple-900/20 blur-[150px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 sm:px-10">

        {/* ===================================== */}
        {/* SECTION HEADING                       */}
        {/* ===================================== */}

        <div className="text-center mb-16">

          <p className="text-xs sm:text-sm font-semibold tracking-[5px] text-[#A78BFA] uppercase">
            Discover My Journey
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold">
            Beyond The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#C084FC] to-[#E879F9]">
              Code.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-7 text-[#A99BBE]">
            A little about who I am, what I build, and the technologies
            I use to turn ideas into meaningful digital experiences.
          </p>

          <div className="w-20 h-[2px] mx-auto mt-7 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

        </div>


        {/* ===================================== */}
        {/* ABOUT INTRODUCTION                    */}
        {/* ===================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 items-stretch">

          {/* INTRODUCTION CARD */}

          <div className="relative group rounded-2xl border border-purple-500/20 bg-[#120B20]/80 backdrop-blur-xl p-7 sm:p-10 overflow-hidden transition-all duration-500 hover:border-purple-400/40 hover:shadow-[0_0_35px_rgba(139,92,246,0.12)]">

            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/10 blur-[80px] rounded-full" />

            <div className="relative">

              <div className="flex items-center gap-3 mb-7">

                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-purple-500/15 border border-purple-400/30 text-[#C4B5FD] text-lg">
                  ✦
                </div>

                <p className="text-xs tracking-[3px] text-[#A78BFA] font-semibold uppercase">
                  Who Am I?
                </p>

              </div>

              <h3 className="text-2xl sm:text-3xl font-bold leading-snug">
                I'm Upal Vasava,
                <br />
                <span className="text-[#A78BFA]">
                  Full-Stack Developer
                </span>
              </h3>

              <div className="mt-6 space-y-4 text-sm sm:text-base leading-8 text-[#B9ACC9]">

                <p>
                  I'm a developer passionate about building modern,
                  responsive and scalable web applications. I enjoy
                  bringing ideas to life through clean interfaces,
                  thoughtful design and efficient code.
                </p>

                <p>
                  My experience spans both frontend and backend
                  development. From crafting interactive interfaces
                  with React.js and Tailwind CSS to building REST APIs
                  with Node.js and Express.js, I enjoy working across
                  the entire development process.
                </p>

                <p>
                  Having worked as a PERN Stack Developer Intern at
                  Floatr Wealth, I've gained practical experience
                  working with application architecture, state
                  management, authentication and backend validation.
                </p>

              </div>

              {/* LOCATION */}

              <div className="mt-8 pt-6 border-t border-purple-500/20 flex flex-wrap items-center gap-x-8 gap-y-4">

                <div className="flex items-center gap-3">

                  <span className="text-[#A78BFA] text-lg">⌖</span>

                  <div>
                    <p className="text-[10px] text-[#897B9F] tracking-widest uppercase">
                      Based In
                    </p>
                    <p className="text-sm text-[#E9D5FF] font-medium mt-1">
                      Bengaluru, India
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <span className="text-[#A78BFA] text-lg">⌘</span>

                  <div>
                    <p className="text-[10px] text-[#897B9F] tracking-widest uppercase">
                      Focus
                    </p>
                    <p className="text-sm text-[#E9D5FF] font-medium mt-1">
                      Full-Stack Development
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* PROFESSIONAL HIGHLIGHTS */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">

            {/* EXPERIENCE */}

            <div className="relative rounded-2xl border border-purple-500/20 bg-gradient-to-br from-[#1B1030] to-[#10091B] p-7 overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50">

              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/15 blur-[60px] rounded-full" />

              <div className="relative">

                <p className="text-xs tracking-[3px] text-[#A78BFA] uppercase font-semibold">
                  Professional Experience
                </p>

                <h3 className="mt-5 text-4xl font-bold text-white">
                  03
                  <span className="text-xl text-[#A78BFA]"> Months</span>
                </h3>

                <p className="mt-3 text-sm text-[#B9ACC9]">
                  PERN Stack Developer Intern
                </p>

                <p className="mt-2 text-xs text-[#897B9F]">
                  Floatr Wealth · Feb – Apr 2026
                </p>

              </div>

            </div>


            {/* EDUCATION */}

            <div className="relative rounded-2xl border border-purple-500/20 bg-gradient-to-br from-[#1B1030] to-[#10091B] p-7 overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50">

              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/15 blur-[60px] rounded-full" />

              <div className="relative">

                <p className="text-xs tracking-[3px] text-[#A78BFA] uppercase font-semibold">
                  Education
                </p>

                <h3 className="mt-5 text-2xl font-bold text-white">
                  B.Tech
                </h3>

                <p className="mt-2 text-sm text-[#C4B5D8]">
                  Computer Science
                </p>

                <p className="mt-3 text-xs text-[#897B9F]">
                  Dayananda Sagar University
                </p>

                <p className="mt-2 text-xs text-[#897B9F]">
                  2022 – 2026
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* ===================================== */}
        {/* EXPERIENCE TIMELINE                   */}
        {/* ===================================== */}

        <div className="mt-28">

          <div className="flex items-center gap-4 mb-10">

            <div className="w-10 h-[2px] bg-purple-500" />

            <p className="text-xs tracking-[4px] text-[#A78BFA] uppercase font-semibold">
              My Experience
            </p>

          </div>

          <div className="relative border-l border-purple-500/30 ml-3 pl-7 sm:pl-10">

            {/* TIMELINE DOT */}

            <div className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.9)]" />

            <div className="rounded-2xl border border-purple-500/20 bg-[#120B20]/80 backdrop-blur-xl p-7 sm:p-9 transition-all duration-300 hover:border-purple-400/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.10)]">

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">

                <div>

                  <p className="text-xs tracking-[3px] text-[#A78BFA] uppercase font-semibold">
                    February 2026 – April 2026
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-white">
                    PERN Stack Developer Intern
                  </h3>

                  <p className="mt-2 text-[#C4B5D8] font-medium">
                    Floatr Wealth
                  </p>

                  <p className="mt-1 text-xs text-[#897B9F]">
                    Bengaluru, India
                  </p>

                </div>

                <span className="w-fit px-4 py-2 rounded-full text-xs font-semibold text-[#C4B5FD] border border-purple-400/30 bg-purple-500/10">
                  Internship
                </span>

              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">

                {experience.map((item, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-3 text-sm leading-7 text-[#B9ACC9]"
                  >

                    <span className="mt-1 text-[#A78BFA]">✦</span>

                    <p>{item}</p>

                  </div>

                ))}

              </div>

              <div className="mt-8 pt-6 border-t border-purple-500/20">

                <p className="text-[10px] tracking-[3px] uppercase text-[#897B9F] mb-4">
                  Technologies Used
                </p>

                <div className="flex flex-wrap gap-2">

                  {["PostgreSQL", "Express.js", "React.js", "Node.js", "Redux", "Tailwind CSS", "JWT", "Joi"].map((tech) => (

                    <span
                      key={tech}
                      className="px-3 py-2 rounded-lg text-xs text-[#D8B4FE] bg-purple-500/10 border border-purple-400/20 hover:bg-purple-500/20 hover:border-purple-400/50 transition-all duration-300"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ===================================== */}
        {/* TECHNICAL ARSENAL                     */}
        {/* ===================================== */}

        <div className="mt-28">

          <div className="text-center mb-12">

            <p className="text-xs tracking-[4px] text-[#A78BFA] uppercase font-semibold">
              What I Work With
            </p>

            <h3 className="mt-4 text-3xl sm:text-4xl font-bold">
              My Technical{" "}
              <span className="text-[#A78BFA]">
                Arsenal.
              </span>
            </h3>

            <p className="mt-4 text-sm text-[#A99BBE] max-w-xl mx-auto leading-7">
              The technologies and tools I use to design,
              develop and build reliable web applications.
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {skillGroups.map((group) => (

              <div
                key={group.symbol}
                className="relative group rounded-2xl border border-purple-500/20 bg-[#120B20]/80 p-7 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/50 hover:shadow-[0_10px_40px_rgba(139,92,246,0.12)]"
              >

                <div className="absolute -top-12 -right-12 w-36 h-36 bg-purple-600/15 rounded-full blur-[55px] group-hover:bg-purple-500/25 transition-all duration-500" />

                <div className="relative">

                  <div className="flex justify-between items-center">

                    <span className="text-3xl font-bold text-purple-400/30">
                      {group.symbol}
                    </span>

                    <span className="w-9 h-9 flex items-center justify-center rounded-lg border border-purple-400/30 text-[#A78BFA] bg-purple-500/10">
                      ✦
                    </span>

                  </div>

                  <h4 className="mt-7 text-xl font-bold text-[#F5F3FF]">
                    {group.title}
                  </h4>

                  <p className="mt-2 text-xs text-[#897B9F]">
                    {group.subtitle}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">

                    {group.skills.map((skill) => (

                      <span
                        key={skill}
                        className="px-3 py-2 rounded-lg text-xs text-[#D8B4FE] bg-[#211333] border border-purple-500/20 transition-all duration-300 hover:bg-purple-600/20 hover:border-purple-400/50 hover:text-white"
                      >
                        {skill}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* ===================================== */}
        {/* CLOSING STATEMENT                     */}
        {/* ===================================== */}

        <div className="relative mt-24 rounded-2xl border border-purple-500/30 bg-gradient-to-r from-[#190C2B] via-[#25103D] to-[#13091F] p-8 sm:p-12 text-center overflow-hidden">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-32 bg-purple-500/20 blur-[70px] rounded-full" />

          <div className="relative">

            <p className="text-xs tracking-[4px] text-[#A78BFA] uppercase font-semibold">
              Always Building. Always Learning.
            </p>

            <h3 className="mt-5 text-2xl sm:text-3xl font-bold">
              Turning Ideas Into{" "}
              <span className="text-[#A78BFA]">
                Reality.
              </span>
            </h3>

            <p className="mt-4 text-sm text-[#B9ACC9] max-w-xl mx-auto leading-7">
              I believe great software comes from curiosity,
              continuous improvement and the willingness to
              solve challenging problems.
            </p>

            <a
              href="#contact"
              className="inline-flex mt-8 px-7 py-3 rounded-lg bg-[#8B5CF6] text-white text-sm font-semibold shadow-lg shadow-purple-500/25 transition-all duration-300 hover:bg-[#7C3AED] hover:-translate-y-1 hover:shadow-purple-500/40"
            >
              Let's Connect ↗
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
