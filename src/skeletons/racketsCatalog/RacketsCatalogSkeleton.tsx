import { FC, JSX } from "react";
import RacketCardSkeleton from "../racketCard/RacketCardSkeleton";
import { RACKETS_PAGE_LIMIT } from "@/constants/pagination";
import styles from "./RacketsCatalogSkeleton.module.css";

const RacketsCatalogSkeleton: FC = function () {
  return (
    <div className={styles.container}>
      {new Array(RACKETS_PAGE_LIMIT)
        .fill(undefined)
        .map((_, index: number): JSX.Element => (
          <RacketCardSkeleton key={index} />
        ))}
    </div>
  );
};

export default RacketsCatalogSkeleton;
