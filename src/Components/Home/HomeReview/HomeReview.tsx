import "./HomeReview.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import profimage1 from "../../../assets/images/profileimage.jpg";
import profimage2 from "../../../assets/images/profileimage2.jpg";
import profimage3 from "../../../assets/images/profileimage3.jpg";
import { REVIEW } from "../../../shared/Constants/homereview";

function HomeReview() {
  return (
    <div>
      <h1 className="ReviewOuter">What Our Customers Say</h1>
      <Container>
        <Row className="ReviewInner">
          <Col>
            <p className="ReviewText">{REVIEW}</p>
            <Image src={profimage1} roundedCircle />
            <p className="ReviewName">Lisa Haris</p>
          </Col>
          <Col>
            <p className="ReviewText">{REVIEW}</p>

            <Image src={profimage2} roundedCircle />

            <p className="ReviewName">Marie Doe</p>
          </Col>
          <Col>
            <p className="ReviewText">{REVIEW}</p>
            <Image src={profimage3} roundedCircle />
            <p className="ReviewName">John Doe</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeReview;
