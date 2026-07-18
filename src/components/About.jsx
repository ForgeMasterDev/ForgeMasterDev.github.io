import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__mist" aria-hidden="true" />
      <div className="about__grain" aria-hidden="true" />

      <div className="about__container">
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <span className="about__eyebrow">About</span>

          <h2 className="about__heading">
            I'm a 3D animator who mainly works with Blender, and I'm currently
            learning Moon Animator. I'm always happy to meet kind and creative
            people.
          </h2>
        </motion.div>

        <div className="about__body">
          <motion.div
            className="about__statement"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <span className="about__number">More Me :D</span>

            <p
              style={{
                maxWidth: "650px",
                margin: 0,
                color: "#b2aca0",
                fontFamily: '"Inter", Arial, sans-serif',
                fontSize: "clamp(1rem, 1.3vw, 1.2rem)",
                fontWeight: 300,
                lineHeight: 1.8,
                letterSpacing: "0.01em",
              }}
            >
              I love dark fantasy, especially the atmosphere of “Hide” by
              Dorian Concept, liminal places, chatting with people, and
              creating animations. I also enjoy exploring new tools and
              techniques to improve my skills and bring my ideas to life.
            </p>
          </motion.div>

          <motion.div
            className="about__details"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: "easeOut",
            }}
          >
            <p>
              I create animations, experiment with different styles, and
              continue improving through new projects.
            </p>

            <div className="about__tools">
              <span>Blender</span>
              <span>3D Animation</span>
              <span>Personal Projects</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}