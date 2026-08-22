import { FC, JSX } from "react";
import styles from "./TopRacketsCatalogSkeleton.module.css";
import RacketCardSkeleton from "../racketCard/RacketCardSkeleton";

const TopRacketsCatalogSkeleton: FC = function () {
  return (
    <div className={styles.container}>
      {new Array(10).fill(undefined).map((_, index: number): JSX.Element => (
        <RacketCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default TopRacketsCatalogSkeleton;
