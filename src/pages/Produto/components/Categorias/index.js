import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAllCategorias } from "../../../../services/categoriaService";

const Categorias = ({ setOption, option }) => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  const getCategorias = async () => {
    setLoading(true);
    const { data } = await getAllCategorias();
    setLoading(false);
    setCategorias(data);
  };

  // Para funcionar na primeira vez
  useEffect(() => {
    getCategorias();
    setOption(location.state);
  }, []);

  return (
    <div className="col-2 mb-2">
      <select
        className="form-select"
        value={option}
        onChange={(e) => setOption(e.target.value)}
      >
        {/* <option key={0} value={""}>Todos</option> */}
        {categorias.map((categoria) => (
          <option key={categoria.id} value={categoria.id}>
            {categoria.categoria}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categorias;
