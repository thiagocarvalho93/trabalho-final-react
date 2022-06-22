import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { FaSearch } from 'react-icons/fa';

const PesquisaNome = (value)=>{
    const searchProdutos = async () => {
        const pesquisa = value.value
        try {
            // const { data } = await axios.get(`https://teg-store-api.herokuapp.com/tegloja/produtos/pesquisar?nome=${pesquisa}`)
            console.log(`https://teg-store-api.herokuapp.com/tegloja/produtos/pesquisar?nome=${pesquisa}`);
            // setProdutosFiltrados(data)
        } catch (e) {
            console.log(e);
        }
    }

    return(
        <Button className="btn" variant="primary" onClick={ searchProdutos}><FaSearch /></Button>
    )
}
export default PesquisaNome;