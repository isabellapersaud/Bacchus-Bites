import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import { useHistory } from "react-router-dom";
import {UserContext} from "./UserContext";
import { NavLink } from 'react-router-dom'


const HeaderContainer = styled.header`
    color: black; /* Set the color of links to black */
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
    justify-content: center;
    color: black; /* Set the color of links to black */
`;

const NavbarItem = styled.li`
    margin-right: 5rem; 
    color: black;
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition: color 0.3s ease-in-out;
    font-size: 3rem
    position: relative;
    letter-spacing: 0.5em;
    color: black; /* Set the color of links to black */


`;

const NavbarLink = styled.a`
    font-family: 'Playfair Display', serif; 
    font-size: 50px;
    color: black; 
    text-decoration: none; 
    margin: 0;
    
    
    &:hover {
        color: black
    }
    
`;


const Logo = styled.h1`
    font-family: 'Playfair Display', serif; 
    font-weight: 400;
    word-wrap: break-word; 
    font-size: 5rem;
    font-weight: normal;
    color: black;
    position: relative;
    letter-spacing: 0.5em;
    margin: 70px 60px 70px 60px;
    text-align: center;
    margin-top: 20px;
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
    font-size: 'Playfair Display', serif; 
    font-size: 1rem;
    color: black; 

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

            <ul
                style={{
                    listStyleType: 'none', // Remove default list style
                    padding: '0', // Remove default padding
                    margin: '0', // Remove default margin
                    padding: '10px', // Add padding
                    fontSize: '30px', // Set font size
                    color: '#000', // Set text color
                    fontFamily: 'Playfair Display', 
                    display: 'flex', // Use flexbox to center align
                    justifyContent: 'right', // Center align horizontally
                    alignItems: 'right', // Center align vertically
                    height: '100%', 
            }}
        >
            Welcome Back, {user.username}
        </ul>
        <Nav>
            <Button
                variant="outline"
                onClick={handleLogout}
                style={{
                    color: 'black', // Set text color to black
                    backgroundColor: 'transparent', // Set background color to transparent
                    border: '1px solid black', // Add a border
                    borderRadius: '4px', // Add border radius for rounded corners
                    padding: '5px 10px', // Add padding for button size
                    cursor: 'pointer', // Show pointer cursor on hover
                    textDecoration: 'none', // Remove underline
                    fontSize: '14px', // Set font size
                    margin: '0', // Remove margin
                }}
            >
                Logout
            </Button>

                
            </Nav>
            <Logo>
                <Link to="/">BACCHUS BITES</Link>
            </Logo>
            <NavbarContainer>
                <NavbarList>
                <NavbarItem>
                    <NavLink ink exact to = "/" style={{ color: "black" }}>Home</NavLink >
                </NavbarItem>
                <NavbarItem>
                    <NavLink  to = "/recipes" style={{ color: "black" }}>Recipes</NavLink >
                </NavbarItem>
                <NavbarItem>
                    <NavLink  to =  "/ingredients" style={{ color: "black" }}>Ingredients</NavLink >
                </NavbarItem>
                <NavbarItem>
                    <NavLink   to = "/about "style={{ color: "black" }}>About</NavLink >
                </NavbarItem>
                </NavbarList>
            </NavbarContainer>
            </div>
        </HeaderContainer>
    )
}

export default Header;
