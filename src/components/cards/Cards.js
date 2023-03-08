import React from 'react';
import "./cards.css"
import {Navigate, Link, useNavigate} from "react-router-dom";

const Cards = ({items}) => {

    return (
        <Link to={`/${items.id}`}>
            <div className={"cards"}>
                <img className={"img"} src={items.image} alt=""/>
                <h1 className={"cards_title"}>{items.title}</h1>
            </div>
        </Link>
    );
};

export default Cards;