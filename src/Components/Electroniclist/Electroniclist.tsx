import { useState } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router";
import Ordersummarymodal from "../../Containers/Ordersummarymodal/Ordersummarymodal";
import "./ElectronicList.css";
import type { ElectroniclistChildProps } from "../../shared/Models/Interfaces/interface";

const Electroniclist: React.FC<ElectroniclistChildProps> = ({
  electronicdata,
}) => {
  const [modalShow, setModalShow] = useState<boolean>(false);

  const modalopenHandler = (): void => {
    setModalShow(true);
  };
  const modalcloseHandler = (): void => {
    setModalShow(false);
  };

  const a: number[] = [];
  for (let j: number = 1; j <= electronicdata.star; j++) {
    a.push(j);
  }
  const starcontent = a.map((item: number) => {
    return (
      <i
        key={item}
        className="bi bi-star-fill"
        style={{ color: "yellow", paddingLeft: 5 }}
      ></i>
    );
  });

  return (
    <Col>
      <Card className="ElecItemsWrapper">
        <Card.Img variant="top" src={electronicdata.image} />

        <Card.Body>
          <Card.Title>{electronicdata.brand}</Card.Title>
          <Card.Text>{electronicdata.text}</Card.Text>
          <Card.Text style={{ textAlign: "center" }}>{starcontent}</Card.Text>
          <Card.Text>Price - {electronicdata.price} /- </Card.Text>
          <div className="ElecItemsButton">
            <Button variant="primary" onClick={modalopenHandler}>
              Buy Now
            </Button>

            <Link to={`/products/${electronicdata.key}`}>
              {" "}
              <Button variant="primary">Details</Button>
            </Link>
          </div>
          <Ordersummarymodal
            show={modalShow}
            onHide={modalcloseHandler}
            finaldetail={electronicdata}
            finalprice={electronicdata.price}
            quantity={1}
          />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Electroniclist;
