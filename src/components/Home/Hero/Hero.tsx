import styles from "./Hero.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import ars_logo from "../../../../public/assets/ARS_1_Grey_cropped.png";
import vision_2030 from "../../../../public/assets/vision-2030_cropped.png";
import NextLink from "next/link";

export default function Hero() {
  return (
    <div className={styles.hero} id="hero">
      <div className={styles.vision_div}>
        <a
          href="https://www.vision2030.gov.sa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <Image className="image" src={vision_2030} alt="Vision 2030" fill />
          </div>
        </a>
      </div>
      {/* middle div to make it a column */}
 
      <div className={styles.hero_left}>
        <div>
          <Image className="image" src={ars_logo} alt="ARS Logo" fill />
        </div>
      </div>
      <div className={styles.hero_right}>
        <h1>
          Revolutionizing Automation,
          <br />
          Driving Innovation
        </h1>
        <div className={styles.line}></div>
      </div>
      <div className={styles.hero_bottom}>
        <NextLink href="construction">
          <button className="btn">
            Next <FaArrowRightLong className="btn-arrow" />
          </button>
        </NextLink>
        </div>
        </div>
  
    
  );
}
