import React, { useState } from "react";
function Modal() {
  const [modalIsOpenm, setModalIsOpen] = useState(false);
  return (
    <div className="Modal">
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalIsOpenm}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(true)}
        style={{}}
      >
        <h2>Modal title</h2>
        <p>Modal Body</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
}
export default Modal;
