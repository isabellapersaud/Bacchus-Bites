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
        window.alert("You have been added to the list!");
        setFirstName("");
        setLastName("");
        setEmail("");
    };


    return (
    <div>
        <p>Hey everyone 👋

My name is Isabella! I am thrilled to share my family recipes with you all in hopes to further share my love and appreciation for my culture!

I first discovered my passion for cooking at a young age, around 12 years old, when I would spend afternoons helping my mother and grandmother in the kitchen. Watching my grandmother create mouthwatering dishes for my cousins and I was an experience that stayed with me and ultimately inspired me to pursue cooking as a hobby.

Over the years, I've honed my skills and experimented with different flavors and cuisines, and I'm excited to showcase some of my favorite recipes through Bacchus Bites! Whether you're an experienced cook or a beginner, my hope is that you'll find something new and exciting to try. 

I'm excited to share my passion for cooking with you through this app, and I hope that you'll find it to be a valuable resource in your own culinary journey. Thanks for stopping by!</p>
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





