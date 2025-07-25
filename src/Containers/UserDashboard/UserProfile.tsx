import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Shoppingcontext } from "../../shared/Context/UserContext";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import "./Dashboard.css";

function UserProfile() {
  const user = Shoppingcontext();
  return (
    <div className="Cart">
      <div>
        <h1 className="p-5">Your Details</h1>
        <Container fluid>
          <Row>
            <Col>
              <Card className="m-2">
                <Card.Body>
                  <Card.Title> Name - {user.userData.Name}</Card.Title>
                  <Card.Text>Email - {user.userData.Email}</Card.Text>
                  <Card.Text>Address - {user.userData.Address} </Card.Text>
                  <Card.Text>State - {user.userData.Region}</Card.Text>
                  <Card.Text>Zipcode - {user.userData.Zipcode}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default UserProfile;
