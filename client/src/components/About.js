import React, { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";

function About() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFirstName("");
        setLastName("");
        setEmail("");
    };


    return (
    <div>
        <h2>HELLO</h2>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div style={{ textAlign: "center", maxWidth: "400px", padding: "1rem", border: "1px solid #ccc", borderRadius: "4px" }}>
                <h1>Want More Recipes?!</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Field required widths="equal">
                        <Form.Input
                        required 
                        size = "small"
                        label="First Name"
                        placeholder="FIRST NAME"
                        name="First Name"
                        style={{ borderRadius: "25px" }}
                    />
                    <Form.Input
                        required
                        size="small"
                        label="Last Name"
                        placeholder="LAST NAME"
                        name="Last Name"
                        style={{ borderRadius: "25px" }}
                        onChange={handleFirstNameChange}
                    />
                    <Form.Input
                        required
                        size="small"
                        label="Email"
                        placeholder="EMAIL ADDRESS"
                        name="Email"
                        style={{ borderRadius: "25px" }}
                        onChange={handleEmailChange}
                    />
                        </Form.Field>
                    <Form.Button type="submit" style={{ width: "100%", padding: "0.5rem", margin: "0.5rem 0" }}>Subscribe</Form.Button>
                </Form>
            </div>
        </div>
    </div>
    );
}

export default About;