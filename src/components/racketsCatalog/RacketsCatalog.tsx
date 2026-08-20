import { Racket } from "@/types/racket";
import { FC, JSX } from "react";
import RacketCard from "../racketCard/RacketCard";
import styles from "./RacketsCatalog.module.css";

const RacketsCatalog: FC<{ rackets: Racket[] }> = ({ rackets }) => {
  return (
    <div className={styles.container}>
      {rackets.map((racket: Racket): JSX.Element => (
        <RacketCard key={racket.id} racket={racket} />
      ))}
    </div>
  );
};

export default RacketsCatalog;
