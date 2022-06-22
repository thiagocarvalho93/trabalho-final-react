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

  return (
    <>
      <div className="container mb-6 ">
        <div className="row">
          {categorias.map((categoria) =>
            <Card key={categoria.id} index={categoria.id} categoria={categoria.categoria}></Card>)}
        </div>
      </div>
    </>
  )

}

export default Categorias;