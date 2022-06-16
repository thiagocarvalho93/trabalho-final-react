import { Link, useLocation, useNavigate } from 'react-router-dom'
import React from 'react'
const Login = () => {
    return(
        <>
         <h1>Login</h1>
        <Link to="/cadastro">Para Cadastro</Link>
        </>
    )
}

export default Login;