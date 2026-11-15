
function Contact() {
  const contactMethods = [
    {
      title: "Email Me",
      subtitle: "Let's discuss opportunities",
      detail: "upal20112002@gmail.com",
      link: "mailto:upal20112002@gmail.com?subject=Hiring%20Opportunity",
      label: "Send an Email",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
          className="w-7 h-7">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      ),
    },
    {
      title: "GitHub",
      subtitle: "Explore my code and projects",
      detail: "github.com/Upal02",
      link: "https://github.com/Upal02",
      label: "Visit GitHub",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor"
          className="w-7 h-7">
          <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.31-3.76-1.31-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.77 1.95 3.1 1.42.1-.72.39-1.2.7-1.48-2.48-.28-5.08-1.24-5.08-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.06 1.15a10.6 10.6 0 0 1 5.57 0c2.12-1.44 3.05-1.15 3.05-1.15.61 1.53.23 2.67.12 2.95.72.78 1.15 1.78 1.15 3 0 4.3-2.6 5.24-5.1 5.52.4.35.75 1.03.75 2.08v3.1c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
      ),
    },
    {
      title: "LinkedIn",
      subtitle: "Let's connect professionally",
      detail: "Upal Vasava",
      link: "https://www.linkedin.com/in/upal-vasava-42b036315/",
      label: "Connect on LinkedIn",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor"
          className="w-7 h-7">
          <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.5H4.96V9h2.97v9.5ZM6.45 7.7a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.05 10.8h-2.97v-4.62c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.77 1.2-1.77 2.43v4.7H9.26V9h2.85v1.3h.04c.4-.75 1.36-1.53 2.8-1.53 3 0 3.55 1.97 3.55 4.53v5.2Z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#080510] text-[#F5F3FF] py-24 sm:py-28 scroll-mt-[76px]"
    >

      {/* =====================================
          BACKGROUND ENERGY
      ===================================== */}

      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">

        <div className="absolute top-0 left-1/2 -translate-x-1/2
          w-[650px] h-[350px] rounded-full
          bg-purple-700/15 blur-[150px]" />

        <div className="absolute bottom-0 left-[-100px]
          w-[400px] h-[400px] rounded-full
          bg-violet-700/10 blur-[140px]" />

        <div className="absolute bottom-0 right-[-100px]
          w-[400px] h-[400px] rounded-full
          bg-fuchsia-700/10 blur-[140px]" />

      </div>


      <div className="max-w-[1200px] mx-auto px-6 sm:px-10">

        {/* =====================================
            SECTION HEADING
        ===================================== */}

        <div className="text-center mb-16">

          <p className="text-xs sm:text-sm font-semibold
            tracking-[5px] text-[#A78BFA] uppercase">
            Let's Connect
          </p>

          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold">
            Get In{" "}
            <span className="text-transparent bg-clip-text
              bg-gradient-to-r from-[#A78BFA] via-[#C084FC] to-[#E879F9]">
              Touch.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base
            leading-7 text-[#A99BBE]">
            Have an opportunity, an exciting project or just want
            to connect? I'd love to hear from you. Let's create
            something meaningful together.
          </p>

          <div className="w-20 h-[2px] mx-auto mt-7
            bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

        </div>


        {/* =====================================
            HIRING INVITATION
        ===================================== */}

        <div className="relative rounded-2xl border border-purple-500/30
          bg-gradient-to-br from-[#1D1031] via-[#180D28] to-[#10091B]
          p-8 sm:p-12 text-center overflow-hidden
          shadow-[0_0_45px_rgba(139,92,246,0.08)]">

          <div className="absolute top-0 left-1/2 -translate-x-1/2
            w-80 h-40 rounded-full bg-purple-500/20 blur-[90px]" />

          <div className="relative">

            <div className="inline-flex items-center gap-2
              px-4 py-2 rounded-full border border-purple-400/30
              bg-purple-500/10 text-[#C4B5FD] text-xs font-medium">

              <span className="w-2 h-2 rounded-full bg-green-400
                shadow-[0_0_10px_rgba(74,222,128,0.8)]" />

              Open to Opportunities

            </div>

            <h3 className="mt-7 text-2xl sm:text-3xl lg:text-4xl
              font-bold leading-tight">

              Looking to Hire a{" "}
              <span className="text-[#A78BFA]">
                Developer?
              </span>

            </h3>

            <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base
              leading-8 text-[#B9ACC9]">

              I'm actively looking forward to new opportunities
              where I can contribute my skills, learn from talented
              people and build impactful digital experiences.

              If you're looking for a dedicated developer to join
              your team, drop me an email. I'd be happy to connect
              and discuss how I can contribute.

            </p>

            <a
              href="mailto:upal20112002@gmail.com?subject=Hiring%20Opportunity&body=Hi%20Upal%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity."
              className="inline-flex items-center justify-center gap-3
                mt-9 px-8 py-4 rounded-xl
                bg-[#8B5CF6] text-white text-sm font-semibold
                shadow-[0_8px_30px_rgba(139,92,246,0.3)]
                transition-all duration-300
                hover:bg-[#7C3AED] hover:-translate-y-1
                hover:shadow-[0_10px_35px_rgba(139,92,246,0.5)]"
            >

              <svg viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2"
                className="w-5 h-5">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>

              Drop Me an Email

              <span className="text-lg">↗</span>

            </a>

          </div>

        </div>


        {/* =====================================
            CONTACT METHODS
        ===================================== */}

        <div className="mt-16">

          <div className="text-center mb-9">

            <p className="text-xs tracking-[4px] uppercase
              text-[#A78BFA] font-semibold">
              Find Me Here
            </p>

            <h3 className="mt-3 text-2xl sm:text-3xl font-bold">
              Let's Stay Connected.
            </h3>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {contactMethods.map((method) => (

              <a
                key={method.title}
                href={method.link}
                target={method.title === "Email Me" ? undefined : "_blank"}
                rel={method.title === "Email Me" ? undefined : "noopener noreferrer"}
                aria-label={method.label}
                className="group relative rounded-2xl
                  border border-purple-500/20
                  bg-[#120B20]/80 backdrop-blur-xl
                  p-7 overflow-hidden
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-purple-400/50
                  hover:shadow-[0_12px_35px_rgba(139,92,246,0.15)]"
              >

                <div className="absolute top-0 right-0
                  w-32 h-32 rounded-full
                  bg-purple-600/10 blur-[65px]
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500" />

                <div className="relative">

                  <div className="w-14 h-14 rounded-xl
                    flex items-center justify-center
                    bg-purple-500/15 border border-purple-400/25
                    text-[#A78BFA]
                    transition-all duration-300
                    group-hover:bg-purple-500/25
                    group-hover:scale-110
                    group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]">

                    {method.icon}

                  </div>

                  <h4 className="mt-6 text-xl font-bold
                    text-white group-hover:text-[#C4B5FD]
                    transition-colors">
                    {method.title}
                  </h4>

                  <p className="mt-2 text-xs text-[#897B9F]">
                    {method.subtitle}
                  </p>

                  <p className="mt-5 text-sm text-[#C4B5D8]
                    break-all">
                    {method.detail}
                  </p>

                  <div className="mt-6 pt-5
                    border-t border-purple-500/15
                    flex items-center justify-between">

                    <span className="text-xs font-semibold
                      text-[#A78BFA]">
                      {method.label}
                    </span>

                    <span className="text-lg text-purple-400
                      transition-transform duration-300
                      group-hover:translate-x-2
                      group-hover:-translate-y-1">
                      ↗
                    </span>

                  </div>

                </div>

              </a>

            ))}

          </div>

        </div>


        {/* =====================================
            EMAIL ADDRESS
        ===================================== */}

        <div className="mt-16 text-center">

          <p className="text-xs tracking-[3px] uppercase
            text-[#897B9F]">
            Prefer a direct email?
          </p>

          <a
            href="mailto:upal20112002@gmail.com"
            className="inline-block mt-3 text-lg sm:text-xl
              font-semibold text-[#C4B5FD]
              transition-colors duration-300
              hover:text-white"
          >
            upal20112002@gmail.com
          </a>

        </div>


        {/* =====================================
            FOOTER
        ===================================== */}

        <div className="mt-20 pt-8 border-t border-purple-500/20
          flex flex-col sm:flex-row items-center
          justify-between gap-4">

          <a
            href="#home"
            className="text-xl font-bold tracking-wide
              text-[#A78BFA] hover:text-white transition-colors"
          >
            Upal.
          </a>

          <p className="text-xs text-[#897B9F] text-center">
            Designed & Built with passion by Upal Vasava.
          </p>

          <p className="text-xs text-[#897B9F]">
            © {new Date().getFullYear()} Upal. All rights reserved.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Contact;
