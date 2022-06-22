import { useState } from "react"
import Button from 'react-bootstrap/Button';
import { FaSearch } from 'react-icons/fa';
import { getProdutoByName } from '../../../../services/produtoService'

const Pesquisa = ({pegarNome}) => {
    const [produto, setProduto] = useState("")

    // Consumo da API
    const handlePesquisa = async () => {
        const response = await getProdutoByName(produto);
        // navigate("/produto", { state: categoria.index })
        console.log(response.data.content);
    }

    return(
        <div>
            <input className="rounded m-0 mb-3" type="text" placeholder="Buscar produto" value={produto} onChange={(e) => setProduto(e.target.value)}/>
            <Button className="mb-3 p-2" variant="primary" onClick={handlePesquisa}>Pesquisar<FaSearch /></Button>
        </div>
    )
}

export default Pesquisa