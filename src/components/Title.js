import React from "react";
import styled from "styled-components";

const StyledTitle = styled.header`
    
`

export default function Title(props) {

    const { title } = props;

    return (
        <div className='title'>
            <h1>{title}</h1>
        </div> 
    )
}
