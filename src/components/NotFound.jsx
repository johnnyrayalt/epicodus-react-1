import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NotFound(props){
  return (
    <div className='center fourohfour'>
      <h2>The page {props.location.pathname} does not exist!</h2>
      <h3>Would you like to see whats <Link to='/beerlist' style={{ textDecoration: 'none', color: '#007291' }}>on tap</Link> instead?</h3>

      <style jsx>{`
        .center {
          text-align:center;
          margin:auto;
        }

        .fourohfour {
          padding-top:220px;
        }

      h2 {
        font-family: 'Righteous', cursive;
        font-size:70px;
        color:#fcedb2;
        -webkit-text-stroke: 2px #af4134;
      }

      h3 {
        font-family: 'Chango',sans-serif;
        color:#df6a3b;
        -webkit-text-stroke: 2px #af4134;
        font-size:28px;
      }

        `}</style>
    </div>
  );
}

NotFound.propTypes = {
  location: PropTypes.object
};

export default NotFound;
