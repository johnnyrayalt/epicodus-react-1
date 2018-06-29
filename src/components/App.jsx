import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import BeerList from './BeerList';
import Home from './Home';
import NotFound from './NotFound';

function App() {
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/beerlist' component={BeerList} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
