import axios from 'axios'

const api = axios.create({
    baseURL: 'https://teg-store-api.herokuapp.com/tegloja'
    //CASO NECESSÁRIO, PASSAR O TOKEN
    //headers: {"Authorization" : "TOKEN"}
})

export default api