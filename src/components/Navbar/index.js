import { Link} from "react-router-dom";
import './style.css'
import React from 'react'
const Navbar = () => {
    return(
        <>
    
        <nav className="container-fluid">Menu
        <Link to="/home"> Home</Link>
        <Link to="/produto"> Produtos</Link>
        <Link to="/contato"> Contato</Link>
        <Link to="/sobre"> Sobre</Link>
        <Link to="/cadastro"> Cadastro</Link>
        <Link to="/login"> Login</Link>
        <Link to="/carrinho"> Carrinho</Link>
        </nav>

        
        </>
    )
}

export default Navbar