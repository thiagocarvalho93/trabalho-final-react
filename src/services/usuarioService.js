import service from "./service"

function logar (login, senha) {
    return new Promise((resolve, reject) => {

        service.post("", 
            login,
            senha
        )
        .then(response => resolve(response))
        .catch(reject)


    })
}