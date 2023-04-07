import React, { useState } from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { Button } from "../styles";



function Login( {onLogin} ) {
    const [showLogin, setShowLogin] = useState(true);

    return (

        <Wrapper>
            <Logo>Bacchus Bites</Logo>
        {showLogin ? (
            <>
                <LoginForm onLogin = {onLogin} />
                <Divider />
                <p>
                    Don't have an account? &nbsp;
                    <Button color="secondary" onClick={() => setShowLogin(false)}>Sign Up</Button>
                </p>
            </>
        ) :(
            <>
                <SignUpForm onLogin = {onLogin}/>
                <Divider />
                <p>
                    Already have an account? &nbsp;
                    <Button color="secondary" onClick={() => setShowLogin(true)}>
                        Log In
                    </Button>
                </p>
            </>
            )}
        </Wrapper>
    );
}

const Logo = styled.h1`
    font-family: "wfont_ce530d_5adddf98a77148a3805ed07707ba48ad,wf_5adddf98a77148a3805ed0770,orig_acta_display_light";
    font-size: 3rem;
    color: black;
    margin: 8px 0 16px;
`;

const Wrapper = styled.section`
    max-width: 500px;
    margin: 40px auto;
    padding: 16px;
`;

const Divider = styled.hr`
    border: none;
    border-bottom: 1px solid #ccc;
    margin: 16px 0;
`;

export default Login;