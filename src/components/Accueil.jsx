import logo from '../images/logo.png';
import './accueil.css';

function Accueil() {
  return (
    <div className="Accueil">
      <h1> Accueil</h1>
      <img src={logo} alt="logo" className="logo" />
      <button type="button">Javascript</button>
      <button type="button">React</button>
      <button type="button">Node</button>
      <button type="button">SQL</button>
    </div>
  );
}

export default Accueil;
