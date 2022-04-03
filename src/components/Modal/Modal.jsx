import "./modal.css";
import { useNavigate } from "react-router-dom";
export const Modal = ({ value }) => {
  const navigate = useNavigate();
  const { isOpen, setIsOpen } = value;
  return (
    <div className="overlay">
      <div className="modal">
        <h3 className="modal__text">Do you want to Quit ?</h3>
        <div className="modal__btn">
          <button
            className="modal__btn--demo modal__btn--yes"
            onClick={() => navigate("/result/")}
          >
            Yes
          </button>
          <button
            className="modal__btn--demo modal__btn--no"
            onClick={() => setIsOpen(!isOpen)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};
