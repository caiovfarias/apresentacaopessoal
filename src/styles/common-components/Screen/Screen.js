import styled from "styled-components";
import { Colors, FontFamilies } from "../../shared/DesignTokens"

export const Screen = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: ${Colors.BLACK};
font-family: ${FontFamilies.PRIMARY};
`
