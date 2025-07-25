import Button from "react-bootstrap/Button";
import React from "react";
import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Ordersummarymodal from "../Ordersummarymodal/Ordersummarymodal";
import { useParams } from "react-router-dom";
import { acData, machineData, tvData } from "../../shared/mockData/mockData";
import type { DataProperties } from "../../shared/Models/Types/types";
import "./ProductDetail.css";
import { Shoppingcontext } from "../../shared/Context/UserContext";

function Productdetail() {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const user = Shoppingcontext();
  const { productId } = useParams();
  const allData: DataProperties[] = [...acData, ...machineData, ...tvData];
  // allData = [...acData, ...machineData, ...tvData];
  const thisProduct: any = allData.find((product) => product.key === productId);
  const price: number = thisProduct.price;
  const finalprice: number = price * quantity;

  const quantityDecrementHandler = (): void => {
    if (quantity === 1) {
      return;
    }
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const quantityIncrementHandler = (): void => {
    setQuantity(quantity + 1);
  };

  const addtocartHandler = (): void => {
    user.cartdataHandler({
      FinalPrice: finalprice,
      Quantity: quantity,
      Product: thisProduct,
    });
  };

  return (
    <React.Fragment>
      <div className="ProductDetailOuter">
        <Card className="ProductDetailInner">
          <Card.Img
            variant="top"
            src={thisProduct.image}
            className="ProductDetailImage"
          />
          <Card.Body>
            <Card.Title>{thisProduct.brand}</Card.Title>
            <Card.Text>{thisProduct.text}</Card.Text>
            <ListGroup>
              <ListGroup.Item>
                <li>Bought by 20k+ Customers</li>
              </ListGroup.Item>
              <ListGroup.Item>
                <li>Energy-saving</li>
              </ListGroup.Item>
              <ListGroup.Item>
                <li>20% off on next purchase</li>
              </ListGroup.Item>
              <ListGroup.Item>
                <li>Home service visits</li>
              </ListGroup.Item>
              <ListGroup.Item>
                <li>12-months warranty</li>
              </ListGroup.Item>
            </ListGroup>
            <ButtonToolbar
              aria-label="Toolbar with button groups"
              className="ProductDetailToolbar"
            >
              <ButtonGroup style={{ margin: "auto" }}>
                <Button onClick={quantityDecrementHandler}>-</Button>
                <span className="ProductDetailQuantity">{quantity}</span>

                <Button onClick={quantityIncrementHandler}>+</Button>
              </ButtonGroup>
            </ButtonToolbar>
            <Card.Title className="ProductDetailPrice mt-2">
              Price - {finalprice} /-
            </Card.Title>
            <div className="ProductDetailBottom">
              <Button variant="primary" onClick={() => setModalShow(true)}>
                Buy Now
              </Button>

              <Button variant="primary" onClick={addtocartHandler}>
                Add To Cart
              </Button>
            </div>
            <Ordersummarymodal
              show={modalShow}
              onHide={() => setModalShow(false)}
              finaldetail={thisProduct}
              finalprice={finalprice}
              quantity={quantity}
            />
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default Productdetail;
