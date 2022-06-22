import { useState } from "react"
import Button from 'react-bootstrap/Button';
import { FaDollarSign, FaFilter } from "react-icons/fa";

const Filtros = ({pegaPrecoMax, maiorPreco}) => {

    const [preco, setPreco] = useState(500)

    return(
        <div className="container">
            <h4 className="mb-3"><FaFilter />Filtros</h4>
            <div>
                <p className="mb-0"><FaDollarSign />Preço máximo</p>
                <input type="range" min="0" max="10000" value={preco} onChange={(e) => setPreco(e.target.value)}/>
            </div>
            <div>
                <p>R$ {preco}</p>
                <Button variant="primary" onClick={() => pegaPrecoMax(preco)}>Aplicar</Button>
            </div>
        </div>
    )
}

export default Filtros