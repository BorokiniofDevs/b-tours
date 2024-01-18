import React from "react";
import NavLink from "../navlink/NavLink";
import styles from "./links.module.css";

const Links = () => {
  const links = [
    {
      title: "Destination",
      path: "/destination",
    },
    {
      title: "Hotels",
      path: "/hotels",
    },
    {
      title: "Flights",
      path: "/flights",
    },
    {
      title: "Bookings",
      path: "/bookings",
    },
    {
      title: "Login",
      path: "/login",
    },
    {
      title: "Sign Up",
      path: "/signup",
    },
    {
      title: "En",
      path: "",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
      </div>
    </div>
  );
};

export default Links;
