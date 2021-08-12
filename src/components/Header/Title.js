import React from "react";
import styled from "styled-components";
import theme from "../theme";

const StyledTitle = styled.header`
    background-color: ${pr => pr.theme.primaryColor};
    color: ${pr => pr.theme.white};
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    width: 100%;
`;

export default function Title(props) {

    const { title } = props;

    return (
            <StyledTitle className='title'>
                <h1>{title}</h1>
            </StyledTitle>
    )
}
