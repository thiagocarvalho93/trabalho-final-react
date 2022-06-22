import api from "./api"

const getAllClientes = async () => {
    try {
        const response = await api.get('/clientes')
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const getCliente = async (idCliente) => {
    try {
        const response = await api.get("/clientes/" + idCliente)
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const postCliente = async (cep, cpf, email, nome, numeroEndereco) => {
    try {
        const response = await api.post("/clientes",
            {
                "cep": cep,
                "cpf": cpf,
                "email": email,
                "nome": nome,
                "numeroEndereco": numeroEndereco

            }

        )
        console.log(response);
        return response;
    } finally {
        // console.error(e);
    }
}

const deleteCliente = async (idCategoria) => {
    try {
        const response = await api.delete("/clientes/" + idCategoria)
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const putCliente = async (idCategoria, categoria) => {
    try {
        const response = await api.put("/clientes/" + idCategoria,
            {
                "categoria": categoria
            }
        )
        console.log(response);
        return response;
    } catch (error) {
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