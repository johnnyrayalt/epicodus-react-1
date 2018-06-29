import React from 'react';
import PropTypes from 'prop-types';

function BeerDetails(props) {
  return(
    <div className='container'>
      <div className='brandInfo'>
        <h3 className='name'>{props.name}</h3>
        <h4 className='brand'>{props.brand}</h4>
      </div>
      <div className='type'>{props.type}</div>
      <div className='price'>{props.price}</div>
      <div className='alcContent'>{props.alcContent}</div>
      <div className='pints'>{props.price}</div>
    </div>
  );
}

BeerDetails.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcContent: PropTypes.number.isRequired,
  pints: PropTypes.number
};

export default BeerDetails;
