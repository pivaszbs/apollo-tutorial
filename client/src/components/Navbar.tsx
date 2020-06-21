import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <NavbarUnAuth />
        </nav>
    );
};

const NavbarAuth = () => (
    <ul>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/search">Search</NavLink>
        </li>
        <li>
            <NavLink to="/add/recipe">AddRecipe</NavLink>
        </li>
        <li>
            <NavLink to="/profile">Profile</NavLink>
        </li>
        <button>
            Signout
        </button>
    </ul>
);

const NavbarUnAuth  = () => (
    <ul>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/search">Search</NavLink>
        </li>
        <li>
            <NavLink to="/signin">Signin</NavLink>
        </li>
        <li>
            <NavLink to="/signup">Signup</NavLink>
        </li>
    </ul>
)

export default Navbar;