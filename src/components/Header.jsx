import React from 'react';

function Header() {
  return(
    <div className='containerHeader'>
      <h3 className='headerMain center'>Digital Poor</h3>
      <p className='headerText center'>Drink me</p>
      <div className='block1 center'></div>
      <div className='block2 center'></div>
      <div className='block3 center'></div>

      <style jsx>{`
      .containerHeader {
        width:100%;
        position:fixed;
        z-index:99;
        background: -webkit-linear-gradient(#fcedb2 90%, rgba(0,0,0,0));
        padding:2% 0 0 0;
      }

      .center {
        text-align:center;
        margin:auto;
      }

      .headerMain, .headerText {
        font-family: 'Righteous', cursive;
        background: -webkit-linear-gradient(#df6a3b 60%, #af4134);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        letter-spacing:1.5px;
      }

      .headerMain {
        font-size:52px;
        -webkit-text-stroke: 2px #71351a;
      }

      .headerText {
        font-size:30px;
        -webkit-text-stroke: 1px #71351a;
      }

      .block1, .block2, .block3 {
        height:20px;
        border-bottom-left-radius:5px;
        border-bottom-right-radius:5px;
        border-bottom: 8px solid #af4134;
        border-left: 8px solid #af4134;
        border-right: 8px solid #af4134;
        margin-bottom:-8px;
      }

      .block1 {
        width: 90%;
        background-color: #df6a3b;
        border-top: 8px solid #af4134;
      }

      .block2 {
        width: 75%;
        background-color: #007291;
        z-index:2;
      }

      .block3 {
        width: 60%;
        background-color: #af4134;
        z-index:3;
      }
          `}</style>
    </div>
  );
}

export default Header;
