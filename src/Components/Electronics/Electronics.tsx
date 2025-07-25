import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import * as mockData from "../../shared/mockData/mockData";
import "./Electronics.css";
import Electroniclist from "../Electroniclist/Electroniclist";
import type { DataProperties } from "../../shared/Models/Types/types";
import type { slicedmachineDatatype } from "../../shared/Models/Interfaces/interface";
import * as BUTTONS from "../../shared/Constants/commonbutton";
import * as ITEMS from "../../shared/Constants/electronicitem";

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
        <h1 className="ElectronicsHeader">{ITEMS.AIR_CONDITIONERS}</h1>
        <Container fluid>
          <Row>
            {slicedacData.map((ac: DataProperties) => {
              return <Electroniclist key={ac.key} electronicdata={ac} />;
            })}
          </Row>
        </Container>
        <div className="ElectronicsButton">
          <Button variant="primary" size="lg" onClick={acbuttonhandler}>
            {BUTTONS.VIEW_ALL}
          </Button>
        </div>
        <hr />
        <h1 className="ElectronicsHeader">{ITEMS.TELEVISIONS}</h1>
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
            {BUTTONS.VIEW_ALL}
          </Button>
        </div>
        <hr />
        <h1 className="ElectronicsHeader">{ITEMS.WASHING_MACHINES}</h1>
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
            {BUTTONS.VIEW_ALL}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Electronics;
