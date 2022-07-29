import React from 'react';
import Profile from '../img/profile.jpg';


function About() {
  return (
    <div>
      <h1>Alice Silva</h1>
      <p>Thanks for visiting my React Portfolio Project Page.</p>
      <img src={Profile} alt="Alice" />
      <p>Hello,  I'm Alice. I was born in Brazil. I am a musician turned software developer. I love coffee and technology. I am currently finishing a Full Stack Web Development Bootcamp at UNC Charlotte. Feel free to check my work and contact me.</p>
    </div>
  );
}

export default About;