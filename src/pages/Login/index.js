import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login = () => {
    return(    
        <>   
        
<Form className="container col-6 mt-5  p-6 mb-5 bg-body rounded-2">
<img width={"100px"} src="https://cdn-icons-png.flaticon.com/512/17/17004.png"/>

      <Form.Group className="container col-6  p-3 "  controlId="formBasicEmail">
        <Form.Label column sm="2">
            Email:
            </Form.Label>
        <Form.Control type="email" placeholder="Digite seu email" />
      </Form.Group>

      <Form.Group className="container col-6  p-3 " controlId="formBasicPassword">
        <Form.Label column sm="2">
            Senha:    
            </Form.Label>
        <Form.Control type="password" placeholder="Digite sua senha" />
      </Form.Group>
      
      <Button variant="btn btn-primary" type="submit mt-2" className=" col-6  p-2 mt-3 " >
        Entrar
      </Button>
      <Link to="/cadastro">Para Cadastro</Link>
    </Form>
    
    </>  
  );
}

export default Login;