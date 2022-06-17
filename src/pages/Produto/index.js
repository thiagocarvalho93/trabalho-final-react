import 'bootstrap/dist/css/bootstrap.min.css' 
import { useState } from 'react';
import Categorias from "./components/Categorias";
import Filtros from './components/Filtros';
import Pesquisa from './components/Pesquisa';

const Produto = () => {

    const [precoMax, setPrecoMax] = useState(2000)
    const [categoria, setCategoria] = useState('')
    const [nomeProduto, setNomeProduto] = useState('')

    const pegaPrecoMax = (preco) => {
        setPrecoMax(preco);
    }

    const pegaNomeProduto = (nome) => {
        setNomeProduto(nome)
    }

    const pegaCategoria = (opcao) => {
        setCategoria(opcao)
    }

    return(
        <>
            <Pesquisa pegarNome={pegaNomeProduto}/>
            <Categorias pegaCategoria={pegaCategoria}/>
            <hr />
            <Filtros pegaPrecoMax={pegaPrecoMax}/>
            <p>{precoMax}</p>

        </>

    )
}

export default Produto;