import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <div className="footer-relative">
      <div className="Footer">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/connection">Connection</Link>
          </li>
          <li>
            <Link to="/profil">Profil</Link>
          </li>
          <li>
            <Link to="/nous-rejoindre">Nous rejoindre</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
