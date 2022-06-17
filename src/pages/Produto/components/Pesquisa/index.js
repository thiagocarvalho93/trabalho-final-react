import { useState } from "react"

const Pesquisa = ({pegarNome}) => {
    const [nomeProduto, setNomeProduto] = useState("")

    return(
        <div>
            <input type="text" placeholder="Buscar produto" value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)}/>
            <button onClick={pegarNome(nomeProduto)}>Pesquisar</button>
        </div>
    )
}

export default Pesquisa