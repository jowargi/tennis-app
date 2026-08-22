import { Racket } from "@/types/racket";
import { FC, JSX } from "react";
import NavLink from "../navLink/NavLink";
import RacketCard from "../racketCard/RacketCard";
import styles from "./RacketsCarousel.module.css";

interface RacketsCarouselProps {
  rackets: Racket[];
  racketsCarouselTitle?: string;
  linkHref?: string;
  linkText?: string;
}

const RacketsCarousel: FC<RacketsCarouselProps> = ({
  rackets,
  racketsCarouselTitle = "Ракетки",
  linkHref = "/rackets",
  linkText = "Все ↗",
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>{racketsCarouselTitle}</h3>
        <nav>
          <NavLink href={linkHref}>{linkText}</NavLink>
        </nav>
      </div>
      <ul className={styles.list}>
        {rackets.map((racket: Racket): JSX.Element => (
          <li key={racket.id} className={styles.item}>
            <RacketCard racket={racket} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RacketsCarousel;
