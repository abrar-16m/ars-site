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

    // Show/hide navbar based on scroll direction
    if (prevScrollPos > currentScrollPos) {
      setIsNavbarVisible(true); // Scrolling up
    } else {
      setIsNavbarVisible(false); // Scrolling down
    }

    const htmlDoc = document.documentElement;
    const percentScrolled = (htmlDoc.scrollTop / htmlDoc.clientHeight) * 100;

    setLogo(percentScrolled > 85); // Show/hide logo based on scroll
    setPrevScrollPos(currentScrollPos); // Update previous scroll position
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, handleScroll]);

  // Toggle body scroll based on the menu state
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto"; // Disable/enable scrolling

    return () => {
      document.body.style.overflow = "auto"; // Reset when component unmounts
    };
  }, [isMenuOpen]);

  // Function to handle menu icon click
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Function to handle link clicks to close the menu
  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className={`${styles.navbar} ${isNavbarVisible ? "" : styles.invisible_navbar}`}>
      <span className={`${styles.nav_logo} ${logo ? styles.show_logo : ""}`}>
        <Image className="image" src={ars_logo} alt="ARS Logo" fill />
      </span>

      {/* Hamburger Menu Toggle for Mobile */}
      <div className={`${styles.menuIcon} ${isNavbarVisible ? "" : styles.hidden}`} onClick={toggleMenu}>
        <FaBars className={`${isMenuOpen ? styles.active : ""}`} />
      </div>

      {/* Navbar Links */}
      <div className={`${styles.nav_links} ${isMenuOpen ? styles.show_menu : ""}`}>
        <Link href="/#home" onClick={handleLinkClick}>Home</Link>
        <Link href="/#products" onClick={handleLinkClick}>Products</Link>
        <Link href="/#news" onClick={handleLinkClick}>News</Link>
        <Link href="/#about" onClick={handleLinkClick}>About</Link>
        <Link href="/contact" onClick={handleLinkClick}>
          Contact <FaArrowRight className="btn-arrow" />
        </Link>
      </div>
    </nav>
  );
}
