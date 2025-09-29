import React from "react";
import { Navlink } from "react"

function Header() {
    return (
        <header className="site-header">
            <div className="container-header-inner">
            <div className="brand">Timotheo</div>
            <nav className="nav">
                <Navlink to="/" className={({})}>Hem</Navlink>
                <Navlink>Projekt</Navlink>
                <Navlink>Kontakt</Navlink>
            </nav>
    </div>
</header>

    )
}    

