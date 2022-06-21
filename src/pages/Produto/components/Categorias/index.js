import { useState, useEffect} from "react";
import { useLocation } from "react-router-dom"
import './index.css'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

const Categorias = ({pegaCategoria, pegaCategoriaId}) => {
    
    const [categorias, setCategorias] = useState([])
    const [loading, setLoading] = useState(false)
    const [localizacao,setLocalizacao]= useState(false)
    const [option,setOption]= useState()
    

  const location = useLocation();

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
      // if (location.state ===null){
        console.log(option)
      // } else
      setOption(location.state);
      // console.log(location.state + ' farei uma funcão')
      
    },[])

    const handleChange = (e) => {
      pegaCategoria(e.target.getAttribute("idcategoria"))
    }

    return(
        <div className="col-2 mb-2">
        <select className="form-select" onChange={handleChange}>
          {categorias.map((categoria) => <option key={categoria.id} selected={categoria.id===option} idcategoria={categoria.id} value={categoria.categoria}>{categoria.categoria}</option>)}
          </select>
        </div>
    )

}

export default Categorias;