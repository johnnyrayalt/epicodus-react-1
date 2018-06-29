import React from 'react';
import PropTypes from 'prop-types';

function App() {
  return(
    <div>
      <Header/>
    </div>
  );
}

function Header() {
  return(
    <div className='container'>
      <h3>Digital Poor</h3>
      <p className='headerText'>Drink me</p>
    </div>
  );
}

var masterBeersList = [
  {
    name: 'Alt Bier',
    brand: "Widmer Brothers",
    type: "Altbier",
    price: 5,
    alcContent: 5.0,
    pints: 124
  },
  {
    name: 'Reformist Pils',
    brand: "Widmer Brothers",
    type: "Pilsner",
    price: 5,
    alcContent: 5.0,
    pints: 124
  },
  {
    name: 'Orbiter IPA',
    brand: "Ecliptic Brewing",
    type: "IPA",
    price: 6,
    alcContent:  7.4,
    pints: 124
  },
  {
    name: 'Phobos Single Hop Red Ale',
    brand: "Widmer Brothers",
    type: "Red Ale",
    price: 5.50,
    alcContent: 5.2,
    pints: 124
  }
]

function BeerList() {
  return(
    <div className='container'>
      {masterBeersList.map((beer, index) =>
        <BeerDetails name={beer.name}
          brand={beer.brand}
          type={beer.type}
          alcContent={beer.alcContent}
          key={index} />
      )}
    </div>
  );
}

function BeerDetails(props) {
  return(
    <div className='container'>
      <h3 className='name'>{props.name}</h3>
    </div>
  );
}



export default App;
