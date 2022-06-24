import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";
import { getProdutoByName } from "../../../../services/produtoService";

const PesquisaNome = ({ value }) => {
  const searchProdutos = async () => {
    const response = await getProdutoByName(value);
    console.log(response.data);
  };

  return (
    <Button className="btn" variant="primary" onClick={searchProdutos}>
      <FaSearch />
    </Button>
  );
};

export default PesquisaNome;
