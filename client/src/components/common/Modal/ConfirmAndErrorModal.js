import Modal from "./Modal";
import Button from "../Button/Button";
import classes from "./ConfirmAndErrorModal.module.css";

const ConfirmModal = (props) => {
  return (
    <Modal>
      <div className={classes.confirmModal}>
        <h1>{props.title}</h1>
        <p>{props.message}</p>
        <div
          className={props.hideBtn ? classes.right : classes.buttonContainer}
        >
          {!props.hideBtn && (
            <Button
              className={`${classes["cancel-btn"]} ${classes.btn}`}
              onClick={props.onCancel}
            >
              Cancel
            </Button>
          )}

          <Button
            className={`${classes["confirm-btn"]} ${classes.btn}`}
            onClick={() => props.onConfirm()}
          >
            {props.btnText}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
