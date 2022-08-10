import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "Time to hit the beach!",
    iconName: "sun",
    iconColor: "red",
  },
  winter: {
    text: "Burr! Its chilly!!",
    iconName: "snowflake",
    iconColor: "blue",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName, iconColor } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i
        className={`icon-left ${iconName} ${iconColor} loading massive icon`}
      />
      <h1>{text}</h1>
      <i
        className={`icon-right ${iconName} ${iconColor} loading massive icon`}
      />
    </div>
  );
};

export default SeasonDisplay;
