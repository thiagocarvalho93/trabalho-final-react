import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react';
import CardProduto from './components/CardProduto';
import Categorias from "./components/Categorias";
import Filtros from './components/Filtros';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';

const Produto = () => {

    const location = useLocation()
    const [precoMax, setPrecoMax] = useState(10000)
    const [nomeProduto, setNomeProduto] = useState("")
    const [produtos, setProdutos] = useState([])
    const [produtosFiltrados, setProdutosFiltrados] = useState([])
    const [option, setOption] = useState(location.state)
    const [loading, setLoading] = useState(false)

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
       if (!location.state) return
        const searchCategoria = async () => {
            try {
                const { data } = await axios.get(`https://teg-store-api.herokuapp.com/tegloja/categorias/${option}/produtos`)
                setProdutos(data)
                setProdutosFiltrados(data)
            } catch (e) {
                console.log(e);
            }
        }
        searchCategoria();
    }, [option])

    useEffect(() => {
        filtraProdutos();
    }, [precoMax])

    const filtraProdutos = () => {
        setProdutosFiltrados(produtos.filter((produto) => produto.valorUnitario < precoMax))
    }

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
            <div className="m-3 mb-5 row">
                <div className='container text-center col-12 col-md-2 mb-3 shadow rounded p-3 bg-light text-dark h-100'>
                    {/* <Pesquisa pegarNome={pegaNomeProduto} /> */}
                    <Filtros pegaPrecoMax={pegaPrecoMax} />
                </div>
                <div className='container col-12 col-md-9 shadow rounded p-3 bg-light text-dark'>
                    <div className="row g-4">
                        {produtosFiltrados.map((produto) => <CardProduto key={produto.idProduto} nome={produto.nomeProduto} precoProduto={produto.valorUnitario} imagemProduto={produto.urlFoto} />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Produto;