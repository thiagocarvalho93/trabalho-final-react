import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Rotas from './Routes';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Rotas>
    <Home />
    </Rotas>
  </>
);
