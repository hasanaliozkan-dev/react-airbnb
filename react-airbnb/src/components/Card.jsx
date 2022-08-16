import React from "react";

import Stars from "../assets/star.png";  
export default function Card({img,rating,reviewCount,country,title,price}) {
    console.log(img,rating,reviewCount,country,title,price)
    return(
        <div className="card">
            <img src={`../public/${img}`} alt="profile"  className="card--image"/>
            <div className="card--stats">
                <img src={Stars} from alt="stars" className="card--stars"/>
                <span>{rating}</span>
                <span className="gray">({reviewCount}) • </span>
                <span className="gray">{country}</span>
            </div>
            <p>{title}</p>
            <p> <span className="bold"> From ${price} </span> / person</p>
        </div>
    )
}