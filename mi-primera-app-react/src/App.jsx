import './App.css'
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import Productos from './components/Productos';

function App() {
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <h1>Nombre de la Empresa</h1>
        </div>
        <nav className="nav-container">
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#catalogo">Catálogo</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a><FaSearch /></a></li>
            <li><a><FaShoppingCart /></a></li>
          </ul>
        </nav>
      </header>
      <Productos />
    </>
  );
}

export default App;
