import React from 'react';
import PropTypes from 'prop-types';

function BeerDetails(props) {
  return(
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

      <style jsx>{`
      .containerBeerDetails {
        width: 50%;
        min-width:600px;
        margin:20px auto;
        border: 5px solid #df6a3b;
        border-radius:5px;
        background-color:#e1c8bd;
      }

      .brandInfo {
        display:flex;
        position:relative;
      }

      .brandInfo::after {
        content:"";
        bottom: 0;
        left: 50px;
        width: 75%;
        height:2px;
        background: #af4134;
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
        font-size:32px;
      }

      .brand {
        font-size:24px;
        padding-top:10px;
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
        color: #007291;
      }

      .type, .alcContent, .price, .pints {
        margin: 2px 0 2px 100px;
        font-family: 'Oswald', sans-serif;
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
