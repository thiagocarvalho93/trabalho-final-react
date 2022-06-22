import api from "./api"

const getAllClientes = async () => {
    try{
    const response = await api.get('/clientes')
    return response;
    } catch(error) {
        console.error(error);
    }
}

const getCliente = async (idCliente) => {
    try{
    const response = await api.get("/clientes/"+ idCliente)
    return response;
    } catch(error) {
        console.error(error);
    }
}

const postCliente = async (cep, cpf, email, nome, numeroEndereco) => {
    try{
        const response = await api.post("/clientes", 
        {
            "cep": cep,
            "cpf": cpf,
            "email": email,
            "nome": nome,
            "numeroEndereco": numeroEndereco
          }
    )
    return response;
    } catch(error) {
        console.error(error);
    }
}

const deleteCliente = async (idCategoria) => {
    try{
    const response = await api.delete("/clientes/" + idCategoria)
    return response;
    } catch(error) {
        console.error(error);
    }
}

const putCliente = async (idCategoria, categoria) => {
    try{
        const response = await api.put("/clientes/" + idCategoria, 
        {
            "categoria": categoria
        }
    )
    return response;
    } catch(error) {
        console.error(error);
    }
}

export {
    getAllClientes,
    getCliente,
    postCliente,
    deleteCliente,
    putCliente
}