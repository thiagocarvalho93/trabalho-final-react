import api from "./api"

const getAllProdutos = async () => {
    try{
    const response = await api.get('/produtos')
    return response;
    } catch(error) {
        console.error(error);
    }
}

const getProduto = async (idProduto) => {
    try{
    const response = await api.get("/produtos/"+ idProduto)
    return response;
    } catch(error) {
        console.error(error);
    }
}

const getProdutoByName = async (nome) => {
    try{
    const response = await api.get("/produtos/pesquisar?nome="+ nome)
    return response;
    } catch(error) {
        console.error(error);
    }
}

const postProduto = async (idCategoria, nomeProduto, quantidadeEstoque, valorUnitario) => {
    try{
        const response = await api.post("/produtos", 
        {
            "idCategoria": idCategoria,
            "nomeProduto": nomeProduto,
            "quantidadeEstoque": quantidadeEstoque,
            "valorUnitario": valorUnitario
          }
    )
    return response;
    } catch(error) {
        console.error(error);
    }
}

const deleteProduto = async (idProduto) => {
    try{
    const response = await api.delete("/produtos/" + idProduto)
    return response;
    } catch(error) {
        console.error(error);
    }
}

const putProduto = async (idProduto, idCategoria, nomeProduto, quantidadeEstoque, valorUnitario) => {
    try{
        const response = await api.put("/produtos/" + idProduto, 
        {
            "idCategoria": idCategoria,
            "nomeProduto": nomeProduto,
            "quantidadeEstoque": quantidadeEstoque,
            "valorUnitario": valorUnitario
          }
    )
    return response;
    } catch(error) {
        console.error(error);
    }
}

export {
    getAllProdutos,
    getProduto,
    getProdutoByName,
    postProduto,
    deleteProduto,
    putProduto
}