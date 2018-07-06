import React from 'react';
import BeerDetails from './BeerDetails';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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

      <div className='addBeerContainer'>
        <Link className='link' to='/newbeer' style={{ textDecoration: 'none' }}>
          <h3 className='addBeerButton'>Add Beer</h3>
        </Link>
      </div>

      <style jsx>{`
        .container {
          padding-top:230px;
          max-width:600px;
          margin: auto;
        }

        .addBeerButton {
          width:200px;
          padding:5px 0 5px 10px;
          font-size:22px;
          transition: all 0.2s ease-out;
          border: 5px solid #df6a3b;
          background-color:#fcedb2;
          font-family: 'Righteous', cursive;
          -webkit-text-stroke: 1px #71351a;
          color:#df6a3b;
          letter-spacing:1.5px;
          border-radius:5px;
        }

        .addBeerButton:hover {
          cursor:pointer;
          background-color:#9dc183;
          border: 5px solid #9dc183;
          color:#fcedb2;
          font-size:22px;
          width:1000%;
          overflow:hidden;
          transition: all 2s ease;
          font-size:33px;
        }
            `}</style>
    </div>
  );
}

BeerList.propTypes = {
  showBeerList: PropTypes.array
};

export default BeerList;
