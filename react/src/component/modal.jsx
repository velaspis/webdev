import React from "react";
import "./Modal.css";
function Modal({ closeModal, activeState }) {
  console.log(activeState);
  return (
    <div
      className="modalBackground"
      onClick={(e) => {
        if (!e.target.closest(".modalContainer")) {
          closeModal(false);
        }
      }}
    >
      <div className="modalContainer">
        <button
          id="cancelBtn"
          onClick={() => {
            closeModal(false);
          }}
        >
          X
        </button>
        <div className="Title">
          <h1>{activeState?.value1}</h1>
        </div>
        <div className="body">
          <p>{activeState?.value}</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            cancel
          </button>
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
