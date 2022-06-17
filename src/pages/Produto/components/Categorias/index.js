import { useState, useEffect } from "react";
import './index.css'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

const Categorias = ({pegaCategoria}) => {
    
    const [categorias, setCategorias] = useState([])
    const [loading, setLoading] = useState(false)
    
    const getCategorias = async () => {
        setLoading(true)
        try{
          const { data } = await axios.get('https://teg-store-api.herokuapp.com/tegloja/categorias')
          setCategorias(data)
        } catch(e) {
          //lança uma excessão 
          console.log(e)
          setLoading(false)
        }
      }

    // Para funcionar na primeira vez
    useEffect(() => {
      getCategorias();
    },[])

    const handleChange = (e) => {
      pegaCategoria(e.target.value)
    }

    return(
        <div>
          Categoria
          <select onChange={handleChange}>
          {categorias.map((categoria) => <option key={categoria.id} value={categoria.categoria}>{categoria.categoria}</option>)}
          </select>
        </div>
    )

}

export default Categorias;