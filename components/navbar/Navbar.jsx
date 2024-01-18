import React from "react";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="" width={30} height={30} />
        <div className={styles.text}>B-</div>
        Tours
      </div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
