import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FcLock, FcAddressBook} from "react-icons/fc";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const user = {
  login: 'fulano',
  senha: '123'
}

const Login = () => {

    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        
        if(login === user.login && senha === user.senha) {
            localStorage.setItem('email', login);
            localStorage.setItem('senha', senha);
            navigate('/')
        }
    }

    return(    
        <>   
        
<Form className="container text-center col-5 mt-5  p-4 mb-5 bg-body rounded-2 shadow">
<img width={"100px"}  src="https://cdn-icons-png.flaticon.com/512/17/17004.png"/>

      <Form.Group className="container col-12 col-md-8  p-3"  controlId="formBasicEmail">
        <Form.Label className="w-100 text-start" >
            Email:
            <FcAddressBook/>
            </Form.Label>
        <Form.Control type="email" value={login} onChange={e => setLogin(e.target.value)} placeholder="Digite seu email" />
      </Form.Group>

      <Form.Group className="container col-12 col-md-8 p-3 " controlId="formBasicPassword">
        <Form.Label className="w-100 text-start">
            Senha:
            <FcLock/>
            </Form.Label>
        <Form.Control type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Digite sua senha" />
      </Form.Group>
      
      <Button variant="btn btn-primary col-6 col-md-4" type="submit mt-2" onClick={handleLogin} className=" col-4  p-2 mt-2 " >
        Entrar
      </Button>
     
      <div className='row'>
        <Link className="container col-12 col-md-8   p-3 text-primary " to="/cadastro">Ainda não tem uma conta?</Link> 
      </div>
      
    </Form>
    
    </>  
  );
}

export default Login;