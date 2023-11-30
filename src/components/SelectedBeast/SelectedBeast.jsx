import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function SelectedBeast({ beast, setSelectedBeast }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(!!beast);
  }, [beast]);

  const handleClose = () => {
    setSelectedBeast(null);
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      {beast && (
        <>
          <Modal.Header closeButton>
            <Modal.Title>{beast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={beast.imageUrl} alt={beast.title} />
            <p>{beast.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
}

export default SelectedBeast;



