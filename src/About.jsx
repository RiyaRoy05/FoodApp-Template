import React from 'react';
import './About.css';
import chef from './chef.jpg';

function About() {
  return (
    <div className="about-container">
      <h2 className="about-heading">About Me, The Food Man</h2>
      <img src={chef} alt="Chef" className="chef" />
      <h3>I am Who I Am!</h3>
      <h4 className="heading">With Passion For Real, Good Food</h4>
      <p className="paragraph">Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
    </div>
  );
}

export default About;
