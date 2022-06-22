import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { deleteProduto } from '../../../../services/produtoService'

const ModalExcluir = ({show, handleClose, idproduto}) => {
    // Api
    const handleExcluir = async () => {
        const res = await deleteProduto(idproduto)
        handleClose()
        console.log(res)
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Excluir Produto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Tem certeza que deseja excluir o produto {idproduto}?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={() => handleExcluir()}>
                    Confirmar
                </Button>
            </Modal.Footer>
      </Modal>
    )
}

export default ModalExcluir