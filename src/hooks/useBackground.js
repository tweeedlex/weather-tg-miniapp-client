import images from "../images.json";
import { useEffect } from "react";

export const useBackground = (current, setBackground) => {
  useEffect(() => {
    if (!current) return;

    if (current?.is_day) {
      const image = images.find(
        (image) => image.day.toLowerCase() === current?.condition?.text.toLowerCase()
      )?.imageDay;
      setBackground(image);
    } else if (!current?.is_day) {
      const image = images.find(
        (image) => image.night === current?.condition?.text
      )?.imageNight;
      setBackground(image);
    }
  }, [current]);
};
