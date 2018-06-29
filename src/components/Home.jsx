import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return(
    <div className='container'>
      <div className='welcomeHead'>Welcome!</div>
      <div className='welcomeSubHead'>
        <Link to='/beerlist'>Let's see what's on tap</Link>
      </div>
    </div>
  );
}

export default Home;
