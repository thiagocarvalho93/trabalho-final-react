import { Link } from "react-router-dom";
import './style.css'
import React from 'react'
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { ReactComponent as LO } from "../../assets/imagemlogos/LogoBranco.svg"
import Button from 'react-bootstrap/Button';
import { FaSearch } from 'react-icons/fa';
import { useState } from "react";

const Navbar = () => {
    const [produto, setProduto] = useState("")

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    <Link to="/home" className="navbar-brand brand-novo ">
                        <LO className="logo-brand" height={"70px"} width={"70px"} />
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/produto" className="nav-link active pb-3"> Produtos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link active pb-3"> Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/carrinho" className="nav-link active pb-3"> <FaShoppingCart /></Link>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                        <input className="form-control me-2 buscarProd" type="text" placeholder="Buscar produto" value={produto} onChange={(e) => setProduto(e.target.value)} />
                        <Button className="btn" variant="primary" onClick={() => { }}><FaSearch /></Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar