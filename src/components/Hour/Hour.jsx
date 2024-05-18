import React, { useState } from "react";
import styles from "./Hour.module.scss";
import pressureIcon from "../../images/icons/forecast/pressure.png";
import humidityIcon from "../../images/icons/forecast/humidity.png";
import precipIcon from "../../images/icons/forecast/precip.png";
import cloudIcon from "../../images/icons/forecast/cloud.png";
import feelsIcon from "../../images/icons/forecast/feels.png";
import visibilityIcon from "../../images/icons/forecast/visibility.png";
import snowIcon from "../../images/icons/forecast/snow.png";
import rainIcon from "../../images/icons/forecast/rain.png";

export const Hour = ({ hour }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      className={`${styles.hour} ${isOpened ? styles.opened : styles.closed}`}
      id={"hour" + hour.time.split(" ")[1]}
      onClick={() => (isOpened ? setIsOpened(false) : setIsOpened(true))}
    >
      <div className={styles.visible}>
        <p>{hour.time.split(" ")[1]}</p>
        <p>{hour.temp_c}°</p>
        <p>
          <img src={"https:" + hour.condition.icon} alt="" />{" "}
          <span
            className={
              styles.condition +
              " " +
              (hour.condition.text.length >= 15 ? styles.small : "")
            }
          >
            {hour.condition.text}
          </span>
        </p>
        <p>{hour.wind_kph} kph</p>
        <p>
          <img src={pressureIcon} alt="" /> {hour.pressure_mb} mb
        </p>
        <p>
          <img src={humidityIcon} alt="" /> {hour.humidity}%
        </p>
        <button
          className={
            styles.open + " " + (isOpened ? styles.opened : styles.closed)
          }
        ></button>
      </div>
      <div className={styles.hidden}>
        <span>
          <img src={precipIcon} alt="" /> Precip: {hour.precip_mm} mm
        </span>
        <span>
          <img src={cloudIcon} alt="" />
          Cloud: {hour.cloud}%
        </span>
        <span>
          <img src={feelsIcon} alt="" />
          Feels: {hour.feelslike_c}°
        </span>
        <span>
          <img src={visibilityIcon} alt="" />
          Visibility: {hour.vis_km} km
        </span>
        <span>
          <img src={rainIcon} alt="" />
          Chance of rain: {hour.chance_of_rain}%
        </span>
        <span>
          <img src={snowIcon} alt="" />
          Chance of snow: {hour.chance_of_snow}%
        </span>
      </div>
    </div>
  );
};
