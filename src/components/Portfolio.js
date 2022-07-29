import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "BookNook",
    image: "/img/pocket-traders.png",
    description: "Allows you to trade pokemon and create a team. I did the design and front end!",
    repo: "https://github.com/dbottoni/PokeTrader",
    live: "https://pocket-traders.herokuapp.com/",
  },
  {
    id: 1,
    title: "TechTopics",
    image: "/img/techtopics.png",
    description: "Allows you to edit and post blogs. You can also leave comments on your own blog or the blogs of others.",
    repo: "https://github.com/EmilyNecciai/tech-topics",
    live: "https://floating-thicket-72381.herokuapp.com/",
  },
  {
    id: 2,
    title: "Quizam",
    image: "/img/quizam.png",
    description: "Allows instructors to quickly create quizzes and print the quiz to a PDF to distribute to their students, as well as keep a copy for themselves with the answer key!",
    repo: "https://github.com/EmilyNecciai/quizam",
    live: "https://quizam.herokuapp.com/",
  },
  {
    id: 3,
    title: "noheadphones",
    image: "/img/noheadphones.png",
    description: "Gives you a recommendation for media that will entertain you during your commute.",
    repo: "https://github.com/EmilyNecciai/no-headphones",
    live: "https://emilynecciai.github.io/no-headphones/",
  },
  {
    id: 4,
    title: "Duly Noted - Note Taker App",
    image: "/img/duly-noted.png",
    description: "Write extensive notes and keep track of tasks, then save them for later reading or deletion.",
    repo: "https://github.com/EmilyNecciai/duly-noted",
    live: "https://obscure-hollows-28379.herokuapp.com/",
  },
  {
    id: 5,
    title: "Basic Portfolio",
    image: "/img/work-portfolio.png",
    description: "A basic work portfolio that holds my projects for the full stack development class.",
    repo: "https://github.com/EmilyNecciai/work-portfolio",
    live: "https://emilynecciai.github.io/work-portfolio/",
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


