import React from "react";
import maxIcon from "../../images/icons/forecast/max.png";
import minIcon from "../../images/icons/forecast/min.png";
import avgIcon from "../../images/icons/forecast/avg.png";
import windIcon from "../../images/icons/forecast/wind.png";
import precipIcon from "../../images/icons/forecast/precip.png";
import humidityIcon from "../../images/icons/forecast/humidity.png";
import snowflakeIcon from "../../images/icons/forecast/snowflake.png";
import { Hour } from "../Hour/Hour.jsx";
import styles from "./ForecastDate.module.scss";

export const ForecastDate = ({ date, displayNumber }) => {
  return date.day ? (
    <div className={styles.forecast}>
      <div className={styles.dateHeader}>
        <span>{date.date}</span>
        <p>
          <span>
          <img alt="" src={date.day.condition.icon} width={24} height={24}/>
            {date.day.condition.text}
          </span>
            <span>
            <img alt="" src={avgIcon}/> {date.day.avgtemp_c}°C
          </span>
        </p>
      </div>
      <div className={styles.general}>
        <span>
          <img alt="" src={maxIcon}/> {date.day.maxtemp_c}°C
        </span>
        <span>
          <img alt="" src={minIcon}/>
          {date.day.mintemp_c}°C
        </span>
        <span>
          <img alt="" src={windIcon} />
          {date.day.maxwind_kph} kph
        </span>
        <span>
          <img src={precipIcon} alt="" />
          {date.day.totalprecip_mm} mm
        </span>
        {date.day.totalsnow_cm && (
          <span>
            <img alt="" src={snowflakeIcon} />
            {date.day.totalsnow_cm} cm
          </span>
        )}
        <span>
          <img src={humidityIcon} alt="" />
          {date.day.avghumidity}%
        </span>
      </div>
      <div className={styles.hourly}>
        {date.hour.map(
          (hour) =>
            hour.time.split(" ")[1].split(":")[0] % (displayNumber || 1) ===
              0 && <Hour key={hour.time} hour={hour} />
        )}
      </div>
    </div>
  ) : (
    ""
  );
};
