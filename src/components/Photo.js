import React from "react";

export default function Photo(props) {
    
    const { photo } = props;

    return (
        <img src={photo} alt="Daily Picture"/>
    )
}
