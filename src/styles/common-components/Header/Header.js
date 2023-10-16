import styled from "styled-components";
import { Colors } from "../../shared/DesignTokens";

export const Header = styled.div`
height: 125px;
width: 100%;
background-color: ${Colors.BLUE};
display: flex;
flex-direction: column;
align-items: center;

a{
    text-decoration: none;
    color: white;
    cursor: pointer;
}

h1{
    color: white;
}

`;

export const Links = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
`