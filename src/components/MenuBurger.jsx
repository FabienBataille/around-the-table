import { Link } from 'react-router-dom';
import './menuBurger.css';
import burger from '../images/burger.png';

function MenuBurger() {
  return (
    <div className="MenuBurger">
      <ul className="list">
        <li>
          <img className="logoBurger" alt="logoBurger" src={burger} />
          <ul>
            <li>
              <Link to="/javascript">Javascript</Link>
            </li>
            <li>
              <Link to="/react">React</Link>
            </li>
            <li>
              <Link to="/node">Node</Link>
            </li>
            <li>
              <Link to="/sql">SQL</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default MenuBurger;
