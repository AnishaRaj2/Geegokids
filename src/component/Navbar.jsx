import React from "react";
import "./Navbar.css";
import "../App.css";


const Navbar = () => {
    return (
        <>
            <nav className="Navbar">
                <a href="/" className="Logo"> <img src="/images/geegokids_logo_rgb.png" alt="logo" /> </a>
                <ul>
                    <li><a href="/AtSchools">At Schools</a></li>
                    <li><a href="/AtNurseries">At Nurseries</a></li>
                    <li><a href="https://www.geegokids.com/en/"><i class="fa-solid fa-house"></i>Homepage</a></li>
                    <li><i class="fa-solid fa-user"></i>Login</li> 
                </ul>
            </nav>
        </>
    );
}

export default Navbar;