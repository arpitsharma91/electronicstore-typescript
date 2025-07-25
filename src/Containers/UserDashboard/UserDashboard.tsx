import React from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import "./Dashboard.css";
import Cart from "./Cart";
import UserOrderDetails from "./UserOrderDetails";
import UserProfile from "./UserProfile";
function UserDashboard() {
  return (
    <React.Fragment>
      <div className="UserDashboardOuter">
        <h3 className="UserDashboardInner">Your Dashboard</h3>
      </div>

      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#cart">
        <Row>
          <Col sm={3}>
            <ListGroup variant="flush">
              <ListGroup.Item action href="#cart">
                My Cart
              </ListGroup.Item>
              <ListGroup.Item action href="#orders">
                My Orders
              </ListGroup.Item>
              <ListGroup.Item action href="#profile">
                Your Details
              </ListGroup.Item>
              <ListGroup.Item action href="#updateprofile">
                Update Profile details
              </ListGroup.Item>
              <ListGroup.Item action href="#support">
                Raise a query/support
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="#cart">
                <Cart />
              </Tab.Pane>
              <Tab.Pane eventKey="#orders">
                <UserOrderDetails />
              </Tab.Pane>
              <Tab.Pane eventKey="#profile">
                <UserProfile />
              </Tab.Pane>
              <Tab.Pane eventKey="#updateprofile">Tab pane content 4</Tab.Pane>
              <Tab.Pane eventKey="#support">Tab pane content 5</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </React.Fragment>
  );
}

export default UserDashboard;
