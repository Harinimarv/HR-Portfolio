import React from "react";
import "./introduction.css";
import { Card, CardContent, Typography } from "@mui/material";

const Introduction = () => {

    const nameContent = () => {
        return (
            <div id="harini" className="animated-title">
                <div className="text-top">
                    <div>
                        <span>Hi,</span>
                        <span>I'm Harini Ravindran</span>
                    </div>
                </div>
                <div className="text-bottom">
                    <div>
                        <span>Web Developer</span>
                    </div>
                </div>
            </div>
        );
    }

    const About = () => {
        return (
            <div id="about" className="about-container">
                <Card sx={{  maxWidth: 800, margin: "0 auto", padding: 2, borderRadius: 3, boxShadow: 3 }}>
                    <CardContent>
                        <Typography variant="h4" component="h1" gutterBottom>
                            The story so far
                        </Typography>
                        <Typography variant="body1">
                            I’m a front-end developer who loves turning creative ideas into functional, beautiful web pages.
                        </Typography>
                        <Typography variant="body1">
                            Debugging? That’s my hobby!!! I thrive on solving those tricky bugs and transforming them into smooth, glitch-free interfaces.
                        </Typography>
                        <Typography variant="body1">
                            When I’m not coding, you’ll find me unwinding with some Marvel content—because every developer needs a little superhero inspiration.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    };

    return (
        <div className="introduction-container"> 
            <div className="name-content-container">
                {nameContent()}
            </div>
            <div className="about-content-container">
                {About()}
            </div>
        </div>
    );
}

export default Introduction;
