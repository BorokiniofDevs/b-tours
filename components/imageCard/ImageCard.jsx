import Image from "next/image";
import React from "react";
import s from "./Image.module.css";

const ImageCard = ({ item }) => {
  return (
    <div className={s.imageCard}>
      <div className={s.imageIcon}>
        <Image src={item.icon} alt="card-icon" fill />
      </div>
      <div className={s.imageText}>
        <h1 className={s.imageTitle}>{item.title}</h1>
        <p className={s.imageDesc}>{item.desc}</p>
      </div>
    </div>
  );
};

export default ImageCard;
