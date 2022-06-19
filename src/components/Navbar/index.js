import { Link} from "react-router-dom";
import './style.css'
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return(
        <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow-sm mb-3">Menu
            <Link to="/home"> Home</Link>
            <Link to="/produto"> Produtos</Link>
            <Link to="/contato"> Contato</Link>
            <Link to="/sobre"> Sobre</Link>
            <Link to="/cadastro"> Cadastro</Link>
            <Link to="/login"> Login</Link>
            <Link to="/carrinho"> <FaShoppingCart /></Link>
        </nav>
        </>
    )
}

export default Navbar