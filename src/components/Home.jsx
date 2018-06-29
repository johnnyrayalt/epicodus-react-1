import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return(
    <div className='container'>
      <Link className='link' to='/beerlist' style={{ textDecoration: 'none' }}>
      <div className='centerSplash'>
        <div className='welcomeHead'>Welcome!</div>
        <div className='welcomeSubHead'>
          Let's see what's on tap
        </div>
      </div>
      </Link>
      <style jsx>{`
        .centerSplash {
          text-align:center;
          padding-top:30%;
        }

        .welcomeHead {
          font-family: 'Righteous', cursive;
          font-size:120px;
          color:#fcedb2;
          -webkit-text-stroke: 5px #af4134;
        }

        .welcomeSubHead {
          font-family: 'Chango',sans-serif;
          color:#df6a3b;
          -webkit-text-stroke: 2px #af4134;
          font-size:36px;
        }

            `}</style>
    </div>
  );
}

export default Home;
