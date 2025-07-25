import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
function Wrongpage() {
  const navigate = useNavigate();

  return (
    <div style={{ margin: 150, textAlign: "center" }}>
      <h1>404 page</h1>
      <p>Click Here To Return Home</p>
      <Button
        variant="primary"
        size="lg"
        onClick={() => {
          navigate("/");
        }}
      >
        Return Home
      </Button>
    </div>
  );
}

export default Wrongpage;
