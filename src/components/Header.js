import React from 'react';

const style = {
    backgroundColor: "#gray",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%"
  };

function Header() {
    return (
        <header className='header'>
            <h2>Alice Silva</h2>
            <nav>
                <NavLink to="/"></NavLink>
                <NavLink to="/about"><About /></NavLink>
                <NavLink to="/portfolio"><Portfolio /></NavLink>
                <NavLink to="/contact"><Contact /></NavLink>
                <NavLink to="/resume"><Resume /></NavLink>
            </nav>
        </header>
    )

}

export default Header;