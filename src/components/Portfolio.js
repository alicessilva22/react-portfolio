import React from "react";
import Project from "./Project";
import Book from "../img/BookNook.png"

const projects = [
  {
    id: 0,
    title: "BookNook",
    image: Book,
    description: "This application allows you to create your library and organize book by genres or if they were read.",
    repo: "https://github.com/kleylakb89/book-nook",
    live: "https://dry-bastion-57106.herokuapp.com",
  },
  {
    id: 1,
    title: "Food&Drink",
    image: "/img/techtopics.png",
    description: "You can search for Recipe for different drinks or ingredients to make a delicious meal.",
    repo: "https://github.com/VarunTanna/ProjectOne",
    live: "https://varuntanna.github.io/ProjectOne",
  },
  
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;


