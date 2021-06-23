import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import './accueil.css';

function Accueil() {
  return (
    <div className="Accueil">
      <h1> Accueil</h1>
      <img src={logo} alt="logo" className="logo" />
      <button type="button">
        <Link to="/javascript">Javascript</Link>
      </button>
      <button type="button">
        <Link to="/react">React</Link>
      </button>
      <button type="button">
        <Link to="/node">Node</Link>
      </button>
      <button type="button">
        <Link to="/sql">SQL</Link>
      </button>
    </div>
  );
}

export default Accueil;
