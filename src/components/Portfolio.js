import React from "react";
import Project from "./Project";
import Book from "../img/BookNook.png";
import Food from "../img/Food&Drinks.png";
import Password from "../img/Password.png";
import Scheduler from "../img/Scheduler.png";

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
    image: Food,
    description: "You can search for Recipe for different drinks or ingredients to make a delicious meal.",
    repo: "https://github.com/VarunTanna/ProjectOne",
    live: "https://varuntanna.github.io/ProjectOne",
  },
  {
    id: 2,
    title: "Password Generator",
    image: Password,
    description: "Generate a secure password based on your choices of inputs.",
    repo: "https://github.com/alicessilva22/Password-Generator",
    live: "https://alicessilva22.github.io/Password-Generator/",
  },
  {
    id: 3,
    title: "Work Day Scheduler",
    image: Scheduler,
    description: "A simple calendar app for scheduling your work day, powered by MomentJS.",
    repo: "https://alicessilva22.github.io/Calendar-Module05/",
    live: "https://alicessilva22.github.io/Calendar-Module05/",
  },
];

function Portfolio() {
  return (
    <div display="flex">
      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;