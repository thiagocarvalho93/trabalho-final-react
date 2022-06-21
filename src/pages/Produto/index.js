import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react';
import CardProduto from './components/CardProduto';
import Categorias from "./components/Categorias";
import Filtros from './components/Filtros';
import Pesquisa from './components/Pesquisa';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';

const Produto = () => {

    const location = useLocation()
    const [precoMax, setPrecoMax] = useState(5000)
    const [nomeProduto, setNomeProduto] = useState("")
    const [produtos, setProdutos] = useState([])
    const [produtosFiltrados, setProdutosFiltrados] = useState([])
    const [option, setOption] = useState(location.state)
    const [loading, setLoading] = useState(false)

    console.log(location.state);
    useEffect(() => {
        const getProdutos = async () => {
            setLoading(true)
            try {
                const { data } = await axios.get('https://teg-store-api.herokuapp.com/tegloja/produtos')
                setProdutos(data)
                if (!location.state) {
                    setProdutosFiltrados(data)
                }
            } catch (e) {
                //lança uma excessão 
                console.log(e)
            }
            setLoading(false)
        }
        getProdutos()
    }, [])

    useEffect(() => {
        // if (!location.state) return parar de dar erro na api

        const searchCategoria = async () => {
            try {
                const { data } = await axios.get(`https://teg-store-api.herokuapp.com/tegloja/categorias/${option}/produtos`)
                console.log(data);
                setProdutosFiltrados(data)
            } catch (e) {
                console.log(e);
            }
        }
        searchCategoria();
    }, [option])

    //thiago precisa ver
    // const filtraProdutos = () => {
    //     setProdutosFiltrados(produtos.filter((produto) => produto.valorUnitario < precoMax))
    // }

    const pegaPrecoMax = (preco) => {
        setPrecoMax(preco);
    }

    const pegaNomeProduto = (nome) => {
        setNomeProduto(nome);
    }

    return (
        <>
            <div className='ms-3 mt-3'>
                <Categorias setOption={setOption} option={option} />
                <Link to="/painelproduto">
                    <Button variant="outline-primary" className="mb-3">Painel</Button>
                </Link>
            </div>
            <hr />
            <div className="m-3 row">
                <div className='container col-2 border border-dark rounded p-3 bg-dark text-white'>
                    <Pesquisa pegarNome={pegaNomeProduto} />
                    <Filtros pegaPrecoMax={pegaPrecoMax} />
                </div>
                <div className='container col-9 border border-dark rounded p-3 bg-dark'>
                    <div className="row g-3">
                        {produtosFiltrados.map((produto) => <CardProduto key={produto.idProduto} nome={produto.nomeProduto} precoProduto={produto.valorUnitario} imagemProduto={produto.urlFoto} />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Produto;