import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function formatDate(timestamp) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString("en-US", { weekday: "long" });
}

function DailyForecast({ dailyData }) {
  return (
    <>
      {dailyData && (
        <Container className="forcast-bx mt-3 hourly-scroll">
          <Row className="p-3 md-auto">
            {dailyData.map((day, index) => (
              <Col className="center" key={index}>
                <div>
                  <span> {formatDate(day.dt)}</span>
                </div>
                <div>
                  {" "}
                  <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    alt="logo"
                    width="60px"
                  />
                </div>
                <div className="px-3">
                  <span> 23°</span>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
}

export default DailyForecast;
