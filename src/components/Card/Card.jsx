import React from "react";
import { motion } from "framer-motion";
import styles from "./Card.module.scss";

export const Card = ({ children, isScroll }) => {
  return (
    <motion.div
      className={styles.card + " " + (isScroll ? styles.scroll : "")}
      initial={{ opacity: 0.5, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0.5, x: -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.content}>{children}</div>
    </motion.div>
  );
};

export default Card;
