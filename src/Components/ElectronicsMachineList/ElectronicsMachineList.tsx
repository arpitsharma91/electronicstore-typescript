import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { machineData } from "../../shared/mockData/mockData";
import type { DataProperties } from "../../shared/Models/Types/types";
import "../Electronics/Electronics.css";
import Electroniclist from "../Electroniclist/Electroniclist";

function Washingmachine() {
  return (
    <React.Fragment>
      <div className="ElectronicsOuter">
        <h1 className="ElectronicsHeader">WashingMachines</h1>
        <Container fluid>
          <Row>
            {machineData.map((machine: DataProperties) => {
              return (
                <Electroniclist key={machine.key} electronicdata={machine} />
              );
            })}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Washingmachine;
