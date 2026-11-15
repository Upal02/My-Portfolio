
function Projects() {
  const featuredProjects = [
    {
      number: "01",
      title: "Note-Taker",
      subtitle: "Notes Management Platform",
      category: "FULL-STACK DEVELOPMENT",
      description:
        "A full-stack notes management application featuring secure authentication, role-based access control and complete CRUD functionality. Includes dedicated User, Analyst and Admin roles with protected dashboards and analytics.",
      technologies: [
        "React.js",
        "Redux Toolkit",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Sequelize",
        "JWT",
        "Tailwind CSS",
      ],
      github: "https://github.com/Upal02/Note-Taker",
      visualTitle: "Organize. Manage. Secure.",
      visualSubtitle: "Your notes, intelligently managed.",
      visual: "notes",
    },
    {
      number: "02",
      title: "TestyGrid",
      subtitle: "Interactive Recipe Platform",
      category: "FRONTEND DEVELOPMENT",
      description:
        "An interactive recipe discovery platform featuring 30+ recipes, dynamic search functionality, detailed recipe pages, food imagery and YouTube video integration. Designed to make discovering recipes simple and engaging.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
      github: "https://github.com/Upal02/TestyGrid",
      visualTitle: "Discover. Explore. Cook.",
      visualSubtitle: "A delicious digital experience.",
      visual: "recipes",
    },
  ];

  const otherProjects = [
    {
      number: "03",
      title: "API Security Monitoring System",
      subtitle: "Machine Learning & Cybersecurity",
      category: "AI / MACHINE LEARNING",
      description:
        "A real-time API security monitoring platform using CNN and BiLSTM neural networks to detect threats and identify suspicious traffic patterns. Includes security analytics, logs, alerts and threat monitoring.",
      technologies: [
        "Next.js",
        "React",
        "Python",
        "FastAPI",
        "CNN",
        "BiLSTM",
        "PostgreSQL",
      ],
      github: "https://github.com/Upal02/API-security",
      visual: "security",
    },
    {
      number: "04",
      title: "My Portfolio",
      subtitle: "Personal Developer Portfolio",
      category: "WEB DEVELOPMENT",
      description:
        "My personal developer portfolio, designed to showcase my technical skills, professional experience and projects through a modern interface, immersive purple energy effects and responsive layouts.",
      technologies: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "Vite",
      ],
      github: "https://github.com/Upal02/My-Portfolio",
      visual: "portfolio",
    },
  ];

  const ProjectVisual = ({ project, featured }) => (
    <div className="relative h-[190px] sm:h-[220px] overflow-hidden rounded-xl border border-purple-400/15 bg-[#0B0714]">

      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/80 via-[#160B27] to-[#080510]" />

      <div className="absolute top-[-80px] right-[-40px] w-64 h-64 rounded-full bg-purple-600/20 blur-[80px]" />

      <div className="absolute bottom-[-100px] left-[-30px] w-64 h-64 rounded-full bg-fuchsia-600/15 blur-[90px]" />

      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-purple-400/15" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-purple-400/10" />

      {/* Project artwork */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">

        <span className="text-[10px] tracking-[5px] text-purple-300/80 uppercase font-semibold">
          {project.category}
        </span>

        <h3 className={`mt-4 font-bold text-white ${
          featured
            ? "text-2xl sm:text-3xl"
            : "text-xl sm:text-2xl"
        }`}>
          {project.visualTitle || project.title}
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-purple-200/70">
          {project.visualSubtitle || project.subtitle}
        </p>

        <div className="mt-5 flex items-center gap-2">
          <span className="w-8 h-[1px] bg-purple-400/60" />
          <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_12px_#A855F7]" />
          <span className="w-8 h-[1px] bg-purple-400/60" />
        </div>

      </div>

      {/* Project number */}
      <span className="absolute top-4 left-5 text-xs tracking-[3px] text-purple-300/60">
        PROJECT / {project.number}
      </span>

      <span className="absolute bottom-4 right-5 text-[10px] tracking-[3px] text-purple-300/40 uppercase">
        Shadow Monarch
      </span>

    </div>
  );

  const FeaturedCard = ({ project }) => (
    <article className="group relative rounded-2xl border border-purple-500/20 bg-[#120B20]/80 backdrop-blur-xl p-4 sm:p-6 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/50 hover:shadow-[0_15px_45px_rgba(139,92,246,0.15)]">

      <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-purple-600/10 blur-[90px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">

        <ProjectVisual project={project} featured />

        <div className="mt-7">

          <div className="flex items-center justify-between gap-3">

            <span className="text-[10px] tracking-[3px] text-[#A78BFA] font-semibold uppercase">
              Featured Project
            </span>

            <span className="text-xs text-purple-300/50">
              {project.number} / 04
            </span>

          </div>

          <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-white group-hover:text-[#C4B5FD] transition-colors duration-300">
            {project.title}
          </h3>

          <p className="mt-2 text-sm font-medium text-purple-300">
            {project.subtitle}
          </p>

          <p className="mt-4 text-sm text-[#A99BBE] leading-7">
            {project.description}
          </p>

          {/* Technology stack */}
          <div className="mt-6">

            <p className="text-[10px] tracking-[3px] text-[#897B9F] uppercase mb-3">
              Technologies Used
            </p>

            <div className="flex flex-wrap gap-2">

              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-[11px] font-medium text-[#D8B4FE] bg-purple-500/10 border border-purple-400/20 transition-all duration-300 hover:bg-purple-500/20 hover:border-purple-400/50"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

          {/* GitHub link */}
          <div className="mt-7 pt-5 border-t border-purple-500/15">

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-purple-600 text-white text-sm font-semibold shadow-lg shadow-purple-900/30 transition-all duration-300 hover:bg-purple-500 hover:-translate-y-1 hover:shadow-purple-500/30"
            >

              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.31-3.76-1.31-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.77 1.95 3.1 1.42.1-.72.39-1.2.7-1.48-2.48-.28-5.08-1.24-5.08-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.06 1.15a10.6 10.6 0 0 1 5.57 0c2.12-1.44 3.05-1.15 3.05-1.15.61 1.53.23 2.67.12 2.95.72.78 1.15 1.78 1.15 3 0 4.3-2.6 5.24-5.1 5.52.4.35.75 1.03.75 2.08v3.1c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
              </svg>

              View Repository

              <span className="text-lg">↗</span>

            </a>

          </div>

        </div>

      </div>

    </article>
  );

  const SmallCard = ({ project }) => (
    <article className="group relative rounded-2xl border border-purple-500/20 bg-[#120B20]/80 backdrop-blur-xl p-4 sm:p-6 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/50 hover:shadow-[0_15px_40px_rgba(139,92,246,0.12)]">

      <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-purple-600/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">

        <ProjectVisual project={project} featured={false} />

        <div className="mt-6">

          <div className="flex justify-between items-center gap-3">

            <span className="text-[10px] tracking-[3px] text-[#A78BFA] font-semibold uppercase">
              {project.category}
            </span>

            <span className="text-xs text-purple-300/50">
              {project.number}
            </span>

          </div>

          <h3 className="mt-3 text-xl sm:text-2xl font-bold text-white group-hover:text-[#C4B5FD] transition-colors">
            {project.title}
          </h3>

          <p className="mt-2 text-sm text-purple-300 font-medium">
            {project.subtitle}
          </p>

          <p className="mt-4 text-sm text-[#A99BBE] leading-7">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">

            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-[11px] text-[#D8B4FE] bg-purple-500/10 border border-purple-400/20 transition-all duration-300 hover:bg-purple-500/20"
              >
                {tech}
              </span>
            ))}

          </div>

          <div className="mt-6 pt-5 border-t border-purple-500/15">

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="inline-flex items-center gap-3 text-sm font-semibold text-[#C4B5FD] transition-all duration-300 hover:text-white hover:gap-5"
            >

              <span>Explore on GitHub</span>
              <span className="text-lg">↗</span>

            </a>

          </div>

        </div>

      </div>

    </article>
  );

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-[#080510] text-[#F5F3FF] py-24 sm:py-28 scroll-mt-[76px]"
    >

      {/* =====================================
          BACKGROUND ENERGY
      ===================================== */}

      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">

        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-purple-700/10 blur-[150px]" />

        <div className="absolute top-[40%] -left-40 w-[400px] h-[400px] rounded-full bg-violet-700/10 blur-[140px]" />

        <div className="absolute bottom-[5%] right-[-100px] w-[450px] h-[450px] rounded-full bg-fuchsia-700/10 blur-[150px]" />

      </div>


      <div className="max-w-[1200px] mx-auto px-6 sm:px-10">

        {/* =====================================
            SECTION HEADING
        ===================================== */}

        <div className="text-center mb-16">

          <p className="text-xs sm:text-sm font-semibold tracking-[5px] text-[#A78BFA] uppercase">
            Things I've Built
          </p>

          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#C084FC] to-[#E879F9]">
              Projects.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-7 text-[#A99BBE]">
            A collection of projects where ideas meet creativity,
            problem-solving and code. Each project represents
            something I've learned, built and improved along the way.
          </p>

          <div className="w-20 h-[2px] mx-auto mt-7 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

        </div>


        {/* =====================================
            FEATURED PROJECTS
        ===================================== */}

        <div className="flex items-center gap-4 mb-8">

          <div className="w-10 h-[2px] bg-purple-500" />

          <p className="text-xs tracking-[4px] text-[#A78BFA] uppercase font-semibold">
            Featured Projects
          </p>

          <span className="text-xs text-[#897B9F]">
            / 01 – 02
          </span>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">

          {featuredProjects.map((project) => (
            <FeaturedCard
              key={project.number}
              project={project}
            />
          ))}

        </div>


        {/* =====================================
            MORE PROJECTS
        ===================================== */}

        <div className="flex items-center gap-4 mt-24 mb-8">

          <div className="w-10 h-[2px] bg-purple-500" />

          <p className="text-xs tracking-[4px] text-[#A78BFA] uppercase font-semibold">
            More Projects
          </p>

          <span className="text-xs text-[#897B9F]">
            / 03 – 04
          </span>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">

          {otherProjects.map((project) => (
            <SmallCard
              key={project.number}
              project={project}
            />
          ))}

        </div>


        {/* =====================================
            GITHUB FOOTER
        ===================================== */}

        <div className="relative mt-24 rounded-2xl border border-purple-500/25 bg-gradient-to-r from-[#160B26] via-[#24103B] to-[#10091B] p-8 sm:p-12 text-center overflow-hidden">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 rounded-full bg-purple-500/20 blur-[80px]" />

          <div className="relative">

            <p className="text-xs tracking-[4px] text-[#A78BFA] uppercase font-semibold">
              More Than What's Shown
            </p>

            <h3 className="mt-5 text-2xl sm:text-3xl font-bold">
              Explore My{" "}
              <span className="text-[#A78BFA]">
                GitHub.
              </span>
            </h3>

            <p className="mt-4 max-w-xl mx-auto text-sm leading-7 text-[#B9ACC9]">
              These projects are just part of my development journey.
              Visit my GitHub to explore repositories, source code
              and future experiments.
            </p>

            <a
              href="https://github.com/Upal02"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-8 px-7 py-3 rounded-lg bg-[#8B5CF6] text-white text-sm font-semibold shadow-lg shadow-purple-500/25 transition-all duration-300 hover:bg-[#7C3AED] hover:-translate-y-1 hover:shadow-purple-500/40"
            >

              Explore My GitHub ↗

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;
