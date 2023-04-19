import React, { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";
import "./About.css"

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
        <div id="intro-section" style={{ alignItems: "center", justifyContent: "center" , textAlign: 'center', fontFamily:'Tangerine',}}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", textAlign: "center", }}>
                <div style={{ maxWidth: "50%" }}>
                    <img src="https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg" alt="Chocolate Chip Cookie" style={{ maxWidth: "100%", height: "auto", margin: "1rem" }} />
                </div>
                <div style={{ flex: "1", maxWidth: "50%", }}>
                    <p style={{ fontSize: "1.2rem", margin: "0" }}>
                    Hey everyone 👋 My name is Isabella! I am thrilled to share my family recipes with you all in hopes to further share my love and appreciation for my culture!
                    I first discovered my passion for cooking at a young age, around 12 years old, when I would spend afternoons helping my mother and grandmother in the kitchen. Watching my grandmother create mouthwatering dishes for my cousins and I was an experience that stayed with me and ultimately inspired me to pursue cooking as a hobby.
                    Over the years, I've honed my skills and experimented with different flavors and cuisines, and I'm excited to showcase some of my favorite recipes through Bacchus Bites! Whether you're an experienced cook or a beginner, my hope is that you'll find something new and exciting to try.
                    I'm excited to share my passion for cooking with you through this app, and I hope that you'll find it to be a valuable resource in your own culinary journey. Thanks for stopping by!
                    </p>
                </div>





            <div>
                    <h1 style = {{textAlign: 'center', fontFamily:'Tangerine', fontSize: '50px', fontWeight: 'bold', letterSpacing: "0.5em"}}>Want More Recipes?!</h1>
                    <Form className="subscribe-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fff', padding: '1rem', borderRadius: '0.5rem', boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Subscribe for More Recipes</h2>
                            <Form.Field required widths="equal">
                                <Form.Input
                                    required 
                                    size="small"
                                    label="First Name"
                                    placeholder="FIRST NAME"
                                    name="First Name"
                                    value={firstName} // add value prop
                                    onChange={(e) => setFirstName(e.target.value)} // update onChange handler
                                    style={{ marginBottom: '1rem' }}
                                />
                                <Form.Input
                                    required
                                    size="small"
                                    label="Last Name"
                                    placeholder="LAST NAME"
                                    name="Last Name"
                                    value={lastName} // add value prop
                                    onChange={(e) => setLastName(e.target.value)} // update onChange handler
                                    style={{ marginBottom: '1rem' }}
                                />
                                <Form.Input
                                    required
                                    size="small"
                                    label="Email"
                                    placeholder="EMAIL ADDRESS"
                                    name="Email"
                                    value={email} // add value prop
                                    onChange={(e) => setEmail(e.target.value)} // update onChange handler
                                    style={{ marginBottom: '1rem' }}
                                />
                            </Form.Field>
                            <Form.Button type="submit" style={{ backgroundColor: '#ff6b6b', color: '#fff', fontWeight: 'bold', padding: '0.8rem 2rem', borderRadius: '0.5rem', marginTop: '1rem' }}>Subscribe Now</Form.Button>
                        </Form>
                    </div>
                </div>
            </div>
    );
}

export default About;