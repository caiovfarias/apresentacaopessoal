import styled from "styled-components";
import { Colors } from "../../shared/DesignTokens";

export const MainContainer = styled.div`
height: 500px;
max-height: 500px;
width: 100%;
background-color: ${Colors.GRAY};
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
overflow-y: scroll;

`

export const MainContainer2 = styled.div`
height: auto;
width: 100%;
background-color: ${Colors.GRAY};
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

`