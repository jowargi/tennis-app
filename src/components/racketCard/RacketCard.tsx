import { Racket } from "@/types/racket";
import { FC } from "react";
import Img from "../img/Img";
import NavLink from "../navLink/NavLink";
import styles from "./RacketCard.module.css";
import PendingLinkContent from "../pendingLinkContent/PendingLinkContent";

const RacketCard: FC<{ racket: Racket }> = ({ racket }) => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <NavLink
          href={`/racket/${racket.id}`}
          borderRadius="rounded"
          fontSize="s"
        >
          <PendingLinkContent linkContent="↗" />
        </NavLink>
      </nav>
      <Img
        src={racket.imageUrl}
        alt={racket.name}
        loading="lazy"
        className={styles.img}
      />
      <p className={styles.text}>{racket.name}</p>
    </div>
  );
};

export default RacketCard;
