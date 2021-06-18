import './profile.css';
import avatarChoisi from '../images/avatar_1.png';

function Profile() {
  return (
    <div className="Profile">
      <h1 className="titre">Profil</h1>
      <div className="avatar">
        <img src={avatarChoisi} alt="avatarChoisi" className="avatarChoisi" />
      </div>
      <form className="pseudoContainer">
        <label htmlFor="pseudo" className="pseudo">
          <input type="text" name="pseudo" id="pseudo" placeholder="Pseudo" />
        </label>
      </form>
      <form className="emailContainer">
        <label htmlFor="email" className="email">
          <input type="email" name="email" id="email" placeholder="Email" />
        </label>
      </form>
      <form className="passwordContainer">
        <label htmlFor="password" className="password">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
          />
        </label>
      </form>
      <form className="mise-a-jour">
        <button type="submit">Mise à jour</button>
      </form>
      <form className="deconnection">
        <button type="submit">Déconnection</button>
      </form>
    </div>
  );
}

export default Profile;
