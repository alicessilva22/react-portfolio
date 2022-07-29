import React from 'react';

const style = {
  backgroundColor: "#lightgray",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  height: "100%",
  width: "100%"
};

export default function About() {
  return (
    <div style={style}>
      <h1>Alice Silva</h1>
      <p>
        Hello, I'm Alice. I'm a musician turned Software Developer. I am currently finishing a Full-Stack Web Development Bootcamp at UNC Charlotte.
      </p>
    </div>
  );
}