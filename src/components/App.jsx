import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import BeerList from './BeerList';
import Home from './Home';

function App() {
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/beerlist' component={BeerList} />
      </Switch>
    </div>
  );
}

export default App;
