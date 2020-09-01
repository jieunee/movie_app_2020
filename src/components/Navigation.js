import React from 'react';
<<<<<<< HEAD
import {Link} from 'react-router-dom';
=======
import { Link } from 'react-router-dom';
>>>>>>> 27515f13daddc947fc4591ac9c3ab39a5851c17e
import './Navigation.css'

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;