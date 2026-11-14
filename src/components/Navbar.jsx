
import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "About Me", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact Me", id: "contact" },
  ];

  const linkStyle = (id) =>
    `px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium
    transition-all duration-200 ease-out
    hover:scale-110 hover:-translate-y-1
    ${
      activeSection === id
        ? "bg-[#8B5CF6] text-white shadow-lg shadow-purple-500/20"
        : "text-[#C4B5D8] hover:bg-purple-500/15 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full h-[76px] bg-[#0F0A19] border-b border-purple-500/20">

      <div className="max-w-[1200px] h-full mx-auto px-4 sm:px-6 flex items-center justify-between">

        {/* Profile */}
        <a
          href="#home"
          onClick={() => setActiveSection("home")}
          className="flex flex-col items-center shrink-0 transition-all duration-200 ease-out hover:scale-110 hover:-translate-y-1"
        >
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-base font-bold transition-all duration-200 ${
            activeSection === "home"
              ? "bg-[#A78BFA] shadow-lg shadow-purple-500/30"
              : "bg-[#8B5CF6] hover:bg-[#A78BFA]"
          }`}>
            U
          </div>

          <span className="mt-[3px] text-xs font-semibold text-[#F5F3FF]">
            Upal
          </span>
        </a>

        {/* Navigation links */}
        <ul className="flex items-center gap-2 sm:gap-4 list-none">

          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={linkStyle(link.id)}
                onClick={() => setActiveSection(link.id)}
              >
                {link.name}
              </a>
            </li>
          ))}

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
