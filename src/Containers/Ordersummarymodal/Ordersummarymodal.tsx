import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router";
import type { OrderModalSummaryProps } from "../../shared/Models/Interfaces/interface";
import "./Ordersummarymodal.css";
import { Shoppingcontext } from "../../shared/Context/UserContext";

const Ordersummarymodal: React.FC<OrderModalSummaryProps> = ({
  show,
  onHide,
  finaldetail,
  finalprice,
  quantity,
}) => {
  const user = Shoppingcontext();
  const navigate = useNavigate();
  const orderHandler = (): void => {
    user.orderdataHandler({
      Text: finaldetail.text,
      Brand: finaldetail.brand,
      Quantity: quantity,
      Price: finalprice,
    });
    navigate("/");
  };
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="ModalHeader"
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" className="ModalHeader">
          Your Order will be delivered soon, please check and confirm your final
          Order details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="m-3">{finaldetail.brand}</h4>
        <p className="m-3">{finaldetail.text}</p>
        <p className="m-3"> Price - {finalprice} /-</p>
      </Modal.Body>

      <div className="OrderSummaryButton">
        <Button variant="success" onClick={orderHandler}>
          Order
        </Button>
        <Button variant="danger" onClick={onHide}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default Ordersummarymodal;
