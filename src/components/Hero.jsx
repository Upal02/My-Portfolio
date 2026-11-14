
import profileImage from "../assets/Image/me.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100svh-36px)] bg-[#080510] text-[#F5F3FF] overflow-hidden scroll-mt-[76px]"
    >

      {/* ====================================== */}
      {/* BACKGROUND ATMOSPHERE                  */}
      {/* ====================================== */}

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_75%_48%,rgba(109,40,217,0.30)_0%,rgba(76,29,149,0.13)_35%,transparent_68%)]" />

      <div className="absolute top-[-180px] right-[3%] w-[700px] h-[600px] rounded-full bg-purple-700/20 blur-[150px] pointer-events-none" />

      <div className="absolute top-[20%] right-[8%] w-[470px] h-[470px] rounded-full bg-violet-600/25 blur-[130px] pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-[850px] h-[280px] bg-[radial-gradient(ellipse,rgba(126,34,206,0.35),transparent_70%)] blur-[35px] pointer-events-none" />


      {/* ====================================== */}
      {/* MAIN CONTENT                           */}
      {/* ====================================== */}

      <div className="relative z-10 max-w-[1200px] min-h-[calc(100svh-36px)] mx-auto px-6 sm:px-10 py-5 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] items-center gap-8">

        {/* LEFT SIDE */}

        <div className="flex flex-col items-start py-12 md:py-0 order-1">

          <p className="text-xs sm:text-sm font-semibold tracking-[4px] text-[#A78BFA] mb-5">
            WELCOME TO MY WORLD
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Hello,
            <br />
            I'm <span className="text-[#A78BFA]">Upal.</span>
          </h1>

          <h2 className="mt-5 text-xl sm:text-2xl lg:text-3xl font-semibold text-[#C4B5D8]">
            Frontend Developer
          </h2>

          <p className="mt-5 max-w-[470px] text-sm sm:text-base leading-7 text-[#A99BBE]">
            I build modern, responsive and visually engaging
            web experiences. Passionate about turning ideas
            into reality through design and code.
          </p>

          {/* BUTTONS */}

          <div className="flex flex-wrap gap-4 mt-9">

            <a
              href="#projects"
              className="px-6 py-3 bg-[#8B5CF6] text-white text-sm font-semibold rounded-md shadow-lg shadow-purple-500/30 transition-all duration-300 hover:bg-[#7C3AED] hover:scale-105 hover:-translate-y-1"
            >
              Explore Projects ↗
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-[#8B5CF6] text-[#DDD6FE] text-sm font-semibold rounded-md transition-all duration-300 hover:bg-[#8B5CF6]/15 hover:scale-105 hover:-translate-y-1"
            >
              Contact Me
            </a>

          </div>

          {/* BOTTOM LABEL */}

          <div className="mt-12 flex items-center gap-3">

            <div className="w-10 h-[1px] bg-[#8B5CF6]" />

            <p className="text-xs tracking-[3px] text-[#8B7CA8] uppercase">
              Creativity Meets Code
            </p>

          </div>

        </div>


        {/* ====================================== */}
        {/* RIGHT SIDE - PORTRAIT                  */}
        {/* ====================================== */}

        <div className="relative order-2 flex items-end justify-center w-full h-[480px] sm:h-[580px] md:h-[min(78vh,680px)]">

          {/* ====================================== */}
          {/* ENERGY BACKGROUND                      */}
          {/* ====================================== */}

          <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 w-[340px] h-[420px] sm:w-[470px] sm:h-[510px] rounded-full bg-purple-600/35 blur-[100px] animate-pulse pointer-events-none" />

          <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[250px] h-[280px] rounded-full bg-violet-400/25 blur-[85px] animate-pulse pointer-events-none" />

          <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 w-[290px] h-[370px] rounded-full bg-fuchsia-600/20 blur-[100px] pointer-events-none" />


          {/* ====================================== */}
          {/* MAGICAL BACKGROUND SEAL                */}
          {/* ====================================== */}

          <svg
            viewBox="0 0 500 680"
            className="absolute inset-0 w-full h-full z-[2] pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >

            <defs>

              <radialGradient id="sealGlow">
                <stop offset="0%" stopColor="#C084FC" stopOpacity="0.35" />
                <stop offset="60%" stopColor="#7E22CE" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#4C1D95" stopOpacity="0" />
              </radialGradient>

              <filter id="sealLight">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

            </defs>

            {/* Central energy field */}

            <ellipse
              cx="250"
              cy="340"
              rx="205"
              ry="245"
              fill="url(#sealGlow)"
            />

            {/* Outer circle */}

            <circle
              cx="250"
              cy="340"
              r="220"
              fill="none"
              stroke="#A855F7"
              strokeWidth="1.5"
              opacity="0.35"
            />

            {/* Rotating broken energy ring */}

            <circle
              cx="250"
              cy="340"
              r="190"
              fill="none"
              stroke="#C084FC"
              strokeWidth="2"
              strokeDasharray="95 22 35 28 60 25"
              filter="url(#sealLight)"
              opacity="0.65"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 250 340"
                to="360 250 340"
                dur="45s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Inner ring */}

            <circle
              cx="250"
              cy="340"
              r="155"
              fill="none"
              stroke="#A78BFA"
              strokeWidth="1.5"
              strokeDasharray="3 12"
              opacity="0.45"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="360 250 340"
                to="0 250 340"
                dur="35s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Energy nodes */}

            <g fill="#E9D5FF" filter="url(#sealLight)">

              <circle cx="250" cy="120" r="4" />
              <circle cx="470" cy="340" r="4" />
              <circle cx="250" cy="560" r="4" />
              <circle cx="30" cy="340" r="4" />

              <circle cx="95" cy="185" r="3" />
              <circle cx="405" cy="185" r="3" />
              <circle cx="95" cy="495" r="3" />
              <circle cx="405" cy="495" r="3" />

            </g>

            {/* Decorative energy triangles */}

            <g
              fill="none"
              stroke="#C084FC"
              strokeWidth="1.5"
              opacity="0.5"
              filter="url(#sealLight)"
            >

              <path d="M250 100 L267 135 L250 125 L233 135 Z" />
              <path d="M250 580 L267 545 L250 555 L233 545 Z" />

              <path d="M15 340 L50 323 L40 340 L50 357 Z" />
              <path d="M485 340 L450 323 L460 340 L450 357 Z" />

              <path d="M90 185 L115 190 L105 200 Z" />
              <path d="M410 185 L385 190 L395 200 Z" />

            </g>

            {/* Moving energy particles */}

            <g fill="#F5D0FE" filter="url(#sealLight)">

              <circle cx="140" cy="220" r="2">
                <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" />
              </circle>

              <circle cx="360" cy="250" r="3">
                <animate attributeName="opacity" values="0.2;1;0.2" dur="2.7s" repeatCount="indefinite" />
              </circle>

              <circle cx="110" cy="410" r="2.5">
                <animate attributeName="opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite" />
              </circle>

              <circle cx="390" cy="420" r="2">
                <animate attributeName="opacity" values="0.2;1;0.2" dur="2.5s" repeatCount="indefinite" />
              </circle>

            </g>

          </svg>


          {/* ====================================== */}
          {/* SHADOW MONARCH AURA                    */}
          {/* ====================================== */}

          <svg
            viewBox="0 0 500 680"
            preserveAspectRatio="xMidYMax meet"
            className="absolute inset-0 w-full h-full z-[4] overflow-visible pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >

            <defs>

              <linearGradient id="monarchFlame" x1="0" y1="1" x2="0.2" y2="0">
                <stop offset="0%" stopColor="#3B0764" />
                <stop offset="35%" stopColor="#7E22CE" />
                <stop offset="70%" stopColor="#C084FC" />
                <stop offset="100%" stopColor="#F5D0FE" />
              </linearGradient>

              <linearGradient id="monarchCore" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#581C87" />
                <stop offset="45%" stopColor="#A855F7" />
                <stop offset="80%" stopColor="#E9D5FF" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>

              <filter id="monarchGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="9" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="monarchStrongGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="18" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

            </defs>


            {/* Left shadow flame */}

            <g
              fill="none"
              stroke="url(#monarchFlame)"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#monarchGlow)"
            >

              <path
                d="M225 590 C180 530 210 485 155 435 C110 395 100 345 125 300 C95 325 80 370 105 405 C45 350 60 280 105 240 C65 260 40 305 55 335 C30 265 85 205 125 180"
                strokeWidth="9"
                opacity="0.9"
              >
                <animate
                  attributeName="d"
                  values="M225 590 C180 530 210 485 155 435 C110 395 100 345 125 300 C95 325 80 370 105 405 C45 350 60 280 105 240 C65 260 40 305 55 335 C30 265 85 205 125 180;M225 590 C190 535 195 480 145 440 C95 400 90 350 115 290 C80 325 75 375 95 410 C35 355 50 275 100 235 C55 255 35 300 50 330 C25 255 90 195 135 175;M225 590 C180 530 210 485 155 435 C110 395 100 345 125 300 C95 325 80 370 105 405 C45 350 60 280 105 240 C65 260 40 305 55 335 C30 265 85 205 125 180"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </path>

              <path
                d="M190 480 C145 430 125 385 85 360 C45 330 55 280 85 250 C40 280 35 330 65 365"
                strokeWidth="5"
                opacity="0.85"
              >
                <animate attributeName="opacity" values="0.3;1;0.4" dur="3s" repeatCount="indefinite" />
              </path>

              <path
                d="M165 370 C115 325 125 270 155 220 C180 180 155 145 135 120"
                strokeWidth="6"
              />

              <path
                d="M125 300 C80 270 90 215 65 185 C110 205 120 230 130 255"
                strokeWidth="4"
              />

            </g>


            {/* Right shadow flame */}

            <g
              fill="none"
              stroke="url(#monarchFlame)"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#monarchGlow)"
            >

              <path
                d="M275 590 C320 530 290 485 345 435 C390 395 400 345 375 300 C405 325 420 370 395 405 C455 350 440 280 395 240 C435 260 460 305 445 335 C470 265 415 205 375 180"
                strokeWidth="9"
                opacity="0.9"
              >
                <animate
                  attributeName="d"
                  values="M275 590 C320 530 290 485 345 435 C390 395 400 345 375 300 C405 325 420 370 395 405 C455 350 440 280 395 240 C435 260 460 305 445 335 C470 265 415 205 375 180;M275 590 C310 535 305 480 355 440 C405 400 410 350 385 290 C420 325 425 375 405 410 C465 355 450 275 400 235 C445 255 465 300 450 330 C475 255 410 195 365 175;M275 590 C320 530 290 485 345 435 C390 395 400 345 375 300 C405 325 420 370 395 405 C455 350 440 280 395 240 C435 260 460 305 445 335 C470 265 415 205 375 180"
                  dur="4.5s"
                  repeatCount="indefinite"
                />
              </path>

              <path
                d="M310 480 C355 430 375 385 415 360 C455 330 445 280 415 250 C460 280 465 330 435 365"
                strokeWidth="5"
                opacity="0.85"
              >
                <animate attributeName="opacity" values="0.3;1;0.4" dur="3.4s" repeatCount="indefinite" />
              </path>

              <path
                d="M335 370 C385 325 375 270 345 220 C320 180 345 145 365 120"
                strokeWidth="6"
              />

              <path
                d="M375 300 C420 270 410 215 435 185 C390 205 380 230 370 255"
                strokeWidth="4"
              />

            </g>


            {/* Bright energy burst */}

            <g filter="url(#monarchStrongGlow)">

              <path
                d="M250 180 C220 145 225 105 250 65 C250 105 285 120 275 145 C310 115 305 80 300 50 C345 105 340 145 310 180 C290 165 270 160 250 180Z"
                fill="url(#monarchCore)"
                opacity="0.5"
              >
                <animate attributeName="opacity" values="0.2;0.7;0.3;0.7;0.2" dur="3s" repeatCount="indefinite" />
              </path>

            </g>


            {/* Floating particles */}

            <g filter="url(#monarchGlow)" fill="#E9D5FF">

              <circle cx="95" cy="280" r="4">
                <animate attributeName="cy" values="280;215;280" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.1;1;0.1" dur="3s" repeatCount="indefinite" />
              </circle>

              <circle cx="405" cy="300" r="5">
                <animate attributeName="cy" values="300;225;300" dur="3.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.1;1;0.1" dur="3.5s" repeatCount="indefinite" />
              </circle>

              <circle cx="135" cy="175" r="3">
                <animate attributeName="cy" values="175;115;175" dur="2.8s" repeatCount="indefinite" />
              </circle>

              <circle cx="365" cy="185" r="4">
                <animate attributeName="cy" values="185;120;185" dur="3.2s" repeatCount="indefinite" />
              </circle>

            </g>

          </svg>


          {/* ====================================== */}
          {/* PLATFORM ENERGY GLOW                   */}
          {/* ====================================== */}

          <div className="absolute bottom-[-4%] left-1/2 -translate-x-1/2 w-[110%] h-[130px] rounded-full bg-purple-600/35 blur-[55px] z-[3]" />

          <div className="absolute bottom-[-2%] left-1/2 -translate-x-1/2 w-[75%] h-[35px] rounded-full bg-fuchsia-400/35 blur-[25px] z-[3]" />


          {/* ====================================== */}
          {/* PLATFORM - LOWER BASE                  */}
          {/* ====================================== */}

          <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-[94%] max-w-[480px] h-[72px] rounded-[50%] bg-gradient-to-b from-[#6417A8] via-[#270B48] to-[#10051E] border border-fuchsia-500/70 shadow-[0_8px_20px_rgba(0,0,0,0.8),0_0_20px_rgba(168,85,247,0.8),0_0_55px_rgba(147,51,234,0.45)] z-[5]" />

          <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-[94%] max-w-[480px] h-[72px] rounded-[50%] border-b-[5px] border-fuchsia-500 shadow-[0_5px_18px_rgba(217,70,239,0.9)] z-[6]" />


          {/* ====================================== */}
          {/* PLATFORM - UPPER DISC                  */}
          {/* ====================================== */}

          <div className="absolute bottom-[0%] left-1/2 -translate-x-1/2 w-[77%] max-w-[390px] h-[53px] rounded-[50%] bg-gradient-to-b from-[#8B35C9] via-[#451078] to-[#20083A] border-2 border-violet-300/90 shadow-[0_0_15px_rgba(168,85,247,0.9),0_0_35px_rgba(147,51,234,0.65),inset_0_0_20px_rgba(216,180,254,0.35)] z-[7]" />

          <div className="absolute bottom-[1%] left-1/2 -translate-x-1/2 w-[68%] max-w-[340px] h-[38px] rounded-[50%] bg-[radial-gradient(ellipse,rgba(192,132,252,0.55),rgba(88,28,135,0.55),transparent_75%)] z-[8]" />

          <div className="absolute bottom-[0%] left-1/2 -translate-x-1/2 w-[77%] max-w-[390px] h-[53px] rounded-[50%] border-b-[3px] border-fuchsia-300 shadow-[0_5px_20px_rgba(217,70,239,0.85)] z-[9]" />


          {/* ====================================== */}
          {/* ELECTRICAL CURRENT AROUND PLATFORM     */}
          {/* ====================================== */}

          <svg
            viewBox="0 0 500 140"
            preserveAspectRatio="none"
            className="absolute bottom-[-1%] left-1/2 -translate-x-1/2 w-[100%] max-w-[490px] h-[125px] z-[15] overflow-visible pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >

            <defs>

              <filter id="electricGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <linearGradient id="electricColor">
                <stop offset="0%" stopColor="#7E22CE" />
                <stop offset="50%" stopColor="#F0ABFC" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>

            </defs>


            {/* Main electrical arcs */}

            <g
              fill="none"
              stroke="url(#electricColor)"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#electricGlow)"
            >

              <path d="M55 75 L80 66 L95 48 L115 62 L130 45 L150 58">
                <animate
                  attributeName="opacity"
                  values="0;1;0;0.8;0"
                  dur="2.1s"
                  repeatCount="indefinite"
                />
              </path>

              <path d="M445 75 L420 66 L405 48 L385 62 L370 45 L350 58">
                <animate
                  attributeName="opacity"
                  values="0;0.8;0;1;0"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </path>

              <path d="M125 105 L145 93 L160 104 L175 85 L195 97">
                <animate
                  attributeName="opacity"
                  values="0.2;1;0.1;0.2"
                  dur="1.8s"
                  repeatCount="indefinite"
                />
              </path>

              <path d="M375 105 L355 93 L340 104 L325 85 L305 97">
                <animate
                  attributeName="opacity"
                  values="0.1;1;0.1"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>

            </g>


            {/* Lightning flashes */}

            <g
              fill="none"
              stroke="#F5D0FE"
              strokeWidth="2"
              strokeLinecap="round"
              filter="url(#electricGlow)"
            >

              <path d="M90 35 L103 22 L99 39 L115 29">
                <animate
                  attributeName="opacity"
                  values="0;1;0;0"
                  dur="2.8s"
                  repeatCount="indefinite"
                />
              </path>

              <path d="M410 35 L397 22 L401 39 L385 29">
                <animate
                  attributeName="opacity"
                  values="0;0;1;0"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </path>

              <path d="M225 115 L238 102 L235 118 L250 108">
                <animate
                  attributeName="opacity"
                  values="0;1;0"
                  dur="2.3s"
                  repeatCount="indefinite"
                />
              </path>

              <path d="M275 115 L262 102 L265 118 L250 108">
                <animate
                  attributeName="opacity"
                  values="0;0;1;0"
                  dur="2.6s"
                  repeatCount="indefinite"
                />
              </path>

            </g>


            {/* Electrical sparks */}

            <g fill="#FFFFFF" filter="url(#electricGlow)">

              <circle cx="80" cy="65" r="3">
                <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" />
              </circle>

              <circle cx="420" cy="65" r="3">
                <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" />
              </circle>

              <circle cx="145" cy="90" r="2.5">
                <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
              </circle>

              <circle cx="355" cy="90" r="2.5">
                <animate attributeName="opacity" values="0;1;0" dur="1.7s" repeatCount="indefinite" />
              </circle>

            </g>

          </svg>


          {/* ====================================== */}
          {/* PORTRAIT                               */}
          {/* ====================================== */}

          <img
            src={profileImage}
            alt="Upal - Software Developer"
            className="relative z-20 h-full w-full object-contain object-bottom -translate-y-[8px] drop-shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-transform duration-500 hover:scale-[1.02]"
          />


          {/* ====================================== */}
          {/* IDENTITY CARD                          */}
          {/* ====================================== */}

          <div className="absolute bottom-[25%] right-0 sm:right-2 z-30 px-5 py-3 bg-[#140B21]/90 backdrop-blur-md border border-purple-400/50 rounded-lg shadow-[0_0_25px_rgba(139,92,246,0.25)]">

            <p className="text-sm text-[#A78BFA] font-bold tracking-wide">
              Upal
            </p>

            <p className="text-xs text-[#C4B5D8] mt-1">
              Software Developer
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
