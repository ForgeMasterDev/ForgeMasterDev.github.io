import { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyDiscordUsername() {
    try {
      await navigator.clipboard.writeText("forgemasterdev");
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Discord kullanıcı adı kopyalanamadı:", error);
    }
  }

  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact__container"
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
      >
        <span className="contact__eyebrow">Contact</span>

        <h2 className="contact__heading">
          You can find me here.
        </h2>

        <div className="contact__links">
          <button
            type="button"
            className="contact__link"
            onClick={copyDiscordUsername}
          >
            <span className="contact__platform">
              Discord
            </span>

            <span className="contact__username">
              {copied ? "Copied!" : "@forgemasterdev"}
            </span>

            <span className="contact__arrow">
              Copy ↗
            </span>
          </button>

          <a
            className="contact__link"
            href="https://x.com/ForgeMasterDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact__platform">
              X / Twitter
            </span>

            <span className="contact__username">
              @ForgeMasterDev
            </span>

            <span className="contact__arrow">
              Visit ↗
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}