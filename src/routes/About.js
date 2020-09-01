import React from 'react';
<<<<<<< HEAD
import './About.css';

function About() {
    return (
        <div className="about__container">
            <span>
                "Freedom is the freedom to say that thow plus who make four. if that is granted. all else follows."
            </span>
            <span>- George Orwell, 1984</span>
=======
import './About.css'

function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <span>
                "Freedom is the freedom to sa that two plus two make four. 
                If that is granted, all else 
                follows."
            </span>
            <span>
                - George Orwell, 1984
            </span>
>>>>>>> 27515f13daddc947fc4591ac9c3ab39a5851c17e
        </div>
    );
}

export default About;