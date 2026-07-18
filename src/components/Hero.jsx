import { motion } from "framer-motion";
import grassVideo from "../assets/grass-loop.mp4";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <video
        className="hero__video"
        src={grassVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      <div className="hero__color-grade" aria-hidden="true" />
      <div className="hero__vignette" aria-hidden="true" />
      <div className="hero__grain" aria-hidden="true" />

      <div className="hero__content">
        <motion.span
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
        >
          Animation Portfolio
        </motion.span>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 35, filter: "blur(14px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.25, ease: "easeOut" }}
        >
          ForgeMasterDev
        </motion.h1>

        <motion.p
          className="hero__role"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.85 }}
        >
          3D Animator
        </motion.p>

        <motion.p
          className="hero__description"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9 }}
        >
          Movement suspended between memory and silence.
        </motion.p>

        <motion.a
          className="hero__button"
          href="#works"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.8 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Enter the field
        </motion.a>

        <motion.div
          className="hero__arrow"
          aria-hidden="true"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
}