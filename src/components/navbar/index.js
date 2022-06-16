import { Link,Navigate } from "react-router-dom";
import './style.css'
const Navbar = () => {
    return(
        <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow-sm mb-3">
        <div className="container-fluid">Menu
       
        <Link to="/produto">Para Produtos</Link>
        <Link to="/contato">Para Contato</Link>
        <Link to="/sobre">Para Sobre</Link>
        <Link to="/cadastro">Para Cadastro</Link>
        <Link to="/login">Para Login</Link>
        <Link to="/carrinho">Para Carrinho</Link>
        </div>
        </nav>
        
        </>
    )
}

export default Navbar