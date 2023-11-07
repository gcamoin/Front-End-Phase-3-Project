import React from "react"
import {Link} from "react-router-dom"

    const NavBar = () => {
        return (
            <nav className="nav" >
                <Link to="/">Movies</Link><br />
                <Link to="/about">About</Link><br />
            
            
            </nav>
        )
    }




export default NavBar;