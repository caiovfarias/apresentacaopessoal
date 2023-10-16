import styled from "styled-components"
import { Colors, FontWeights } from "../../shared/DesignTokens"

export const Input = styled.input`
height: 25px;
width: 300px;
border-radius: 10px;
border-style: none;
color: ${Colors.WHITE};
font-weight: ${FontWeights.REGULAR};
background-color: ${Colors.BLUE} ;
opacity: 0.9;

&::placeholder {
    padding: 7px;
    color: ${Colors.WHITE};
}
`