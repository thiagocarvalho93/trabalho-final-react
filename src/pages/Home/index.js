import 'bootstrap/dist/css/bootstrap.min.css'
import './Components/Categorias'
import Categorias from './Components/Categorias';
import './style.css';

const Home = () => {
    return (
        <>
            <img src='../../assets/imagembanner/Banner.svg' alt='baner tegloja' />
            <h1 className='titulo'>Categorias</h1>
            <Categorias />
        </>
    )
}

export default Home;