import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import { useHistory } from "react-router-dom";



function NavBar(user, onLogout) {

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
    return (
        <Wrapper>
        <Logo>
            <Link to="/">BACCHUS BITES</Link>
        </Logo>
        <Nav>
            <Button variant="outline" onClick={handleLogout}>
            Logout
            </Button>
        </Nav>

        <nav className="NavBar">
            <h2>
                {user ?
                `Welcome, ${user.name}!`
                : ''}
            </h2>
            <div className='navigate-to'>
        
                {user ?
                <>
                    <Link to="/logout">
                    <button className="NavBarButton" onClick={handleLogout}>Logout</button>
                    </Link>
                    
                </>
                    : ''
                }
        
                {/* <Link to="/about">
                    <button className="NavBarButton">About</button>
                </Link> */}
        
            </div>
            
            </nav>
        </Wrapper>
        );
    }


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

export default NavBar;
