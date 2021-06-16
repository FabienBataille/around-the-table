import './menuBurger.css';
import burger from '../images/burger.png'

function MenuBurger() {
  return (
    <div className="MenuBurger">
      <ul className='list'>
      <li>
        <img className="logoBurger" alt="logoBurger" src={burger}/>
        <ul>
          <li><a href="#">Javascript</a></li>
          <li><a href="#">React</a></li>
          <li><a href="#">Node</a></li>
          <li><a href="#">SQL</a></li>
        </ul>
      </li>
    </ul>
    </div>
  );
}

export default MenuBurger;