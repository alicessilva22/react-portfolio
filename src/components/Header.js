import React from 'react';

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