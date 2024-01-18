import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.container}>
      Home
      <Image className={styles.hero} src="/hero.png" alt="" fill />
    </div>
  );
};

export default Home;
