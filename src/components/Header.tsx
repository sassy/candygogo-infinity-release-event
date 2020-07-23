import React from 'react';
import '../App.css';
import Logo from '../images/header_logo.jpg'

function Heaader() {
    return (
        <header className="App-header">
            <h2><img className="Header-logo" alt="logo" src={Logo}></img> Infinity リリースイベント情報</h2>
        </header>
    );
  }
  
  export default Heaader;
  