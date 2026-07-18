import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* Menü açıkken sayfanın aşağı-yukarı kaymasını engeller */
  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const scrollPosition = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    function handleEscape(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";

      window.scrollTo(0, scrollPosition);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className={[
        "navbar",
        scrolled ? "navbar--scrolled" : "",
        menuOpen ? "navbar--menu-open" : "",
      ].join(" ")}
    >
      <nav className="navbar__container" aria-label="Main navigation">
        <a className="navbar__logo" href="#home" onClick={closeMenu}>
          ForgeMasterDev
        </a>

        <button
          type="button"
          className={`navbar__toggle ${
            menuOpen ? "navbar__toggle--open" : ""
          }`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        <div
          className={`navbar__links ${
            menuOpen ? "navbar__links--open" : ""
          }`}
        >
          <a href="#works" onClick={closeMenu}>
            Works
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}