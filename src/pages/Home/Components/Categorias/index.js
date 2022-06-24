import { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import Card from "./Card";
import { getAllCategorias } from "../../../../services/categoriaService";

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCategorias = async () => {
    setLoading(true);
    const data = await getAllCategorias();
    setCategorias(data.data);
    setLoading(false);
  };

  // Para funcionar na primeira vez
  useEffect(() => {
    getCategorias();
  }, []);

  return (
    <>
      <div className="container mb-6 ">
        <div className="row">
          {categorias.map((categoria) => (
            <Card
              key={categoria.id}
              index={categoria.id}
              categoria={categoria.categoria}
            ></Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categorias;