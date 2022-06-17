import { useState } from "react"

const Filtros = ({pegaPrecoMax}) => {

    const [preco, setPreco] = useState(500)

    return(
        <div>
            <h5>Filtros</h5>
            <div>
                <p>Preço máximo</p>
                <input type="range" min="0" max="500" value={preco} onChange={(e) => setPreco(e.target.value)}/>
            </div>
            <div>
                <p>R$ {preco},00</p>
                <button onClick={() => pegaPrecoMax(preco)}>Ok</button>
            </div>
        </div>
    )

}

export default Filtros