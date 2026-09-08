"use client";

import { FC } from "react";
import Button from "../button/Button";
import styles from "./PaginationControls.module.css";

interface PaginationControlsProps {
  currentPage: number;
  prevDisabled: boolean;
  nextDisabled: boolean;
}

const updatePage = (page: number): void => {
  const searchParams = new URL(window.location.href).searchParams;

  searchParams.set("page", page.toString());

  window.history.pushState(null, "", `?${searchParams}`);
};

const PaginationControls: FC<PaginationControlsProps> = ({
  currentPage,
  prevDisabled,
  nextDisabled,
}) => {
  return (
    <div className={styles.container}>
      <Button
        disabled={prevDisabled}
        onClick={(): void => updatePage(currentPage - 1)}
      >
        ←
      </Button>
      <p className={styles.page}>{currentPage}</p>
      <Button
        disabled={nextDisabled}
        onClick={(): void => updatePage(currentPage + 1)}
      >
        →
      </Button>
    </div>
  );
};

export default PaginationControls;
