"use client";

import { Brand } from "@/types/brand";
import { useSearchParams } from "next/navigation";
import { FC, JSX } from "react";
import Button from "../button/Button";
import styles from "./BrandFilter.module.css";

const updateBrand = (brand?: Brand["name"]): void => {
  window.history.pushState(
    null,
    "",
    brand ? `?brand=${brand}` : window.location.pathname,
  );
};

const BrandFilter: FC<{ brands?: Brand[] }> = ({ brands }) => {
  const searchParams = useSearchParams();

  const currentBrandName = searchParams.get("brand");

  return (
    <ul className={styles.list}>
      <li>
        <Button
          disabled={currentBrandName === null}
          onClick={(): void => updateBrand()}
        >
          All
        </Button>
      </li>
      {brands?.map((brand: Brand): JSX.Element => (
        <li key={brand.id}>
          <Button
            disabled={currentBrandName === brand.name}
            onClick={(): void => updateBrand(brand.name)}
          >
            {brand.name}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default BrandFilter;
