import styled from "styled-components";

export const StyledMainContent = styled.div`
    box-sizing: border-box;
    height: fit-content;
    padding: 2%;
    width: 80%;
    margin: 1% auto;
    background-color: ${pr => pr.theme.backgroundMainColor} ;
    border: 1px ${pr => pr.theme.borderGrey} solid;
    img{
        box-sizing: border-box;
        height: 500px;
        width: auto;
    }
    p.copyright{
       font-style: italic;
    }
`
