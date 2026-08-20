import { Racket } from "@/types/racket";
import { FC } from "react";
import Img from "../img/Img";
import styles from "./RacketView.module.css";

const RacketView: FC<{ racket: Racket }> = ({ racket }) => {
  return (
    <div className={styles.container}>
      <div className={styles["info-wrapper"]}>
        <p className={styles.brand}>{racket.brand.name}</p>
        <h3 className={styles.title}>{racket.name}</h3>
        <p className={styles.description}>{racket.description}</p>
        <p className={styles.price}>{racket.price} €</p>
      </div>
      <div className={styles["img-wrapper"]}>
        <Img src={racket.imageUrl} alt={racket.name} className={styles.img} />
      </div>
    </div>
  );
};

export default RacketView;
