import { useState, useEffect } from "react";
import './index.css'
import axios from 'axios';
import Card from "./Card";


const Categorias = () => {

  const [categorias, setCategorias] = useState([])
  const [atualizar, setAtualizar] = useState(false)
  const [loading, setLoading] = useState(false)

  const getCategorias = async () => {
    setLoading(true)

    try {
      const { data } = await axios.get('https://teg-store-api.herokuapp.com/tegloja/categorias')
      setCategorias(data)
      console.log(data);
    } catch (e) {
      //lança uma excessão 
      console.log(e)
      setLoading(false)
    }
  }

  // Para funcionar na primeira vez
  useEffect(() => {
    getCategorias();
  }, [])
  // {categorias.map((categoria) => <li key={categoria.id}>{categoria.categoria}</li>)}

  return (
    <>
      <div className="container mb-5">
        <div className="row justify-content-md-center g-3">
          {categorias.map((categoria) =>
            <Card key={categoria.id} index={categoria.id} categoria={categoria.categoria}></Card>)}
        </div>
      </div>
    </>
  )

}

export default Categorias;