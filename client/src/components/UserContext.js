import React, { createContext, useEffect, useState } from "react";
import App from "./App";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [recipes, setRecipes] = useState(null);

    useEffect(() => {
        // auto-login
        fetch("/check_session").then((r) => {
        if (r.ok) {
            r.json().then((user) => setUser(user));
        }
        });
    }, []);

    useEffect(() => {
        fetch("/recipes")       // link for the books DB
            .then((res) => res.json())
            .then((data) => setRecipes(data));
    }, []);
    
    
    return (
        <UserContext.Provider value={[user, setUser, recipes, setRecipes]}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;