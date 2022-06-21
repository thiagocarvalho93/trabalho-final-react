import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ModalEditar = ({show, handleClose, idproduto}) => {

    const [categorias, setCategorias] = useState([])
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('')
    const [loading, setLoading] = useState(false)

    const getCategorias = async () => {
        setLoading(true)
        try{
          const { data } = await axios.get('https://teg-store-api.herokuapp.com/tegloja/categorias')
          setCategorias(data)
        } catch(e) {
          //lança uma excessão 
          console.log(e)
          setLoading(false)
        }
      }

      useEffect(() => {
        getCategorias();        
      },[])

      const handleChange = (e) => {
        setCategoriaSelecionada(e.target.value)
      }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Produto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className='container'>
                <div className="col form-outline mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input type="text" placeholder='Entre o nome do produto' className='form-control'/>
                </div>
                <div id="categoria" className="col form-outline mb-3">
                    <select className="form-select" onChange={handleChange}>
                    <label htmlFor="categoria" className="form-label">Categoria</label>
                        {categorias.map((categoria) => <option key={categoria.id} value={categoria.categoria}>{categoria.categoria}</option>)}
                    </select>
                </div>
            
                <div className='form-outline col mb-3'>
                    <label htmlFor="valor" className='form-label'>Valor unitário</label>
                    <input type="number" id="valor" className='form-control' placeholder='Entre o valor'/>
                </div>
                <div className='form-outline col mb-3'>
                    <label htmlFor="quantidade" className='form-label'>Quantidade em estoque</label>
                    <input type="number" id="quantidade" className='form-control' placeholder='Entre a quantidade'/>
                </div>
                <div className="col form-outline mb-3">
                    <label htmlFor="image" className="form-label">URL da imagem</label>
                    <input type="text" placeholder='Entre a URL da imagem' className='form-control'/>
                </div>
            </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancelar
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Aceitar
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalEditar