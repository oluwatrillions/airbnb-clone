import React from 'react'
import Header from './Header'
import Footer from './Footer';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Search from './Search';



function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route path="/">
        <Home />
          </Route>
           {/* <Route exact path="/search">
        <Search />
          </Route> */}
        </Switch>
        
        <Footer />
        <Search/>
      </Router>
    </div>
  );
}

export default App;
