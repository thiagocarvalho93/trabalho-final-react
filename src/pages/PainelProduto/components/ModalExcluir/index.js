import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalExcluir = ({show, handleClose}) => {

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Excluir Produto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Tem certeza que deseja excluir o produto?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Confirmar
                </Button>
            </Modal.Footer>
      </Modal>
    )

}

export default ModalExcluir