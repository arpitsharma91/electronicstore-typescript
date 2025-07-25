import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Shoppingcontext } from "../../shared/Context/UserContext";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Ordersummarymodal from "../Ordersummarymodal/Ordersummarymodal";
import "./Dashboard.css";
import * as BUTTONS from "../../shared/Constants/commonbutton";

function Cart() {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const user = Shoppingcontext();

  return (
    <div className="Cart">
      {user.cartItem.Quantity > 0 ? (
        <div>
          <h1 className="p-5">Your Cart</h1>
          <Container fluid>
            <Row>
              <Col>
                <Card className="m-2">
                  <Card.Body>
                    <Card.Title>{user.cartItem.Product.brand}</Card.Title>
                    <Card.Text>{user.cartItem.Product.text}</Card.Text>
                    <Card.Text>
                      Price - {user?.cartItem.FinalPrice} /-{" "}
                    </Card.Text>
                    <Card.Text>
                      Quantity - {user?.cartItem.Quantity} /-{" "}
                    </Card.Text>
                    <Button
                      variant="success"
                      onClick={() => setModalShow(true)}
                      className="m-2"
                    >
                      {BUTTONS.BUY_NOW}
                    </Button>
                    <Button
                      variant="danger"
                      className="m-2"
                      onClick={user.cartremoveHandler}
                    >
                      Remove
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <Ordersummarymodal
            show={modalShow}
            onHide={() => setModalShow(false)}
            finaldetail={user.cartItem.Product}
            finalprice={user.cartItem.FinalPrice}
            quantity={user.cartItem.Quantity}
          />
        </div>
      ) : (
        <div className="pt-5">
          <h1>Your cart is empty.</h1>
        </div>
      )}
    </div>
  );
}

export default Cart;
