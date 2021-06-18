import avatar1 from '../images/avatar_1.png';
import avatar2 from '../images/avatar_2.png';
import avatar3 from '../images/avatar_3.png';
import './nousRejoindre.css';

function NousRejoindre() {
  return (
    <div className="NousRejoindre">
      <div className="avatars">
        <img src={avatar1} alt="avatar1" />
        <img src={avatar2} alt="avatar2" />
        <img src={avatar3} alt="avatar3" />
      </div>
      <p className="choose">Choisir un avatar</p>
      <form className="pseudoContainer">
        <label htmlFor="pseudo" className="pseudo">
          Pseudo
          <input type="text" name="pseudo" id="pseudo" placeholder="Pseudo" />
        </label>
      </form>
      <form className="emailContainer">
        <label htmlFor="email" className="email">
          Email
          <input type="email" name="email" id="email" placeholder="Email" />
        </label>
      </form>
      <form className="passwordContainer">
        <label htmlFor="password" className="password">
          Mot de passe
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
          />
        </label>
      </form>
      <form className="soumettre">
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
}

export default NousRejoindre;
