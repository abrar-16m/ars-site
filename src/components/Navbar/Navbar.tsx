"use client";

import styles from "./Navbar.module.css";
import Image from "next/image";
import ars_logo from "../../../public/assets/ARS_2_cropped.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [logo, setLogo] = useState(false);

  function handleChange() {
    const htmlDoc = document.documentElement;
    const percentScrolled = (htmlDoc.scrollTop / htmlDoc.clientHeight) * 100;

    percentScrolled > 85 ? setLogo(true) : setLogo(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleChange);
    window.addEventListener("resize", handleChange);

    handleChange();

    return () => {
      window.removeEventListener("scroll", handleChange);
      window.removeEventListener("resize", handleChange);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <span className={`${styles.nav_logo} ${logo ? styles.show_logo : ""}`}>
        <Image className="image" src={ars_logo} alt="ARS Logo" fill />
      </span>
      <div>
        <Link href="/#home">Home</Link>
        <Link href="/#products">Products</Link>
        <Link href="/#news">News</Link>
        <Link href="/#about">About</Link>
        <Link href="newcontact">
          Contact <FaArrowRightLong className="btn-arrow" />
        </Link>
      </div>
    </nav>
  );
}
