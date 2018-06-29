import React from 'react';
import BeerDetails from './BeerDetails';

var masterBeersList = [
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
];

function BeerList() {
  return(
    <div className='container'>
      <div className='beer'>
        {masterBeersList.map((beer, index) =>
          <BeerDetails name={beer.name}
            brand={beer.brand}
            type={beer.type}
            alcContent={beer.alcContent}
            pints={beer.pints}
            price={beer.price}
            key={index} />
        )}
      </div>
    </div>
  );
}

export default BeerList;
