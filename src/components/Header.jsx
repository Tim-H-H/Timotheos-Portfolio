import React from "react";
import { Navlink } from "react"

export default function Header() {
    return (
        <header className="site-header">
          <div className="container-header-inner">
            <div className="brand">Timotheo</div>
            <nav className="nav">
                <Navlink to="/" className={({isActive}) => isActive ? "active" : ""}>Hem</Navlink>
                <Navlink to="/projects" className={({isActive}) => isActive ? "active" : ""}>Projekt</Navlink>
                <Navlink to="/contact" className={({isActive}) => isActive ? "active" : ""}>Kontakt</Navlink>
            </nav>
          </div>
        </header>
        );
    }    

