import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';

function NewBeerForm(props) {
  let name = null;
  let brand = null;
  let type = null;
  let alcContent = NaN;
  let price = NaN;
  let pints = NaN;

  function handleAddingNewBeerToList(event) {
    event.preventDefault();
    props.onNewBeerCreation({
      name: name.value,
      brand: brand.value,
      type: type.value,
      alcContent: alcContent.value,
      price: price.value,
      pints: pints.value,
      id: v4()
    });
    name.value = '';
    brand.value = '';
    type.value = '';
    alcContent.value = '';
    price.value = '';
    pints.value = '';
  }

  return (
    <div className='newBeerFormContainer'>
      <form className='newBeerForm' onSubmit={handleAddingNewBeerToList}>
        <input className='inputField'
          type='text'
          id='name'
          placeholder='Beer Name'

          ref={(input) => {name = input;}}/>
        <input className='inputField'
          type='text'
          id='brand'
          placeholder='Beer Manufacturer'

          ref={(input) => {brand = input;}}/>
        <input className='inputField'
          type='text'
          id='type'
          placeholder='What type of beer is it?'

          ref={(input) => {type = input;}}/>
        <input className='inputField'
          type='number'
          id='alcContent'
          placeholder='What is this beers alcohol % content?'

          ref={(input) => {alcContent = input;}}/>
        <input className='inputField'
          type='number'
          id='price'
          placeholder='Price'

          ref={(input) => {price = input;}}/>
        <input className='inputField'
          type='number'
          id='pints'
          placeholder='How many pours left?'
          default='124'

          ref={(input) => {pints = input;}}/>
        <Link className='link' to='/beerlist'>
          <button type='submit' className='button'>Add</button>
        </Link>
      </form>

      <style jsx>{`
        .newBeerFormContainer {
          padding-top:200px;
        }

        .inputField, .button {
          display:flex;
          margin: 5% auto;
          border: 5px solid #df6a3b;
          background-color:#fcedb2;
          font-family: 'Righteous', cursive;
          -webkit-text-stroke: 1px #71351a;
          color:#df6a3b;
          letter-spacing:1.5px;
          border-radius:5px;
        }

        .inputField {
          width:400px;
          height:50px;
          font-size:18px;
        }

        .inputField::placeholder {
          color:#df6a3b;
        }

        .button {
          padding:0;
          margin:auto;
          width:100px;
          height:50px;
          display:block;
          font-size:22px;
          transition: all 0.2s ease-out;
        }

        .button:hover {
          cursor:pointer;
          background-color:#df6a3b;
          color:#fcedb2;
          font-size:22px;
          width:110px;
          height:60px;
          transition: all 0.2s ease;
          font-size:26px;
        }

      `}</style>

    </div>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func,
  handleRedirectOnAddingBeer: PropTypes.func,
};

export default NewBeerForm;
