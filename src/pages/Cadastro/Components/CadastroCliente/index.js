import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import axios from 'axios';
import './styles.css'
const CadastroCliente = () => {


    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [cpf, setCpf] = useState("")
    const [endereco, setEndereco] = useState([])
    const [numeroEndereco, setNumeroEndereco] = useState("")
    const [complemento, setComplemento] = useState("")

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
        let nome = nome;
        let email = email;
        let senha1 = senha;
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

    const handleForm = async () => {

        if (nome === "" || email === "" || cpf === "") return
        const novoCadastro = [{

            nome: nome,
            cpf: cpf,
            email: email,

        },
            endereco]
        console.log(novoCadastro);
    }

    return (
        <>
            <main className="container ">


                <form className="mt-4 shadow p-3 mb-5 bg-body rounded-3">

                    <h3 className='text-center'>Informe seu melhor cadastro!</h3>
                    <div className="row g-3 mt-2 mb-6">
                        <div className='col-md-6 '>
                            <label >  Nome:
                                <input type="text" className="form-control cadastro" id="nome" name="nome" placeholder="Digite seu nome" required value={nome} onChange={(e) => setNome(e.target.value)} />

                                <span className="obrigatorio" > * </span>

                                Email:
                                <input type="email" className="form-control cadastro" id="emailCadastro" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu e-mail" />
                                <span className="obrigatorio" > *  </span>
                                Senha:

                                <input type="password" className="form-control cadastro" id="senha1" name="password" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} />

                                <span className="obrigatorio"> *  </span>

                                Repita:
                                <input onBlur={validarSenha} className="form-control cadastro" type="password" id="senha2" name="password"
                                    placeholder="Repita a sua senha" /><span className="obrigatorio"> *  </span>

                                Cpf:
                                <input type="text" className="form-control cadastro" id="cpf" name="cpfo" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                            </label>
                        </div>

                        <div className='col-md-6'>
                            <div className="Endereco">
                                <label>

                                    Cep:
                                    <input type="text" id="cep" className="form-control cadastro" name="cep" placeholder="buscar cep :)" onChange={(e) => setEndereco(e.target.value)} value={endereco.cep} onBlur={handleBlur} />

                                    Numero: <span className='spanUF'>UF:</span> <span className='spanCidade'>Cidade:</span>
                                    <div className='d-flex '>
                                        <input type="text" className="form-control cadastro" id="numeroEndereco" name="numero" placeholder="nº" value={numeroEndereco} onChange={(e) => setNumeroEndereco(e.target.value)} />


                                        <input type="text" className="form-control cadastro" id="uf" name="uf" disabled value={endereco.uf} />

                                        <input type="text" className="form-control cadastro" id="cidade" name="cidade" disabled value={endereco.cidade} />
                                    </div>

                                    Complemento :
                                    <input type="text" id="complemento" className="form-control cadastro" name="complemento" placeholder="Complemento caso houver" value={complemento} onChange={(e) => setComplemento(e.target.value)} />

                                    Logradouro:
                                    <input type="text" className="form-control cadastro" id="logradouro" name="cep" placeholder="Rua|Avenida|etc" disabled value={endereco.logradouro} />

                                    Bairro:
                                    <input type="text" className="form-control cadastro" id="bairro" name="bairro" disabled value={endereco.bairro} />


                                </label>
                            </div>
                        </div>

                    </div>
                    <input type="button" value="Enviar" className="btn btn-primary submit mt-2" id="cadastro" name="Enviar Formulário" onClick={handleForm} />
                    <label> <input type="checkbox" name="novidades" id="sim" defaultChecked /> Deseja receber nossas novidades?<br />
                    </label>
                </form>

            </main >
        </>
    )
}

export default CadastroCliente;