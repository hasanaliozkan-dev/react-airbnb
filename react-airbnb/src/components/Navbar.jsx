import React from "react";
import AirBnbLogo from "../assets/airbnb-logo.png";

export default function Navbar() {
    return(
        <nav className="navbar">
            <img src={AirBnbLogo} alt="airbnb logo" />
        </nav>
    )
}