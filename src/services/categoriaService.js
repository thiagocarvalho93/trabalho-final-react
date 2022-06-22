import api from "./api"

const getAllCategorias = async () => {
    try{
    const response = await api.get('/categorias')
    console.log(response);
    return response;
    } catch(error) {
        console.error(error);
    }
}

const getCategoria = async (idCategoria) => {
    try{
    const response = await api.get("/categorias/"+ idCategoria)
    console.log(response);
    return response;
    } catch(error) {
        console.error(error);
    }
}

const postCategoria = async (categoria) => {
    try{
        const response = await api.post("/categorias", 
        {
            "categoria": categoria
        }
    )
    console.log(response);
    return response;
    } catch(error) {
        console.error(error);
    }
}

const deleteCategoria = async (idCategoria) => {
    try{
    const response = await api.delete("/categorias/" + idCategoria)
    console.log(response);
    return response;
    } catch(error) {
        console.error(error);
    }
}

const putCategoria = async (idCategoria, categoria) => {
    try{
        const response = await api.put("/categorias/" + idCategoria, 
        {
            "categoria": categoria
        }
    )
    console.log(response);
    return response;
    } catch(error) {
        console.error(error);
    }
}

export {
    getAllCategorias,
    getCategoria,
    postCategoria,
    deleteCategoria,
    putCategoria
}