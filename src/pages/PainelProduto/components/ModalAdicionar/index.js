import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ModalAdicionar = ({show, handleClose}) => {

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
        <Modal show={show} onHide={handleClose} fullscreen={true}>
            <Modal.Header closeButton>
                <Modal.Title>Adicionar Produto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className='row mb-3'>
                <div className="col-6 form-outline">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input type="text" placeholder='Entre o nome do produto' className='form-control'/>
                </div>
                <div id="categoria" className="col-2 form-outline">
                    <label htmlFor="categoria" className="form-label">Categoria</label>
                    <select className="form-select" onChange={handleChange}>
                        {categorias.map((categoria) => <option key={categoria.id} value={categoria.categoria}>{categoria.categoria}</option>)}
                    </select>
                </div>
            </div>
            <div className='row'>
                <div className='form-outline col-6'>
                    <label htmlFor="valor" className='form-label'>Valor unitário</label>
                    <input type="number" id="valor" className='form-control' placeholder='Entre o valor'/>
                </div>
                <div className='form-outline col-2'>
                    <label htmlFor="quantidade" className='form-label'>Quantidade em estoque</label>
                    <input type="number" id="quantidade" className='form-control' placeholder='Entre a quantidade'/>
                </div>
            </div>

            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancelar
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Adicionar
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalAdicionar