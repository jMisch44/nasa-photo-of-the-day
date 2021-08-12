import React from "react";
import styled from "styled-components";


export default function Photo(props) {
    
    const { photo } = props;

    return (
        <img src={photo} alt="Daily Picture"/>
    )
}
