import "./project.css"

const Projects = () => {
   const projects = [
    {
      id: 1,
      title: "Expense Tracker",
      description:
        "Next.js app with PostgreSQL, Prisma, and Clerk authentication. Track your expenses, categorize transactions, and manage your budget efficiently.",
      image: "/img/transaction.png",
      link: "https://expense-trucker-nextjs.vercel.app/",
      tech: ["Next.js", "PostgreSQL", "Prisma", "Clerk"],
    },
    {
      id: 2,
      title: "Coffee Shop",
      description:
        "Elegant and responsive React.js coffee shop website. Browse menu items, explore our coffee selection with a beautiful modern interface.",
      image: "/img/coffee.png",
      link: "https://coffee-shope-flame.vercel.app/",
      tech: ["React.js", "CSS", "Responsive Design"],
    },
    {
      id: 3,
      title: "Recipe Website",
      description:
        "Recipe-sharing platform with JavaScript, HTML, CSS and API integration. Discover recipes, view ingredients, and share your own culinary creations.",
      image: "/img/recipe.png",
      link: "https://recipe-websit.vercel.app/",
      tech: ["JavaScript", "HTML", "CSS", "API"],
    },
    {
      id: 4,
      title: "FitNest Gym",
      description:
        "React.js based fitness tracking app. Monitor your workouts, track progress, and achieve your fitness goals with personalized plans.",
      image: "/img/gym.png",
      link: "https://fitnest-gym.vercel.app/",
      tech: ["React.js", "Fitness Tracking", "UI/UX"],
    },
    {
      id: 5,
      title: "Typing Test",
      description:
        "Real-time typing speed test using React.js and Firebase. Test your typing speed and accuracy with live WPM calculation and detailed statistics.",
      image: "/img/typing.png",
      link: "https://typing-testwebsite.vercel.app/",
      tech: ["React.js", "Firebase", "Real-time"],
    },
    {
      id: 6,
      title: "Job Finder",
      description:
        "Job listing platform using HTML, CSS, and JavaScript. Browse job opportunities, filter by category, and find your dream career.",
      image: "/img/job.png",
      link: "https://job-finders.pages.dev/",
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ]


  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">What I developed</span>

      <div className="projects__container container">
        <div className="projects__scroll">
          {projects.map((project) => (
            <div key={project.id} className="project__card">
              <div className="project__image-wrapper">
                <img src={project.image || "/placeholder.svg"} alt={project.title} className="project__image" />
                <div className="project__overlay">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project__link">
                    <i className="uil uil-eye"></i>
                    View Live
                  </a>
                </div>
              </div>
              <div className="project__content">
                <h3 className="project__title">{project.title}</h3>
                <p className="project__description">{project.description}</p>
                <div className="project__tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="project__tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
