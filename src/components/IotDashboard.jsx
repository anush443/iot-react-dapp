import { Connect, readStats, getEthInUsd } from "./ContractMethods.js";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "./Form.jsx";
import Widgets from "./Widgets.jsx";
import { useState } from "react";

const IotDashboard = () => {
  const [amount, setAmount] = useState("0");
  const [stats, setStats] = useState({
    temperature: "0",
    humidity: "0",
    moisture: "0",
  });

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
            <Widgets
              amount={amount}
              temperature={stats.temperature}
              humidity={stats.humidity}
              moisture={stats.moisture}
            />
            <Form />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default IotDashboard;
