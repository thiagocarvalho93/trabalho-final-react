import { useState, useEffect } from "react"
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ModalAdicionar from "./components/ModalAdicionar";
import ModalExcluir from "./components/ModalExcluir";

const PainelProduto = () => {

    const [nomeProduto, setNomeProduto] = useState("")
    const [produtos, setProdutos] = useState([])
    const [produtoSelecionado, setProdutoSelecionado] = useState('')
    const [loading, setLoading] = useState(false)
    const [modalAdicionar, setModalAdicionar] = useState(false);
    const [showAdicionar, setShowAdicionar] = useState(false);
    const [showExcluir, setShowExcluir] = useState(false);

    const getProdutos = async () => {
        setLoading(true)
        try{
            const { data } = await axios.get('https://teg-store-api.herokuapp.com/tegloja/produtos')
            setProdutos(data)
        } catch(e) {
            //lança uma excessão 
            console.log(e)        
        }
        setLoading(false)
      }
      
    useEffect(() => {
    getProdutos()},[])   

    // Controles dos modais
    const handleCloseAdicionar = () => setShowAdicionar(false);
    const handleShowAdicionar = () => setShowAdicionar(true);
    const handleCloseExcluir = () => setShowExcluir(false);
    const handleShowExcluir = () => setShowExcluir(true);

    // Controle do produto
    

    return (
        <div className="container">
            <form className="mt-4 shadow p-3 mb-5 bg-body rounded-3">
                <h3>Painel Produto</h3>
                <hr />
                <Button variant="outline-success" className="mb-3" onClick={handleShowAdicionar}>Adicionar</Button>
                <ModalAdicionar handleClose={handleCloseAdicionar} show={showAdicionar} />
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nome</th>
                        <th>Categoria</th>
                        <th>Valor</th>
                        <th>Quantidade</th>
                        <th>Data de alteração</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => 
                    <tr>
                        <td >{produto.idProduto}</td>
                        <td>{produto.nomeProduto}</td>
                        <td>{produto.categoria.categoria}</td>
                        <td>{produto.valorUnitario}</td>
                        <td>{produto.quantidadeEstoque}</td>
                        <td>{produto.dataAlteracao}</td>
                        <td>
                            <Button variant="outline-warning" className="me-2">Editar</Button>
                            <Button variant="outline-danger" onClick={handleShowExcluir}>Excluir</Button>
                        </td>
                    </tr>
                    )}
                </tbody>
                </Table>

                <ModalExcluir handleClose={handleCloseExcluir} show={showExcluir}/>

            </form>
        </div>
    )
}

export default PainelProduto