import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Shoppingcontext } from "../../shared/Context/UserContext";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import "./Dashboard.css";

function UserOrderDetails() {
  const user = Shoppingcontext();
  return (
    <div className="Cart">
      {user.orderData.Quantity > 0 ? (
        <div>
          <h1 className="p-5">Your Orders</h1>
          <Container fluid>
            <Row>
              <Col>
                <Card className="m-2">
                  <Card.Body>
                    <Card.Title>{user.orderData.Brand}</Card.Title>
                    <Card.Text>{user.orderData.Text}</Card.Text>
                    <Card.Text>Price - {user?.orderData.Price} /- </Card.Text>
                    <Card.Text>
                      Quantity - {user?.orderData.Quantity} /-{" "}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <div className="pt-5">
          <h1>You have not placed any orders yet.</h1>
        </div>
      )}
    </div>
  );
}

export default UserOrderDetails;
