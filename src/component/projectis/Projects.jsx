import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./project.css";

const projects = [
  {
    id: 1,
    title: "SomaJob AI",
    category: "AI",
    description: "AI-powered job matching platform that connects candidates with opportunities using intelligent recommendations.",
    image: "/img/somajob.png",
    live: "https://soma-job-ai.vercel.app/",
    github: "https://github.com/HamdiNur/SomaJobAi",
    tech: ["JavaScript", "AI Integration"],
    featured: true,
  },
  {
    id: 2,
    title: "Maternal Health AI",
    category: "AI",
    description: "Healthcare application supporting maternal health outcomes through AI-driven insights and guidance.",
    image: "/img/maternal.png",
    live: "https://maternal-health-ai-phi.vercel.app/",
    github: "https://github.com/HamdiNur/maternal-health-ai",
    tech: ["JavaScript", "AI", "Healthcare"],
    featured: true,
  },


  {
    id: 5,
    title: "Product Store",
    category: "Full-Stack",
    description: "E-commerce store with full CRUD, cart management, and authentication built on the PERN stack.",
    image: "/img/product.png",
    live: "https://github.com/HamdiNur/Product-Store",
    github: "https://github.com/HamdiNur/Product-Store",
    tech: ["React", "TailwindCSS", "Node.js", "PostgreSQL"],
  },
  {
    id: 6,
    title: "Expense Tracker",
    category: "Full-Stack",
    description: "Personal finance tracker with expense categorization, budget management, and Clerk authentication.",
    image: "/img/transaction.png",
    live: "https://expense-trucker-nextjs.vercel.app/",
    github: "https://github.com/HamdiNur/Expense-trucker",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Clerk"],
  },
  {
    id: 7,
    title: "Food Delivery App",
    category: "Full-Stack",
    description: "Full-stack food ordering platform with real-time order tracking and admin dashboard.",
    image: "/img/food.png",
    live: "https://maadi-resturent.vercel.app/",
    github: "https://github.com/HamdiNur/Food-Delivery-frontend",
    tech: ["React.js", "Node.js", "MongoDB"],
  },
  {
    id: 8,
    title: "Typing Test",
    category: "Web",
    description: "Real-time typing speed test with live WPM calculation, accuracy tracking, and leaderboard.",
    image: "/img/typing.png",
    live: "https://typing-testwebsite.vercel.app/",
    github: "https://github.com/HamdiNur",
    tech: ["React.js", "Firebase"],
  },
  {
    id: 9,
    title: "Coffee Shop",
    category: "Web",
    description: "Elegant and responsive coffee shop website with interactive menu and modern UI.",
    image: "/img/coffee.png",
    live: "https://coffee-shope-flame.vercel.app/",
    github: "https://github.com/HamdiNur",
    tech: ["React.js", "CSS"],
  },
  {
    id: 10,
    title: "Recipe Website",
    category: "Web",
    description: "Recipe-sharing platform with API integration to discover and share culinary creations.",
    image: "/img/recipe.png",
    live: "https://recipe-websit.vercel.app/",
    github: "https://github.com/HamdiNur",
    tech: ["JavaScript", "HTML", "CSS", "API"],
  },
  {
    id: 11,
    title: "RentApp",
    category: "Mobile",
    description: "Car rental mobile app with real-time availability, booking management and Firebase backend.",
    image: "/img/rentapp.png",
    live: "https://github.com/HamdiNur/Car-Rent-App",
    github: "https://github.com/HamdiNur/Car-Rent-App",
    tech: ["Flutter", "Firebase", "Dart"],
  },
];

const categories = ["All", "AI", "Full-Stack", "Web", "Mobile"];

const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15,3 21,3 21,9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const PrevArrow = ({ onClick }) => (
  <button className="slick-arrow-custom slick-prev-custom" onClick={onClick} aria-label="Previous">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="15,18 9,12 15,6"/>
    </svg>
  </button>
);

const NextArrow = ({ onClick }) => (
  <button className="slick-arrow-custom slick-next-custom" onClick={onClick} aria-label="Next">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="9,18 15,12 9,6"/>
    </svg>
  </button>
);

const Projects = () => {
  const [active, setActive] = useState("All");
  const sliderRef = useRef(null);

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category === active);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 680,
        settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: true, centerPadding: "30px" },
      },
    ],
  };

  const handleFilterChange = (cat) => {
    setActive(cat);
    if (sliderRef.current) sliderRef.current.slickGoTo(0);
  };

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">
        My <span className="two">Projects</span>
      </h2>
      <span className="section__subtitle">25+ projects built across AI, web & mobile</span>

      <div className="projects__filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`projects__filter-btn${active === cat ? " active" : ""}`}
            onClick={() => handleFilterChange(cat)}
          >
            {cat}
            <span className="projects__filter-count">
              {cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length}
            </span>
          </button>
        ))}
      </div>

      <div className="projects__slider-wrapper container">
        <Slider ref={sliderRef} {...sliderSettings}>
          {filtered.map((project) => (
            <div key={project.id} className="project__slide">
              <div className={`project__card${project.featured ? " featured" : ""}`}>
                {project.award && (
                  <div className="project__award">★ Award</div>
                )}
                <div className="project__image-wrapper">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="project__image"
                  />
                  <div className="project__overlay">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project__overlay-btn">
                      <ExternalIcon /> Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project__overlay-btn ghost">
                      <GitHubIcon /> Code
                    </a>
                  </div>
                </div>

                <div className="project__content">
                  <div className="project__header">
                    <span className="project__category">{project.category}</span>
                    <div className="project__links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project__icon-link" title="View Code">
                        <GitHubIcon />
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="project__icon-link" title="Live Demo">
                        <ExternalIcon />
                      </a>
                    </div>
                  </div>
                  <h3 className="project__title">{project.title}</h3>
                  <p className="project__description">{project.description}</p>
                  <div className="project__tech">
                    {project.tech.map((t, i) => (
                      <span key={i} className="project__tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;