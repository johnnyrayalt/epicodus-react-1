import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import BeerList from './BeerList';
import Home from './Home';
import NotFound from './NotFound';
import NewBeerForm from './NewBeerForm';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterBeersList: [
        {
          name: 'Alt Bier',
          brand: 'Widmer Brothers',
          type: 'Altbier',
          price: 5,
          alcContent: 5.0,
          pints: 124
        },
        {
          name: 'Reformist Pils',
          brand: 'Widmer Brothers',
          type: 'Pilsner',
          price: 5,
          alcContent: 5.0,
          pints: 124
        },
        {
          name: 'Orbiter IPA',
          brand: 'Ecliptic Brewing',
          type: 'IPA',
          price: 6,
          alcContent:  7.4,
          pints: 124
        },
        {
          name: 'Phobos Single Hop Red Ale',
          brand: 'Widmer Brothers',
          type: 'Red Ale',
          price: 5.50,
          alcContent: 5.2,
          pints: 124
        }
      ]
    };
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this);
  }

  handleAddingNewBeerToList(newBeer) {
    var newMasterBeersList = this.state.masterBeersList.slice();
    newMasterBeersList.push(newBeer);
    this.setState({masterBeersList: newMasterBeersList});
  }

  render() {
    return(
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beerlist' render={()=>
            <BeerList
              showBeerList={this.state.masterBeersList} />}
          />
          <Route path='/newbeer' render={()=>
            <NewBeerForm
              onNewBeerCreation={this.handleAddingNewBeerToList} />}
          />
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
