import Button from "react-bootstrap/Button";
import "./HomeOuter.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router";
//import {navigate}  from "../../shared/Constants/constants";

function HomeOuter() {
  const navigate = useNavigate();
  const exploreHandler = (): void => {
    navigate("allitems");
  };
  return (
    <div className="Homeouter">
      <div className="Homeoverlay">
        <Container fluid>
          <Row>
            <Col>
              <h2 className="mb-5">WELCOME TO SHOPPINGSTORE</h2>
              <p className="mb-5">LETS BRING ESSENTIALS TO YOUR HOME</p>
              <Button
                variant="outline-secondary"
                size="lg"
                className="HomeExploreButton"
                onClick={exploreHandler}
              >
                EXPLORE <i className="bi bi-arrow-right-circle"> </i>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HomeOuter;
