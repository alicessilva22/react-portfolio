import React from "react";

function Project(props) {
  return (
    <div className="card-group">
        {props.projects.map((project) => (
            <div className="card">
              <img className="card-image" src={project.image} alt="Project" />

              <div className="container">
                <div className="card-header">
                    <p className="card-title" key={project.id}>
                      {project.title}
                    </p>
                </div>

                <div className="card-text">
                  {project.description}
                  <br />
                  <br />
                    <footer className="card-footer" position="fixed">
                      <a
                        href={project.repo}
                        className="card-footer-item"
                        target="_blank" rel="noreferrer"
                      >
                        Github Repository
                      </a>
                      <br />
                      <a
                        href={project.live}
                        className="card-footer-item"
                        target="_blank" rel="noreferrer"
                      >
                        Live Site
                      </a>
                    </footer>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Project;


