import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { getFuture } from "../../requests/requests";
import { useDispatch, useSelector } from "react-redux";
import { ForecastDate } from "../../components/ForecastDate/ForecastDate";
import styles from "./Future.module.scss";

export const Future = () => {
  const [date, setDate] = useState("2000-01-01");
  const dispatch = useDispatch();
  const fetchedLocation = useSelector((state) => state.fetchedLocation);
  const future = useSelector((state) => state.future);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (date && fetchedLocation?.name) {
      const today = new Date();
      const dateToCheck = new Date(date);
      const diffTime = Math.abs(dateToCheck - today);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays >= 14 && diffDays <= 300) {
        setIsLoading(true);
        getFuture(dispatch, fetchedLocation.name, date).then(() =>
          setIsLoading(false)
        );
      }
    }
  }, [date]);

  return (
    <Card isScroll={future && date}>
      Enter or choose the date:{" "}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <p>Date must be from 14 to 300 days from today's date</p>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        future && <ForecastDate date={future} />
      )}
    </Card>
  );
};
