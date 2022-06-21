import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FcLock, FcAddressBook} from "react-icons/fc";

const Login = () => {
    return(    
        <>   
        
<Form>
      <Form.Group className="container col-6  p-3 "  controlId="formBasicEmail">
      <FcAddressBook/>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Digite seu email" />
      </Form.Group>

      <Form.Group className="container col-6  p-3 " controlId="formBasicPassword">
      <FcLock/>
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Digite sua senha" />
      </Form.Group>
      
      <Button variant="btn btn-primary" type="submit mt-2" className='col-md-3 col-sm-4' >
        Entrar
      </Button>
      <Link to="/cadastro">Para Cadastro</Link>
    </Form>
    
    </>  
  );
}

export default Login;