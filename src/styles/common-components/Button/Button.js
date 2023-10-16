import styled from "styled-components"
import { Colors, FontWeights } from "../../shared/DesignTokens"

export const Button = styled.button`
height: 30px;
width: 150px;
padding: 2px;
cursor: pointer;
border-radius: 30px;
border-style: none;
color: ${Colors.WHITE};
font-weight: ${FontWeights.BOLD};
background-color: ${(props) => props.variant === 'secondary' ? Colors.MEDIUMGRAY : Colors.PINK}  ;

`

export const AddOrRemoveButton = styled(Button)`
width: 120px;
background-color: ${(props) => props.variant === 'remove' ? Colors.RED : Colors.GREEN}  ;

`