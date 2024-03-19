"use client";
import styles from "./page.module.css";
import Image from "next/image";
import SearchCard from "@/components/searchCard/SearchCard";
import { infoItems, searchItems } from "@/utils/data";
import {
  DestinationComponent,
  InfoComponent,
} from "@/components/heroCard/heroCard";
import CarouselCard from "@/components/carousel/CarouselCard";

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
            <p className={styles.text}>
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

      {/* INF0 SESSION */}

      <InfoComponent
        title="Tour Types"
        subTitle="Adventure & Activity"
        description="Explore thrilling destinations that will get your heart racing. From rugged mountains to dense jungles, embark on unforgettable journeys that will test your limits and create lasting memories. Dive into the unknown, conquer nature's challenges, and write your own epic tale of adventure."
        infoItems={infoItems}
      />

      {/* DESTINATION SESSION */}
      <DestinationComponent
        title="Where to go"
        subTitle="Popular destinations"
        description="Explore our curated selection of the world's most sought-after travel spots in this diverse list of must-visit places. From iconic cities to pristine natural wonders, we've gathered the best destinations to ignite your wanderlust."
        desItem={<CarouselCard />}
      />
    </div>
  );
};

export default Home;
