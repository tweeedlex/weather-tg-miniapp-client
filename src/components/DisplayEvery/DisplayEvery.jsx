import React from "react";
import styles from "./DisplayEvery.module.scss";

export const DisplayEvery = ({ displayNumber, setDisplayNumber }) => {
  return (
    <p className={styles.displayEvery}>
      Display every:{" "}
      <span>
        <input
          type="number"
          value={displayNumber}
          onChange={(e) =>
            e.target.value >= 0 && e.target.value <= 8
              ? setDisplayNumber(e.target.value)
              : ""
          }
        />
        hour
      </span>
    </p>
  );
};
