  import React, { useState } from 'react';
  import NavTabs from "./NavTabs";
  import About from "./About";
  import Contact from "./Contact";
  import Portfolio from "./Portfolio";
  import Resume from "./Resume";
  
  function Header() {
    const [currentPage, handlePageChange] = useState("About");
  
    const renderPage = () => {
      switch (currentPage) {
        case "About":
          return <About />;
        case "Portfolio":
          return <Portfolio />;
        case "Contact":
          return <Contact />;
        case "Resume":
          return <Resume />;
  
        default:
          return <About />;
      }
    };
  
    return (
      <div>
        <nav className="navbar">
          <div className="navbar-brand">
           
              <span className="content is-large">Alice Silva</span>
           
          </div>
        </nav>
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        <main>
          <div>{renderPage(currentPage)}</div>
        </main>
      </div>
    );
  }
  
  export default Header;