import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./works.css";

const projects = [
  {
    id: 1,
    title: "Basic Flying Idle",
    category: "3D Animation",
    year: "2026",
    file: "work-01.mp4",
  },
  {
    id: 2,
    title: "Basic Walking",
    category: "3D Animation",
    year: "2026",
    file: "work-02.mp4",
  },
  {
    id: 3,
    title: "Basic Running",
    category: "3D Animation",
    year: "2026",
    file: "work-03.mp4",
  },
    {
    id: 4,
    title: "Gun Walk",
    category: "Animation",
    year: "2026",
    file: "work-04.mp4",
  },
  {
    id: 5,
    title: "Gun Run",
    category: "Animation",
    year: "2026",
    file: "work-05.mp4",
  },
];

export default function Works() {
  const [activeProject, setActiveProject] = useState(null);

  function getVideoPath(fileName) {
    return `${import.meta.env.BASE_URL}works/${fileName}`;
  }

  useEffect(() => {
    if (!activeProject) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  return (
    <>
      <section id="works" className="works">
        <motion.header
          className="works__header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
        >
          <span className="works__eyebrow">Selected Works</span>

          <h2 className="works__heading">
            A selection of my animation projects.
          </h2>
        </motion.header>

        <div className="works__list">
          {projects.map((project, index) => (
            <motion.article
              className="work"
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.85,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              <button
                type="button"
                className="work__open"
                onClick={() => setActiveProject(project)}
                aria-label={`Open ${project.title}`}
              >
                <div className="work__media">
                  <div className="work__fallback">
                    <span>{project.title}</span>
                  </div>

                  <video
                    className="work__video"
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="metadata"
                  >
                    <source
                      src={getVideoPath(project.file)}
                      type="video/mp4"
                    />
                  </video>

                  <div className="work__shade" aria-hidden="true" />

                  <span className="work__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="work__view">
                    View project
                  </span>
                </div>
              </button>

              <div className="work__information">
                <h3>{project.title}</h3>

                <div className="work__details">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="work-modal"
            role="dialog"
            aria-modal="true"
            aria-label={activeProject.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="work-modal__content"
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="work-modal__top">
                <div>
                  <span className="work-modal__category">
                    {activeProject.category}
                  </span>

                  <h2>{activeProject.title}</h2>
                </div>

                <button
                  type="button"
                  className="work-modal__close"
                  onClick={() => setActiveProject(null)}
                  aria-label="Close video"
                >
                  ×
                </button>
              </div>

              <video
                className="work-modal__video"
                controls
                autoPlay
                playsInline
              >
                <source
                  src={getVideoPath(activeProject.file)}
                  type="video/mp4"
                />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}