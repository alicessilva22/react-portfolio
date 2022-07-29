import React from 'react';
import Profile from '../img/profile.jpg';


export default function About() {
  return (
    <div>
      <h1>Alice Silva</h1>
      <p>
        Thanks for visiting my React Portfolio Project Page.
      </p>
      <img src={ Profile } alt="Alice"/>
    </div>
  );
}