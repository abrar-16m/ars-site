"use client";

import styles from "./Navbar.module.css";
import Image from "next/image";
import ars_logo from "../../../public/assets/ARS_2_cropped.png";
import { FaArrowRight, FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [logo, setLogo] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu open state
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Navbar visibility
  const [prevScrollPos, setPrevScrollPos] = useState(0); // Previous scroll position

  // Handle scroll behavior
  function handleScroll() {
    const currentScrollPos = window.scrollY;
    const htmlDoc = document.documentElement;
    const percentScrolled = (htmlDoc.scrollTop / htmlDoc.clientHeight) * 100;

    setLogo(percentScrolled > 85); // Show/hide logo based on scroll

    // Show navbar when scrolling up, hide when scrolling down
    if (prevScrollPos > currentScrollPos) {
      setIsNavbarVisible(true);
    } else {
      setIsNavbarVisible(false);
    }

    setPrevScrollPos(currentScrollPos); // Update scroll position
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  // Toggle body scroll based on the menu state
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto"; // Disable/enable scrolling

    // Apply it globally to all pages
    return () => {
      document.body.style.overflow = "auto"; // Reset when component unmounts
    };
  }, [isMenuOpen]);

  // Function to handle menu icon click
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className={`${styles.navbar} ${isNavbarVisible ? "" : styles.invisible_navbar}`}>
      <span className={`${styles.nav_logo} ${logo ? styles.show_logo : ""}`}>
        <Image className="image" src={ars_logo} alt="ARS Logo" fill />
      </span>

      {/* Hamburger Menu Toggle for Mobile */}
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <FaBars className={`${isMenuOpen ? styles.active : ""}`} /> {/* Only one icon will display */}
      </div>

      {/* Navbar Links */}
      <div className={`${styles.nav_links} ${isMenuOpen ? styles.show_menu : ""}`}>
        <Link href="/#home">Home</Link>
        <Link href="/#products">Products</Link>
        <Link href="/#news">News</Link>
        <Link href="/#about">About</Link>
        <Link href="/newcontact">
          Contact <FaArrowRight className="btn-arrow" />
        </Link>
      </div>
    </nav>
  );
}
