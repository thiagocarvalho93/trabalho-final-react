import { Link} from "react-router-dom";
import './style.css'
import React from 'react'
const Navbar = () => {
    return(
        <>
    
        <nav className="container-fluid">Menu
        <Link to="/home">Para Home</Link>
        <Link to="/produto">Para Produtos</Link>
        <Link to="/contato">Para Contato</Link>
        <Link to="/sobre">Para Sobre</Link>
        <Link to="/cadastro">Para Cadastro</Link>
        <Link to="/login">Para Login</Link>
        <Link to="/carrinho">Para Carrinho</Link>
        </nav>

        
        </>
    )
}

export default Navbar