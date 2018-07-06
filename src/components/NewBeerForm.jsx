import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

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
          placeholder='What is this beers alcohol percentage content?'
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
        <button type='submit' className='button'>Add</button>
      </form>

      <style jsx>{`
        .newBeerFormContainer {
          padding-top:200px;
        }

        .inputField {
          display:flex;
          margin: 5% auto;
        }

      `}</style>

    </div>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
};

export default NewBeerForm;
