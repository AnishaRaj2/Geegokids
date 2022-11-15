import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../App.css";

const Navbar = () => {
    return (
        <>
            <div className="Navbar">
                <Link to="/"> 
                    <img 
                        src="/images/geegokids_logo_rgb_white.svg" 
                        alt="logo" 
                    /> 
                </Link>
                <div>
                    <ul>
                        <li>
                            <Link to="/AtSchool">At Schools</Link>
                        </li>
                        <li>
                            <Link to="/AtNurseries">At Nurseries</Link>
                        </li>
                        <li>
                            <a 
                                href="https://www.geegokids.com/en/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i class="fa-solid fa-house"></i>
                                Homepage
                            </a>
                        </li>
                        <li>
                            <i class="fa-solid fa-user"></i>
                            Login
                        </li> 
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;