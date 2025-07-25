import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import * as mockData from "../../shared/mockData/mockData";
import "./Electronics.css";
import Electroniclist from "../Electroniclist/Electroniclist";
import type { DataProperties } from "../../shared/Models/Types/types";
import type { slicedmachineDatatype } from "../../shared/Models/Interfaces/interface";
//import {navigate}  from "../../shared/Constants/constants";

const Electronics: React.FC = () => {
  const navigate = useNavigate();
  const machinebuttonhandler = (): void => {
    navigate("/washingmachines");
  };

  function acbuttonhandler(): void {
    navigate("/airconditioners");
  }

  const slicedacData: DataProperties[] = mockData.acData.slice(0, 3);
  const slicedtvData: Array<DataProperties> = mockData.tvData.slice(0, 3);
  const slicedmachineData: slicedmachineDatatype[] = mockData.machineData.slice(
    0,
    3
  );

  return (
    <div>
      <div className="ElectronicsOuter">
        <h1 className="ElectronicsHeader">AirConditioners</h1>
        <Container fluid>
          <Row>
            {slicedacData.map((ac: DataProperties) => {
              return <Electroniclist key={ac.key} electronicdata={ac} />;
            })}
          </Row>
        </Container>
        <div className="ElectronicsButton">
          <Button variant="primary" size="lg" onClick={acbuttonhandler}>
            VIEW All
          </Button>
        </div>
        <hr />
        <h1 className="ElectronicsHeader">Televisions</h1>
        <Container fluid>
          <Row>
            {slicedtvData.map((tv: DataProperties) => {
              return <Electroniclist key={tv.key} electronicdata={tv} />;
            })}
          </Row>
        </Container>
        <div className="ElectronicsButton">
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              navigate("/televisions");
            }}
          >
            VIEW All
          </Button>
        </div>
        <hr />
        <h1 className="ElectronicsHeader">Washing Machines</h1>
        <Container fluid>
          <Row>
            {slicedmachineData.map((machine: DataProperties) => {
              return (
                <Electroniclist key={machine.key} electronicdata={machine} />
              );
            })}
          </Row>
        </Container>
        <div className="ElectronicsButton">
          <Button variant="primary" size="lg" onClick={machinebuttonhandler}>
            VIEW All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Electronics;
