import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import { useHistory } from "react-router-dom";
import {UserContext} from "./UserContext";
import { NavLink } from 'react-router-dom';


const HeaderContainer = styled.header`

    width: 100%; 
    padding: 0;
    margin: 0; 
`;

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center; 
`;

const NavbarList = styled.ul`
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const NavbarItem = styled.li`
    margin-right: 1rem; 
`;

const NavbarLink = styled.a`
    font-family: "Times New Roman", sans-serif; 
    font-size: 20px; 
    font-weight: bold; 
    color: #333; 
    text-decoration: none; 
    
    
    &:hover {
      color: #ff0000; /* Change the font color on hover */
    }
    
`;

function Header({user, setUser, onLogout}) {

    function handleClick() {
        redirectHome()
    }

    let navigate = useHistory()

    function redirectHome() {
        navigate('/')
    }

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => {
            onLogout()
            redirectHome()
        });
    }



    return(
        
        <HeaderContainer> 
            <div className="nav">
            <Logo>
                <Link to="/">BACCHUS BITES</Link>
            </Logo>
            <Nav>
                <Button variant="outline" onClick={handleLogout}>
                Logout
                </Button>
            </Nav>
            <NavbarContainer>
                <NavbarList>
                <NavbarItem>
                    <NavLink exact to = "/">Home</NavLink>
                </NavbarItem>
                <NavbarItem>
                    <NavLink to = "/recipes">Recipes</NavLink>
                </NavbarItem>
                <NavbarItem>
                    <NavLink to =  "/ingredients">Ingredients</NavLink>
                </NavbarItem>
                <NavbarItem>
                    <NavLink  to = "/comments">Comments</NavLink>
                </NavbarItem>
                <NavbarItem>
                    <NavLink  to = "/about">About</NavLink>
                </NavbarItem>
                <NavbarItem>
                    <NavLink  to = "/logout">LogOut
                    </NavLink>
                </NavbarItem>
                </NavbarList>
            </NavbarContainer>
            </div>
        </HeaderContainer>
    )
}

export default Header;


const Wrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
`;


const Logo = styled.h1`
    font-family: "Noto Serif Japanese";
    font-size: 3rem;
    color: black;
    letter-spacing: 0.5em;
    margin: 8px 0 16px;
a {
    color: inherit;
    text-decoration: none;
}
`;

const Nav = styled.nav`
    display: flex;
    gap: 4px;
    position: absolute;
    right: 8px;
`;
