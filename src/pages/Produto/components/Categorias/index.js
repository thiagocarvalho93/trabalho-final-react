import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import './index.css'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

const Categorias = ({ setOption, option }) => {

  const [categorias, setCategorias] = useState([])
  const [loading, setLoading] = useState(false)

  const location = useLocation();

  const getCategorias = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get('https://teg-store-api.herokuapp.com/tegloja/categorias')
      setCategorias(data)
    } catch (e) {
      console.log(e)
      setLoading(false)
    }
  }

  // Para funcionar na primeira vez
  useEffect(() => {
    getCategorias();
    setOption(location.state);
  }, [])

  return (
    <div className="col-2 mb-2">
      <select className="form-select" value={option} onChange={e => setOption(e.target.value)}>
        {/* <option key={0} value={""}>Todos</option> */}
        {categorias.map((categoria) => <option key={categoria.id} value={categoria.id}>{categoria.categoria}</option>)}
      </select>
    </div>
  )

}

export default Categorias;