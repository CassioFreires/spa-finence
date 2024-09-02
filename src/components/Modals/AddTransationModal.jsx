import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CardForm from '../forms/CardForm';
import TransactionForm from '../forms/TransactionForm';

function AddTransationModal({handleShow, handleClose, show}) {
  

  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
          <TransactionForm/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salvar transação
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddTransationModal;