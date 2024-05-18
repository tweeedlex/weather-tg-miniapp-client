import React, { useState } from "react";
import { Card } from "../../components/Card/Card.jsx";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { ForecastDate } from "../../components/ForecastDate/ForecastDate.jsx";
import { DisplayEvery } from "../../components/DisplayEvery/DisplayEvery.jsx";

export const Forecast = () => {
  const forecast = useSelector((state) => state.forecast);
  const fetchedLocation = useSelector((state) => state.fetchedLocation);
  const [displayNumber, setDisplayNumber] = useState(3);

  return fetchedLocation.name ? (
    <Card isScroll={true}>
      <DisplayEvery
        setDisplayNumber={setDisplayNumber}
        displayNumber={displayNumber}
      />
      <hr />
      <Swiper pagination={true} modules={[Pagination]}>
        {forecast.map((date) => (
          <SwiperSlide key={date.date}>
            <ForecastDate date={date} displayNumber={displayNumber} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Card>
  ) : null;
};
