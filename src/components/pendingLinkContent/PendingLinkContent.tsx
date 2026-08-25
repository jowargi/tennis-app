"use client";

import { useLinkStatus } from "next/link";
import { FC } from "react";
import styles from "./PendingLinkContent.module.css";

const PendingLinkContent: FC<{ linkContent: string }> = ({ linkContent }) => {
  const { pending } = useLinkStatus();

  return pending ? (
    <span className={styles.dots}>
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </span>
  ) : (
    linkContent
  );
};

export default PendingLinkContent;
