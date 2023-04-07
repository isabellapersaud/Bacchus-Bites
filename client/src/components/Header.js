import React from 'react'
import {NavLink} from "react-router-dom";

function Header() {
        return(
        <header>
    
            <div classname = 'nav'>
            <nav>
                <div className="Route Buttons">
                <NavLink exact to="/" activeClassName="active-nav-link" className="nav-btn">
                <span>Home</span>
                </NavLink>
                <NavLink exact to="/recipes" activeClassName="active-nav-link" className="nav-btn">
                <span>Recipes</span>
                </NavLink>
                <NavLink exact to="/ingredients" activeClassName="active-nav-link" className="nav-btn">
                <span>Ingredients</span>
                </NavLink>
                <NavLink exact to="/comments" activeClassName="active-nav-link" className="nav-btn">
                <span>Comments</span>
                </NavLink>
                </div>
            </nav>
            </div>
        </header>
        )
    }
export default Header;

