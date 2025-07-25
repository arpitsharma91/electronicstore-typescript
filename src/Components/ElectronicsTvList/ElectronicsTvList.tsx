import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { tvData } from "../../shared/mockData/mockData";
import type { DataProperties } from "../../shared/Models/Types/types";
import "../Electronics/Electronics.css";
import Electroniclist from "../Electroniclist/Electroniclist";

function Television() {
  return (
    <React.Fragment>
      <div className="ElectronicOuter">
        <h1 className="ElectronicsHeader">Televisions</h1>
        <Container fluid>
          <Row>
            {tvData.map((tv: DataProperties) => {
              return <Electroniclist key={tv.key} electronicdata={tv} />;
            })}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Television;
