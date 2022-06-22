import 'bootstrap/dist/css/bootstrap.min.css'
import './Components/Categorias'
import Categorias from './Components/Categorias';
import './style.css';
import banner from './../../assets/imagembanner/Banner.png'

const Home = () => {
    return (
        <>
        <div className='p-0'>
            <img src={banner} className="banner mb-3" alt='Banner' />
        </div>
            <div className="shadow rounded container bg-light">
               <h1 className="titulo text-black"> Categorias</h1>
            <Categorias />
            </div>
        </>
    )
}

export default Home;