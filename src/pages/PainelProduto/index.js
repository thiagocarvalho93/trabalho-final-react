import { useState, useEffect } from "react"
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ModalAdicionar from "./components/ModalAdicionar";
import ModalExcluir from "./components/ModalExcluir";
import { getAllProdutos } from '../../services/produtoService'
import ModalEditar from "./components/ModalEditar";

const PainelProduto = () => {

    const [produtos, setProdutos] = useState([])
    const [produtoSelecionado, setProdutoSelecionado] = useState(0)
    const [showAdicionar, setShowAdicionar] = useState(false);
    const [showExcluir, setShowExcluir] = useState(false);
    const [showEditar, setShowEditar] = useState(false);
      
    useEffect(() => {
        pegarProdutos()},[showExcluir, showEditar, showAdicionar])

        // Consumo da Api
        const pegarProdutos = async () => {
            const response = await getAllProdutos();
            setProdutos(response.data)
        }

    // Controles dos modais
    const handleCloseAdicionar = () => setShowAdicionar(false);
    const handleShowAdicionar = () => setShowAdicionar(true);
    const handleCloseExcluir = () => setShowExcluir(false);
    
    const handleShowExcluir = (idprod) => {
        setProdutoSelecionado(idprod);
        setShowExcluir(true);
    }    

    const handleShowEditar = (idprod) => {
        setProdutoSelecionado(idprod);
        setShowEditar(true);
    }  

    const handleCloseEditar = () => setShowEditar(false);

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
                    <tr key={produto.idProduto}>
                        <td >{produto.idProduto}</td>
                        <td>{produto.nomeProduto}</td>
                        <td>{produto.categoria.categoria}</td>
                        <td>R$ {produto.valorUnitario.toFixed(2)}</td>
                        <td>{produto.quantidadeEstoque}</td>
                        <td>{produto.dataAlteracao}</td>
                        <td>
                            <Button variant="outline-warning" onClick={() => handleShowEditar(produto.idProduto)} className="me-2">Editar</Button>
                            <Button variant="outline-danger" onClick={() => handleShowExcluir(produto.idProduto)}>Excluir</Button>
                        </td>
                    </tr>
                    )}
                </tbody>
                </Table>
                
                <ModalEditar idproduto={produtoSelecionado} handleClose={handleCloseEditar} show={showEditar} />
                <ModalExcluir idproduto={produtoSelecionado} handleClose={handleCloseExcluir} show={showExcluir}/>

            </form>
        </div>
    )
}

export default PainelProduto