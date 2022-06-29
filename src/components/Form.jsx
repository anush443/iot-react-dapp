import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, Row, Col, Button } from "react-bootstrap";
import { updateStats } from "./ContractMethods.js";
import { FormControl } from "react-bootstrap";

const MyForm = styled.form`
  margin-top: 25px;
`;

const schema = yup
  .object({
    temperature: yup.number().required(),
    humidity: yup.number().required(),
    moisture: yup.number().required(),
  })
  .required();

const Form = () => {
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
  return (
    <>
      <MyForm onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Row>
            <Col lg={3}>
              <label htmlFor="temperature">Temperature</label>
            </Col>
            <Col lg={6}>
              <FormControl {...register("temperature")} />
              <p>{errors.temperature?.message}</p>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
              <label htmlFor="humidity">Humidity</label>
            </Col>
            <Col lg={6}>
              <FormControl {...register("humidity")} />

              <p>{errors.humidity?.message}</p>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
              <label htmlFor="moisture">Moisture</label>
            </Col>
            <Col lg={6}>
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
      </MyForm>
    </>
  );
};

export default Form;
