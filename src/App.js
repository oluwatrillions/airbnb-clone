import React from 'react'
import Header from './Header'
import Footer from './Footer';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Search from './Search';
import ExploreNearby from './ExploreNearby';



function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
            <Route path="/search">
        <Search />
          </Route>
            <Route path="/explore">
        <ExploreNearby />
          </Route>
          <Route path="/">
        <Home />
          </Route>
        </Switch>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
