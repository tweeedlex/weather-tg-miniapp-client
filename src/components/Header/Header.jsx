import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import searchIcon from "../../images/icons/search.png";
import { setLocation } from "../../store/slice";
import { useDispatch } from "react-redux";

export const Header = () => {
  const [locationValue, setLocationValue] = useState("");
  const dispatch = useDispatch();

  const links = document.querySelectorAll("header a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((link) => link.classList.remove(styles.active));
      link.classList.add(styles.active);
    });
  });

  return (
    <header>
      <div className={"header__container " + styles.container}>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Enter your city..."
            value={locationValue}
            onChange={(e) => setLocationValue(e.target.value)}
          />
          <button className="search">
            <img
              src={searchIcon}
              alt="Search"
              onClick={() => dispatch(setLocation(locationValue))}
            />
          </button>
        </div>
        <nav className={styles.navigation}>
          <ul className={styles.links}>
            <li className={styles.linkItem}>
              <Link className={styles.link} to="/">
                Current
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link className={styles.link} to="/forecast">
                Forecast
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link className={styles.link} to="/history">
                History
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link className={styles.link} to="/future">
                Future
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
