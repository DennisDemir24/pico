import styles from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className={styles.bgImage}></div>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>Picoolo Mondo</h1>
        <span className={styles.subheading}>Norrköping</span>
      </div>
      <div className={styles.menuContainer}>
        <p className={styles.menuHeading}>Se vår meny här:</p>
        <a href="/static/meny.pdf" target="_blank" className={styles.menuText}>
          Meny
        </a>
      </div>
      {/* <p>
        Ladda ner vår meny{" "}
        <a href="/static/meny.pdf" download>
          här
        </a>
      </p> */}
    </>
  );
};

export default Hero;
