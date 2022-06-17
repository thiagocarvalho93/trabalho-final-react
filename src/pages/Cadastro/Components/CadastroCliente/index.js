import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import axios from 'axios';
import './styles.css'
const CadastroCliente = () => {

    const [data, setData] = useState([])
    const [endereco, setEndereco] = useState([])

    const getCep = async (cep) => {
        if (cep === undefined || cep.length <= 0) {
            return
        }
        try {
            const { data } = await axios.get(`https://teg-store-api.herokuapp.com/tegloja/cep/${cep}`)

            setEndereco(data)

        } catch (e) {

        }
    }
    useEffect(() => {

        getCep();
    }, [])
    const handleBlur = (e) => getCep(e.target.value)

    const validarSenha = () => {
        return true
    }
    function check() {
        let nome = data.nome;
        let email = data.email;
        let senha1 = data.senha;
        let senha2 = document.querySelector("#senha2").value;

        if (
            nome !== "" &&
            email !== "" &&
            senha1 !== "" &&
            senha2 !== "" &&
            senha1 === senha2
        )
            return true;
        else {
            return false;
        }
    }
    function msg() {
        if (check()) {
            alert("Cadastro Feito!");
            handleForm();
        } else {
            for (let i = 0; i < 4; i++) {
                document.querySelectorAll(".obrigatorio")[i].textContent =
                    "* Cheque esse campo";
                document.querySelectorAll(".obrigatorio")[i].style.color = "red";
                document.querySelectorAll(".obrigatorio")[i].style.transition = "800ms";
            }

            alert("Faltam dados obrigatórios.");
        }
    }

    const handleForm = () => {
        setData(data)
        console.log(data);
    }

    return (
        <>
            <main className="container mb-6 pb-5">

                <form className="formulario">

                    <h3>Informe seu melhor cadastro!</h3>

                    <div className="field">
                        <label>  Nome:<input type="text" id="nome" name="nome" placeholder="Digite seu nome" required /><br /><span
                            className="obrigatorio" value={data.nome} onChange={(e) => setData(e.target.value)} > * campo obrigatório</span>
                        </label>
                    </div>

                    <div className="field">
                        <label> Email: <input type="email" id="emailCadastro" name="email" placeholder="Digite seu e-mail" />
                            <br /><span className="obrigatorio" value={data.email} onChange={(e) => setData(e.target.value)} > * campo obrigatório</span>
                        </label>
                    </div>

                    <div className="field">
                        <label> Senha: <input type="password" id="senha1" name="password" placeholder="Digite sua senha" /><br /><span
                            className="obrigatorio" value={data.senha} onChange={(e) => setData(e.target.value)} > * campo obrigatório</span>
                        </label>
                    </div>

                    <div className="field">
                        <label>  Repita:  <input onBlur={validarSenha} type="password" id="senha2" name="password"
                            placeholder="Repita a sua senha" /><br /><span className="obrigatorio"> * campo obrigatório</span>
                        </label>
                    </div>

                    <div className="field">
                        <label>Data de nascimento: <input type="date" id="datanascimento" name="Data de nascimento" value={data.nascimento} onChange={(e) => setData(e.target.value)} /> </label>
                    </div>

                    <div className="Endereco">
                        <label> Endereço:<br />
                            cep:

                            <input type="text" id="cep" name="cep" placeholder="buscar cep :)" onChange={(e) => setEndereco(e.target.value)} value={endereco.cep} onBlur={handleBlur} />
                            Complemento : <input type="text" id="complemento" name="complemento" placeholder="Complemento caso houver" value={data.complemento} onChange={(e) => setData(e.target.value)} />
                            Numero: <input type="text" id="numeroEndereco" name="numero" placeholder="seu numero aqui" value={data.numeroEndereco} onChange={(e) => setData(e.target.value)} />
                            Logradouro: <input type="text" id="logradouro" name="cep" placeholder="Rua|Avenida|etc" disabled value={endereco.logradouro} />
                            UF: <input type="text" id="uf" name="uf" disabled value={endereco.uf} />
                            Bairro: <input type="text" id="bairro" name="bairro" disabled value={endereco.bairro} />
                            Cidade: <input type="text" id="cidade" name="cidade" disabled value={endereco.cidade} />

                        </label>
                    </div>
                    <br />
                    <input type="button" value="Enviar" className="btn btn-primary submit" id="cadastro" name="Enviar Formulário" onClick={console.log(data)} />

                    <div className="field">
                        <label> <input type="checkbox" name="novidades" id="sim" defaultChecked /> Deseja receber nossas novidades?<br />

                        </label>
                    </div>


                </form>

            </main>
        </>
    )
}

export default CadastroCliente;