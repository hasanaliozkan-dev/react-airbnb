import React from "react";

import Stars from "../assets/star.png";  
export default function Card(props) {
    let badgeText
    if(props.item.openSpots === 0){
        badgeText = "SOlD OUT"        
    }else if(props.item.location === "Online"){
        badgeText = "Online"
    }
    return(
        <div className="card">
            <div className="card--badge"> {badgeText} </div>
            <img src={`../public/${props.item.coverImg}`} alt="profile"  className="card--image"/>
            <div className="card--stats">
                <img src={Stars} from alt="stars" className="card--star"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"> <span className="bold"> From ${props.item.price} </span> / person</p>
        </div>
    )
}