import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FcLock, FcAddressBook} from "react-icons/fc";


const Login = () => {
    return(    
        <>   
        
<Form className="container text-center col-5 mt-5  p-4 mb-5 bg-body rounded-2">
<img width={"100px"}  src="https://cdn-icons-png.flaticon.com/512/17/17004.png"/>

      <Form.Group className="container col-6  p-3  "  controlId="formBasicEmail">
        <Form.Label className="w-100 text-start" >
            Email:
            <FcAddressBook/>
            </Form.Label>
        <Form.Control type="email" placeholder="Digite seu email" />
      </Form.Group>

      <Form.Group className="container col-6  p-3 " controlId="formBasicPassword">
        <Form.Label className="w-100 text-start">
            Senha:
            <FcLock/>
            </Form.Label>
        <Form.Control type="password" placeholder="Digite sua senha" />
      </Form.Group>
      
      <Button variant="btn btn-primary" type="submit mt-2" className=" col-4  p-2 mt-2 " >
        Entrar
      </Button>
     
     
      <Link className="container col-6  p-3 text-primary " to="/cadastro">Ainda não tem uma conta?</Link> 
      
      
    </Form>
    
    </>  
  );
}

export default Login;