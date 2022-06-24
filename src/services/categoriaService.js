import api from "./api";

const getAllCategorias = async () => {
  try {
    const response = await api.get("/categorias");
    return response;
  } catch (error) {
    console.error(error);
  }
};

const getCategoria = async (idCategoria) => {
  try {
    const response = await api.get("/categorias/" + idCategoria);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const getCategoriaByName = async (nome) => {
  try {
    const response = await api.get("/categorias/pesquisar?nome=" + nome);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const postCategoria = async (categoria) => {
  try {
    const response = await api.post("/categorias", {
      categoria: categoria,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

const deleteCategoria = async (idCategoria) => {
  try {
    const response = await api.delete("/categorias/" + idCategoria);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const putCategoria = async (idCategoria, categoria) => {
  try {
    const response = await api.put("/categorias/" + idCategoria, {
      categoria: categoria,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export {
  getAllCategorias,
  getCategoria,
  getCategoriaByName,
  postCategoria,
  deleteCategoria,
  putCategoria,
};
