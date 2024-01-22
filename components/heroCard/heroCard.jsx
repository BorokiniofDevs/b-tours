import ImageCard from "../imageCard/ImageCard";
import styles from "./hero.module.css";

export const InfoComponent = ({ title, subTitle, description, infoItems }) => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoText}>
        <h1 className={styles.infoHead}>{title}</h1>
        <div className={styles.stroke}>
          <div className={styles.strokeline}></div>
          <h2 className={styles.infoTitle}>{subTitle}</h2>
        </div>
        <p className={styles.infoDesc}>{description}</p>

        <div className={styles.infoItems}>
          {infoItems.map((item) => (
            <ImageCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const DestinationComponent = ({
  title,
  subTitle,
  description,
  desItem,
}) => {
  return (
    <div className={styles.desContainer}>
      <div className={styles.desText}>
        <h1 className={styles.desHead}>{title}</h1>
        <div className={styles.destroke}>
          <div className={styles.destrokeline}></div>
          <h2 className={styles.desTitle}>{subTitle}</h2>
        </div>
        <p className={styles.desDesc}>{description}</p>
        <div className={styles.desItem}>{desItem}</div>
      </div>
    </div>
  );
};
