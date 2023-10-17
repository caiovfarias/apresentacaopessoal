import styled from "styled-components"
import { Colors, FontSizes, FontWeights } from "../../shared/DesignTokens"

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

export const FileInput = styled.div`
  
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: inline-block;


.file-input-label {
  background-color: #4CAF50; 
  color: white;
  padding: 10px 20px;
  text-align: center;
  display: block;
  cursor: pointer;
}

.file-input-label input[type="file"] {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  font-size: 20px;
  cursor: pointer;
  opacity: 0;
}

.file-input-label:hover {
  background-color: #45a049;
}

`

export const CheckboxInputContainer = styled.div`
height: auto;
width: 300px;
border-radius: 10px;
border-style: none;
color: ${Colors.BLACK};
font-weight: ${FontWeights.BOLD};
font-size: ${FontSizes.ONE_QUARTER};

`