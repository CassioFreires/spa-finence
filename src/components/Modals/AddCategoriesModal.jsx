import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TransactionForm from '../forms/TransactionForm';

function AddCategoriesModal({handleShow, handleClose, show}) {
  

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
            Salvar Categoria
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCategoriesModal;