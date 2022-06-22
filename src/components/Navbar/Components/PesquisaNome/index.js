import axios from 'axios';

const PesquisaNome = (setProdutosFiltrados)=>{

    const searchCategoria = async () => {
        try {
            const { data } = await axios.get(`https://teg-store-api.herokuapp.com/tegloja/produtos/pesquisar?nome=${teste}`)
            console.log(data);
            setProdutosFiltrados(data)
        } catch (e) {
            console.log(e);
        }
    }
    searchCategoria();
}
export default PesquisaNome;