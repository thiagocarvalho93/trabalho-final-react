import { useState } from "react"
import Button from 'react-bootstrap/Button';
import { FaSearch } from 'react-icons/fa';

const Pesquisa = ({pegarNome}) => {
    const [produto, setProduto] = useState("")

    return(
        <div>
            <input className="rounded m-0 mb-3" type="text" placeholder="Buscar produto" value={produto} onChange={(e) => setProduto(e.target.value)}/>
            <Button className="mb-3 p-2" variant="primary" onClick={() => pegarNome(produto)}>Pesquisar<FaSearch /></Button>
        </div>
    )
}

export default Pesquisa