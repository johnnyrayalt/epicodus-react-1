import React from 'react';
import PropTypes from 'prop-types';

function BeerDetails(props) {
  return(
    <div className='container'>
      <h3 className='name'>{props.name}</h3>
    </div>
  );
}

BeerDetails.PropTypes = {
  name: PropTypes.string.isRequired
};

export default BeerDetails;
