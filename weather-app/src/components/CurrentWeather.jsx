import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Droplet, Wind } from "react-bootstrap-icons";

function formatDay(timestamp) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(timestamp * 1000);
  const dayOfWeek = days[date.getDay()];
  return dayOfWeek;
}

function CurrentWeather({ weatherData }) {
  return (
    <>
      {weatherData && (
        <Container className="current-weather  my-3">
          <Row>
            <Col className="d-flex align-items-center justify-content-center loc-temp">
              <div className="location">{weatherData.name}</div>
              <div className="temp-des">
                <span> {Math.floor(weatherData.main.temp)}°</span>
                {weatherData.weather[0].description}
              </div>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col className="d-flex align-items-center justify-content-center date">
              <div className="mx-1">
                {formatDay(weatherData.dt)} (
                {new Date(weatherData.dt * 1000).toLocaleDateString()})
              </div>
              &nbsp;|&nbsp;
              <div className="mx-1">
                <span>{Math.floor(weatherData.main.temp_max)}°</span>/
                <span>{Math.floor(weatherData.main.temp_min)}°</span>
              </div>
              &nbsp;|&nbsp;
              <div className="mx-1">
                Air quality: <span>Good</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex align-items-center justify-content-center date">
              <div>
                <Wind /> Wind speed:{weatherData.wind.speed} m/s
              </div>
              &nbsp;|&nbsp;
              <div className="mx-1">
                <Droplet /> Humidity:{weatherData.main.humidity}
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default CurrentWeather;
