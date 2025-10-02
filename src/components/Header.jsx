import React from "react";
import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header className="site-header">
          <div className="container-header-inner">
            <div className="header-name">
            <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Timotheo</NavLink>
            </div> 
            <nav className="nav">
                <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Hem</NavLink>
                <NavLink to="/projects" className={({isActive}) => isActive ? "active" : ""}>Projekt</NavLink>
                <NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>Kontakt</NavLink>
            </nav>
          </div>
        </header>
        );
    }    

