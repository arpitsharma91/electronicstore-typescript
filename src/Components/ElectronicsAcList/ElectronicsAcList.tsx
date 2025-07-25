import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../Electronics/Electronics.css";
import { acData } from "../../shared/mockData/mockData";
import Electroniclist from "../Electroniclist/Electroniclist";
import type { DataProperties } from "../../shared/Models/Types/types";
import * as ITEMS from "../../shared/Constants/electronicitem";

function Airconditioners() {
  return (
    <div>
      <div className="ElectronicsOuter">
        <h1 className="ElectronicsHeader">{ITEMS.AIR_CONDITIONERS}</h1>
        <Container fluid>
          <Row>
            {acData.map((ac: DataProperties) => {
              return <Electroniclist key={ac.key} electronicdata={ac} />;
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Airconditioners;
