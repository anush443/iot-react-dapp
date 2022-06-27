import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  Connect,
  readStats,
  getEthInUsd,
  updateStats,
} from "./ContractMethods.js";
import { FormControl } from "react-bootstrap";
import MyCard from "./MyCard.jsx";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WavesIcon from "@mui/icons-material/Waves";
import { useState } from "react";

const Form = styled.form`
  padding-top: 10px;
`;

const schema = yup
  .object({
    temperature: yup.number().required(),
    humidity: yup.number().required(),
    moisture: yup.number().required(),
  })
  .required();

const IotDashboard = () => {
  const [amount, setAmount] = useState("0");
  const [stats, setStats] = useState({
    temperature: "0",
    humidity: "0",
    moisture: "0",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    let { temperature, humidity, moisture } = data;
    temperature = temperature * 10000;
    humidity = humidity * 10000;
    moisture = moisture * 10000;

    updateStats(
      temperature.toString(),
      humidity.toString(),
      moisture.toString()
    );
  };
  const getAmount = async () => {
    const fAmount = await getEthInUsd();
    if (fAmount) {
      setAmount(fAmount / 100000000);
    }
  };

  const getStats = async () => {
    const fStats = await readStats();
    if (fStats) {
      setStats(fStats);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col lg={8}>
            <Container>
              <Row>
                <Col lg={4} style={{ padding: "20px" }}>
                  <Button variant="primary" onClick={() => Connect()}>
                    Connect To Wallet
                  </Button>
                </Col>
                <Col lg={4} style={{ padding: "20px" }}>
                  <Button variant="primary" onClick={() => getStats()}>
                    Read Stats
                  </Button>
                </Col>
                <Col lg={4} style={{ padding: "20px" }}>
                  <Button variant="success" onClick={() => getAmount()}>
                    Eth in USD
                  </Button>
                </Col>
              </Row>
            </Container>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <Container>
                <Row>
                  <Col lg={3}>
                    <label htmlFor="temperature">Temperature</label>
                  </Col>
                  <Col lg={9}>
                    <FormControl {...register("temperature")} />
                    <p>{errors.temperature?.message}</p>
                  </Col>
                </Row>
                <Row>
                  <Col lg={3}>
                    <label htmlFor="humidity">Humidity</label>
                  </Col>
                  <Col lg={9}>
                    <FormControl {...register("humidity")} />

                    <p>{errors.humidity?.message}</p>
                  </Col>
                </Row>
                <Row>
                  <Col lg={3}>
                    <label htmlFor="moisture">Moisture</label>
                  </Col>
                  <Col lg={9}>
                    <FormControl {...register("moisture")} />
                    <p>{errors.moisture?.message}</p>
                  </Col>
                </Row>
              </Container>
              <Row>
                <Col lg={12} style={{ padding: "20px" }}>
                  <Button type="submit" variant="primary">
                    Update Stats
                  </Button>
                </Col>
              </Row>
            </Form>
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
                    value={stats.temperature}
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={12} style={{ paddingBottom: "20px" }}>
                  <MyCard
                    icon={<WbSunnyIcon />}
                    subtitle="Humidity"
                    value={stats.humidity}
                  />
                </Col>
                <Col lg={6} md={12} style={{ paddingBottom: "20px" }}>
                  <MyCard
                    icon={<WavesIcon />}
                    subtitle="Moisture"
                    value={stats.moisture}
                  />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default IotDashboard;
