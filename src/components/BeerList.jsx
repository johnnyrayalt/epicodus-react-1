import React from 'react';
import BeerDetails from './BeerDetails';
import PropTypes from 'prop-types';

function BeerList(props) {
  return(
    <div className='container'>
      <div className='beer'>
        {props.showBeerList.map((beer, index) =>
          <BeerDetails name={beer.name}
            brand={beer.brand}
            type={beer.type}
            alcContent={beer.alcContent}
            pints={beer.pints}
            price={beer.price}
            key={index} />
        )}
      </div>
      <style jsx>{`
        .container {
          padding-top:230px;
        }
            `}</style>
    </div>
  );
}

BeerList.propTypes = {
  showBeerList: PropTypes.array
};

export default BeerList;
