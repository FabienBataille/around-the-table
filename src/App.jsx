import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './components/Accueil';
import Connection from './components/Connection';
import Profile from './components/Profile';
import NousRejoindre from './components/NousRejoindre';
import Javascript from './components/Javascript';
import PageReact from './components/PageReact';
import PageNode from './components/PageNode';
import PageSql from './components/PageSql';

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
              <Javascript />
            </Route>
            <Route exact path="/react">
              <PageReact />
            </Route>
            <Route exact path="/node">
              <PageNode />
            </Route>
            <Route exact path="/sql">
              <PageSql />
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
