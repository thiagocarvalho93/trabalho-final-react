import { Link, useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
    return(
        <>
         <h1>Login</h1>
        <Link to="/home">Para Home</Link><br />
        <Link to="/cadastro">Para Cadastro</Link>
        </>
    )
}

export default Login;