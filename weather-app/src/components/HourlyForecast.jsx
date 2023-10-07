import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function formatTime(timestamp) {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes}`;
}

function HourlyForecast({ hourlyData }) {
  return (
    <>
      {hourlyData && (
        <Container className="forcast-bx mb-3 ">
          <Row className="py-3 ">
            {hourlyData.map((hour, index) => (
              <Col className="center mb-3" key={index}>
                <div>
                  <span>{formatTime(hour.dt)} </span>
                </div>
                <div>
                  {" "}
                  <img
                    src={`https://openweathermap.org/img/w/${hour.weather[0].icon}.png`}
                    alt={hour.weather[0].description}
                  />
                </div>
                <div className="px-3">
                  <span> {Math.floor(hour.main.temp)}°C </span>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
}

export default HourlyForecast;
