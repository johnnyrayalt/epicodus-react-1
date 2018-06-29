import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NotFound(props){
  return (
    <div>
      <h2>The page {props.location.pathname} does not exist!</h2>
      <h3>Would you like to see whats <Link to="/beerlist">on tap</Link> instead?</h3>
    </div>
  );
}

NotFound.propTypes = {
  location: PropTypes.object
};

export default NotFound;
