import { motion } from "framer-motion";
import "./Quote.css";

export default function Quote() {
  return (
    <footer className="quote">
      <div className="quote__glow" aria-hidden="true" />
      <div className="quote__grain" aria-hidden="true" />

      <motion.blockquote
        className="quote__content"
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        <span className="quote__mark" aria-hidden="true">
          “
        </span>

        <p>
          The impediment to action advances action.
          What stands in the way becomes the way.
        </p>

        <cite>Marcus Aurelius</cite>
      </motion.blockquote>

      <div className="quote__bottom">
        <span>ForgeMasterDev</span>
        <span>3D Animation Portfolio</span>
      </div>
    </footer>
  );
}