import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react';
import CardProduto from './components/CardProduto';
import Categorias from "./components/Categorias";
import Filtros from './components/Filtros';
import Pesquisa from './components/Pesquisa';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Produto = () => {

    const [firstTime , setFirstTime] = useState(true)
    const [precoMax, setPrecoMax] = useState(500)
    const [categoria, setCategoria] = useState("")
    const [nomeProduto, setNomeProduto] = useState("")
    const [produtos, setProdutos] = useState([])
    const [produtosFiltrados, setProdutosFiltrados] = useState([])

    const [loading, setLoading] = useState(false)

    const getProdutos = async () => {
        setLoading(true)
        try{
            const { data } = await axios.get('https://teg-store-api.herokuapp.com/tegloja/produtos')
            setProdutos(data)
            if(firstTime){
                setProdutosFiltrados(data)
                setFirstTime(false)
            }
        } catch(e) {
            //lança uma excessão 
            console.log(e)        
        }
        setLoading(false)
      }

      const filtraProdutos= () => {
        setProdutosFiltrados(produtos.filter((produto) => produto.valorUnitario < precoMax))
      }

    // Para funcionar na primeira vez
    useEffect(() => {
        getProdutos();
      },[])

      useEffect(() => {
        filtraProdutos();
      },[precoMax])

    const pegaPrecoMax = (preco) => {
        setPrecoMax(preco);
    }

    const pegaNomeProduto = (nome) => {
        setNomeProduto(nome);
    }

    const pegaCategoria = (opcao) => {
        setCategoria(opcao);
    }
    const pegaCategoriaId = (opcao) => {
        setCategoria(opcao);
    }

    return(
        <>
            <div className='ms-3 mt-3'>
                <Categorias pegaCategoria={pegaCategoria}/>
                <Link to="/painelproduto"> 
                    <Button variant="outline-primary" className="mb-3">Painel</Button>
                </Link>
            </div>
            <hr />
            <div className="m-3 row">
                <div className='container col-2 border border-dark rounded p-3 bg-dark text-white'>
                    <Pesquisa pegarNome={pegaNomeProduto}/>
                    <Filtros pegaPrecoMax={pegaPrecoMax}/>
                </div>
                <div className='container col-9 border border-dark rounded p-3 bg-dark'>
                    <div className="row g-3">
                        {produtosFiltrados.map((produto) => <CardProduto key={produto.idProduto} nome={produto.nomeProduto} precoProduto={produto.valorUnitario}/> )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Produto;