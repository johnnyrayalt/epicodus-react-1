import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewBeerForm(props) {
  let name = null;
  let brand = null;
  let type = null;
  let alcContent = null;
  let price = null;
  let pints = null;

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
      <form onSubmit={handleAddingNewBeerToList}>
        <input
          type='text'
          id='name'
          placeholder='Beer Name'
          ref={(input) => {name = input;}}/>
        <input
          type='text'
          id='brand'
          placeholder='Beer Manufacturer'
          ref={(input) => {brand = input;}}/>
        <input
          type='text'
          id='type'
          placeholder='What type of beer is it?'
          ref={(input) => {type = input;}}/>
        <input
          type='text'
          id='alcContent'
          placeholder='What is this beers alcohol percentage content?'
          ref={(input) => {alcContent = input;}}/>
        <input
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => {price = input;}}/>
        <input
          type='text'
          id='pints'
          placeholder='How many pours left?'
          default='124'
          ref={(input) => {pints = input;}}/>
      </form>

      <style jsx>{`
        .newBeerFormContainer {
          padding-top:200px;
        }
      `}</style>

    </div>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
};

export default NewBeerForm;
