import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import SearchCard from "@/components/searchCard/SearchCard";
import { infoItems, searchItems } from "@/utils/data";
import ImageCard from "@/components/imageCard/ImageCard";

const Home = () => {
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

      {/* INF0 SESION */}

      <div className={styles.infoContainer}>
        <div className={styles.infoText}>
          <h1 className={styles.infoHead}>Tour Types</h1>
          <div className={styles.stroke}>
            <div className={styles.strokeline}></div>
            <h2 className={styles.infoTitle}>Adventure & Activity</h2>
          </div>
          <p className={styles.infoDesc}>
            Explore thrilling destinations that will get your heart racing. From
            rugged mountains to dense jungles, embark on unforgettable journeys
            that will test your limits and create lasting memories. Dive into
            the unknown, conquer nature's challenges, and write your own epic
            tale of adventure.
          </p>

          <div className={styles.infoItems}>
            {infoItems.map((item) => (
              <ImageCard item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
