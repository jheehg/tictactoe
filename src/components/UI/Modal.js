import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal";
import { gameActions } from "../../store/game";
import { ModalContainer, DialogBox, Backdrop, Button } from "./ModalStyles";
import ReactDOM from "react-dom";

const Modal = (props) => {
  const dispatch = useDispatch();
  const resultMsg = useSelector((state) => state.modal.resultMsg);
  const removeModalHandler = () => {
    dispatch(modalActions.removeModal());
  };
  const resetGame = () => {
    dispatch(gameActions.reset());
  };

  const ModalOverlay = (props) => {
    return (
      <ModalContainer>
        <DialogBox>
          <p>RESULT</p>
          <p>{resultMsg}</p>
          <Button
            onClick={(e) => {
              e.preventDefault();
              removeModalHandler();
              resetGame();
            }}
          >
            RESET
          </Button>
        </DialogBox>
      </ModalContainer>
    );
  };
  const ModalBackdrop = () => {
    return (
      <Backdrop
        onClick={() => {
          removeModalHandler();
          resetGame();
        }}
      />
    );
  };
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("overlay-root")
      )}
      {ReactDOM.createPortal(
        <ModalBackdrop />,
        document.getElementById("backdrop-root")
      )}
    </>
  );
};

export default Modal;
