import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import searchIcon from "../../images/icons/search.png";
import saveIcon from "../../images/icons/save.png";
import removeIcon from "../../images/icons/remove.png";
import { setLocation } from "../../store/slice";
import { useDispatch } from "react-redux";

export const Header = () => {
  const [locationValue, setLocationValue] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedLocation = localStorage.getItem("location")
    if (savedLocation) {
      setIsSaving(true)
    }
  }, []);

  const links = document.querySelectorAll("header a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((link) => link.classList.remove(styles.active));
      link.classList.add(styles.active);
    });
  });

  const handleChangeLocation = () => {
    dispatch(setLocation(locationValue))
    if (isSaving) {
      localStorage.setItem("location", locationValue)
    }
  }

  const handleToggleSaving = () => {
    if (isSaving) {
      localStorage.setItem("location", "")
    } else {
      localStorage.setItem("location", locationValue)
    }
    setIsSaving(!isSaving);
  }

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
          <button className="search" onClick={handleChangeLocation}>
            <img
                src={searchIcon}
                alt="Search"
            />
          </button>
          <button className={styles.save} onClick={handleToggleSaving}>
            <img
                src={saveIcon}
                alt="Save"
                width={20}
            />
            <img
                className={styles.removeIcon + " " + (isSaving ? styles.active : "")}
                src={removeIcon}
                alt="Cancel"
                width={12}
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
