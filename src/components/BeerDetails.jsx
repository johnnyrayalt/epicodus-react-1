import React from 'react';
import PropTypes from 'prop-types';

function BeerDetails(props) {
  return(
    <div className='wrapper'>
      <div className='containerBeerDetails'>
        <div className='brandInfo'>
          <h1 className='name'>{props.name}</h1>
          <h3 className='brand'>By {props.brand}</h3>
        </div>
        <div className='beerMug'>🍺</div>
        <div className='left'>
          <div className='type'>{props.type}</div>
          <div className='alcContent'>ABV: {props.alcContent}%</div>
        </div>
        <div className='right'>
          <div className='price'>${props.price}</div>
          <div className='pints'>{props.pints} Pints left</div>
        </div>
      </div>
    <style jsx>{`
    .wrapper {
      border: 5px solid #007291;
      border-radius:5px;
      margin:20px auto;
      width: 50%;
      min-width:600px;
    }


    .containerBeerDetails {
      border: 5px solid #df6a3b;
      background-color:#fcedb2;
    }

    .brandInfo {
      display:flex;
      position:relative;
    }

    .brandInfo::after {
      content:"";
      bottom: 0;
      left: 25%;
      width: 75%;
      height:5px;
      border-top-left-radius:50px;
      border-bottom-left-radius:50px;
      background: #007291;
      position:absolute;
    }

    .name, .brand {
      margin: 10px;
      font-family: 'Righteous', cursive;
      background: -webkit-linear-gradient(#df6a3b 60%, #af4134);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
      letter-spacing:1.5px;
    }

    .name {
      font-size:38px;
      -webkit-text-stroke: 2px #71351a;
    }

    .brand {
      font-size:24px;
      padding-top:10px;
      -webkit-text-stroke: 1px #71351a;
    }

    .beerMug {
      font-size:78px;
      position:absolute;
      padding:20px;
    }

    .left, .right {
      display: flex;
      justify-content: space-between;
      margin:20px 20px;
      color: #af4134;
      -webkit-text-stroke: 2px #71351a;
    }

    .type, .alcContent, .price, .pints {
      margin: 2px 0 2px 100px;
      font-family: 'Chango', sans-serif;
      letter-spacing:1px;
    }

    .type, .alcContent, .price {
      font-size:25px;
    }
        `}</style>

  </div>
  );
}

BeerDetails.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  alcContent: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  pints: PropTypes.number.isRequired
};

export default BeerDetails;
