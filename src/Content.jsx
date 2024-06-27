import React from 'react';
import Header from './Header';
import sandwich from './sandwich.jpg';
import steak from './steak.jpg';
import cherries from './cherries.jpg';
import wine from './wine.jpg';
import popsicle from './popsicle.jpg';
import salmon from './salmon.jpg';
import croissant from './croissant.jpg';
import './Content.css'; 
import About from './About';

function Content() {
  return (
    <div>
      <Header />
      <div className="image-row">
        <div className="image-item">
          <img src={sandwich} alt="Sandwich" className="sandwich" />
          <h2 className="sandwich-heading">The Perfect Sandwich, A Real NYC Classic</h2>
          <p className="sandwich-paragraph">Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
        </div>
        <div className="image-item">
        <img src={steak} alt="Steak" className="steak" />
        <h2 className="steak-heading">Let Me Tell You About This Steak</h2>
          <p className="steak-paragraph">Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
        </div>
        <div className="image-item">
        <img src={cherries} alt="Cherries" className="cherries" />
        <h2 className="steak-heading">Cherries, interrupted</h2>
          <p className="steak-paragraph">Lorem ipsum text praesent tincidunt ipsum lipsum.<br></br>What else?.</p>
        </div>
        <div className="image-item">
        <img src={wine} alt="Wine" className="wine" />
        <h2 className="steak-heading">Once Again, Robust Wine and Vegetable Pasta
        </h2>
          <p className="steak-paragraph">Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
        </div>
      </div>
      <div className="image-row1">
      <div className="image-item">
        <img src={popsicle} alt="Popsicle" className="popsicle" />
        <h2 className="sandwich-heading">All I Need Is a Popsicle</h2>
          <p className="sandwich-paragraph">Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
        </div>
        <div className="image-item">
        <img src={salmon} alt="Salmon" className="salmon" />
        <h2 className="steak-heading">Salmon For Your Skin</h2>
          <p className="steak-paragraph">Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
        </div>
        <div className="image-item">
        <img src={sandwich} alt="Sandwich" className="sandwich1" />
        <h2 className="steak-heading">The Perfect Sandwich, A Real Classic</h2>
          <p className="steak-paragraph">Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
        </div>
        <div className="image-item">
        <img src={croissant} alt="Croissant" className="croissant" />
        <h2 className="steak-heading">Le French
        </h2>
          <p className="steak-paragraph">Lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
        </div>
      </div>
      <About/>
    </div>
  );
}

export default Content;
