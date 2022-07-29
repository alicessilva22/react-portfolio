import React from "react";
import { Github, Link } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';


const style = {
  backgroundColor: "#grey",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%"
};

export default function Footer() {
  return (
    <div>
      <div style={style}>Copyright 2022 
      <a href="https://github.com/alicessilva22"><Github /></a> 
      <a href="https://www.linkedin.com/in/alice-silva-b698791ab/"><Linkedin /></a> 
      </div>
    </div>
  );
}