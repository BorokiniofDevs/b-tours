import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import SearchCard from "@/components/searchCard/SearchCard";

const Home = () => {
  const searchItems = [
    {
      label: "Search Destination*",
      placeholder: "Enter Destination",
    },
    {
      label: "Pax Number*",
      placeholder: "No of People",
    },
    {
      label: "Checkin Date*",
      placeholder: "MM/DD/YYYY",
    },
    {
      label: "CheckOut Date*",
      placeholder: "MM/DD/YYYY",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <Image className={styles.hero} src="/hero.png" alt="" fill />
        <div className={styles.textContainer}>
          <div className={styles.empty}></div>
          <div className={styles.mainText}>
            <h1 className={styles.caps}>
              Welcome to the World of Extraordinary Travel
            </h1>
            <p>
              If you're in search of exciting adventures, unforgettable
              experiences, and breathtaking places to explore, you've come to
              the right place!
            </p>
          </div>
        </div>

        <div className={styles.searchContainer}>
          <div className={styles.searchText}>Plan your travel now</div>
          <div className={styles.searchCard}>
            {searchItems.map((item) => (
              <SearchCard item={item} />
            ))}

            <button className={styles.button} type="button">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className={styles.infoContainer}></div>
    </div>
  );
};

export default Home;
