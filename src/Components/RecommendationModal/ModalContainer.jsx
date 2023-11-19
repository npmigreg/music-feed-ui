import React from "react";
import ModalHeader from "./ModalHeader";
import ModalForm from "./ModalForm";
import ModalActions from "./ModalActions";

const ModalContainer = ({ children }) => {
  return (
    <React.Fragment>
      {children}
      <dialog id="recommendation_modal" className="modal modal-middle">
        <div className="modal-box max-w-2xl">
          <ModalHeader />
          <ModalForm />
          <ModalActions />
        </div>
      </dialog>
    </React.Fragment>
  );
};

export default ModalContainer;
