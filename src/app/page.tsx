import About from "@/components/Home/About/About";
import styles from "./page.module.css";
import Hero from "@/components/Home/Hero/Hero";
import HowItWorks from "@/components/Home/HowItWorks/HowItWorks";
import News from "@/components/Home/News/News";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/sections/footer/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.homepage} id="homepage">
        <Hero />
        <HowItWorks />
        <News />
        <About />
        <Footer/>
      </div>
    </>
  );
}
