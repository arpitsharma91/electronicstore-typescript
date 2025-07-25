import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./SaleSection.css";
import Electroniclist from "../../Electroniclist/Electroniclist";
import { acData, machineData, tvData } from "../../../shared/mockData/mockData";
import type { DataProperties } from "../../../shared/Models/Types/types";

function Sale() {
  const saleacData: DataProperties[] = acData.slice(0, 1);
  const salemachineData: DataProperties[] = machineData.slice(0, 1);
  const saletvData: DataProperties[] = tvData.slice(0, 1);
  const mergedData: DataProperties[] = [
    ...saleacData,
    ...salemachineData,
    ...saletvData,
  ];

  return (
    <div className="AllItemsOuter">
      {" "}
      <h1 className="AllItemsHeader">WELCOME TO SALE !!!</h1>
      <Container>
        <Row>
          {mergedData.map((sale: DataProperties) => {
            return <Electroniclist key={sale.key} electronicdata={sale} />;
          })}
        </Row>
      </Container>
      <hr />
    </div>
  );
}

export default Sale;
