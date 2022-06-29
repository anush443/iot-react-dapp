import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WavesIcon from "@mui/icons-material/Waves";
import MyCard from "./MyCard.jsx";

const Widgets = ({ amount, temperature, humidity, moisture }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6} md={12} style={{ paddingBottom: "20px" }}>
            <MyCard
              icon={<CurrencyExchangeIcon />}
              subtitle="Eth In USD"
              value={amount}
            />
          </Col>
          <Col lg={6} md={12} style={{ paddingBottom: "20px" }}>
            <MyCard
              icon={<ThermostatIcon />}
              subtitle="Temperature"
              value={temperature}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={12} style={{ paddingBottom: "20px" }}>
            <MyCard
              icon={<WbSunnyIcon />}
              subtitle="Humidity"
              value={humidity}
            />
          </Col>
          <Col lg={6} md={12} style={{ paddingBottom: "20px" }}>
            <MyCard icon={<WavesIcon />} subtitle="Moisture" value={moisture} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Widgets;
