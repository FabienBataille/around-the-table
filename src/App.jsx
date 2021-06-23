import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './components/Accueil';
import Connection from './components/Connection';
import Profile from './components/Profile';
import NousRejoindre from './components/NousRejoindre';
import QuestionList from './components/QuestionList';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/connection">
              <Connection />
            </Route>
            <Route exact path="/profil">
              <Profile />
            </Route>
            <Route exact path="/nous-rejoindre">
              <NousRejoindre />
            </Route>
            <Route exact path="/javascript">
              <QuestionList category="JavaScript" />
            </Route>
            <Route exact path="/react">
              <QuestionList category="React" />
            </Route>
            <Route exact path="/node">
              <QuestionList category="Node" />
            </Route>
            <Route exact path="/sql">
              <QuestionList category="SQL" />
            </Route>
            <Route exact path="/">
              <Accueil />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
