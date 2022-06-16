import { Link, useLocation, useNavigate } from 'react-router-dom'

const Home = () => {
    return(
        <>
          <h1>Home</h1>
        <Link to="/cadastro">Para Cadastro</Link><br/>
        <Link to="/login">Para Login</Link><br/>
        <Link to="/contato">Para Contato</Link><br/>
        <Link to="/sobre">Para Sobre</Link><br/>
        <Link to="/produto">Para Produto</Link><br/>
        <Link to="/carrinho">Para Carrinho</Link><br/>
        </>
    )
}

export default Home;