import React from "react";
import PropTypes from "prop-types";
import iconData from "../data/iconData.json";

function ForecastSummary(props) {
  const { date, description, temperature, icon } = props;
  const formattedDate = new Date(date).toDateString();
  const weatherCode = icon.slice(0, 1) + "00";

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{formattedDate}</div>
      <div className="forecast-summary__description">{description}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <img src={iconData[weatherCode]} alt="weather icon" />
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}
        &deg;C
      </div>
    </div>
  );
}

export default ForecastSummary;

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};
