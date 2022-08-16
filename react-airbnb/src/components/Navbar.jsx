import React from "react";
import AirBnbLogo from "../assets/airbnb-logo.png";

export default function Navbar() {
    return(
        <nav >
            <img src={AirBnbLogo} alt="airbnb logo"  className="nav--logo"/>
        </nav>
    )
}