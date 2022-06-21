import 'bootstrap/dist/css/bootstrap.min.css'
import './Components/Categorias'
import Categorias from './Components/Categorias';
import './style.css';

const Home = () => {
    return (
        <>
        <div className='container-fluid'>
            <img src='../../assets/imagembanner/Banner.png' alt='Banner' />
            Aqui vai um banner
        </div>
            <h1 className='titulo'>Categorias</h1>
            <Categorias />
        </>
    )
}

export default Home;