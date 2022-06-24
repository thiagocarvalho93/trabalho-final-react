import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { putProduto, getProduto } from "../../../../services/produtoService";
import { getAllCategorias } from "../../../../services/categoriaService";

const ModalEditar = ({ show, handleClose, idproduto }) => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(false); // A implementar
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);
  const [nomeProduto, setNomeProduto] = useState("");
  const [valorUnitario, setValorUnitario] = useState(0);
  const [estoque, setEstoque] = useState(0);
  const [urlImagem, setUrlImagem] = useState("");

  // Consumo da API
  const getCategorias = async () => {
    setLoading(true);
    const data = await getAllCategorias();
    setCategorias(data.data);
    setLoading(false);
  };

  // A implementar
  const dadosProduto = async () => {
    const res = await getProduto(idproduto);
    setNomeProduto(res.data.nomeProduto);
    setValorUnitario(res.data.valorUnitario);
    setEstoque(res.data.quantidadeEstoque);
  };

  useEffect(() => {
    getCategorias();
  }, []);

  const handleChange = (e) => {
    setCategoriaSelecionada(e.target.value);
  };

  const handleEditar = async () => {
    const response = await putProduto(
      idproduto,
      categoriaSelecionada,
      nomeProduto,
      estoque,
      valorUnitario
    );
    console.log(response)
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Produto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="col form-outline mb-3">
            <label htmlFor="nome" className="form-label">
              Nome
            </label>
            <input
              type="text"
              value={nomeProduto}
              onChange={(e) => setNomeProduto(e.target.value)}
              placeholder="Entre o nome do produto"
              className="form-control"
            />
          </div>
          <div id="categoria" className="col form-outline mb-3">
            <label htmlFor="categoria" className="form-label">
              Categoria
            </label>
            <select
              className="form-select"
              value={categoriaSelecionada}
              onChange={handleChange}
            >
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.categoria}
                </option>
              ))}
            </select>
          </div>
          <div className="form-outline col mb-3">
            <label htmlFor="valor" className="form-label">
              Valor unitário
            </label>
            <input
              type="number"
              id="valor"
              value={valorUnitario}
              onChange={(e) => setValorUnitario(e.target.value)}
              className="form-control"
              placeholder="Entre o valor"
            />
          </div>
          <div className="form-outline col mb-3">
            <label htmlFor="quantidade" className="form-label">
              Quantidade em estoque
            </label>
            <input
              type="number"
              value={estoque}
              onChange={(e) => setEstoque(e.target.value)}
              id="quantidade"
              className="form-control"
              placeholder="Entre a quantidade"
            />
          </div>
          <div className="col form-outline mb-3">
            <label htmlFor="image" className="form-label">
              URL da imagem
            </label>
            <input
              type="text"
              value={urlImagem}
              onChange={(e) => setUrlImagem(e.target.value)}
              placeholder="Entre a URL da imagem"
              className="form-control"
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleEditar}>
          Aceitar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEditar;
