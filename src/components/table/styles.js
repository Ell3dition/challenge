import styled from "styled-components";
import { globalStyles } from "../../globalStyles/globalStyles";

export const TableUsers = styled.table`
background-color: white;
border-collapse: collapse;
border-radius: 10px 10px 10px 10px;
margin-top: 3px;
overflow: hidden;
text-align: left;
width: 80%;
`
export const Thead = styled.thead`
background-color: ${globalStyles.mainColor};
color: white;
`

export const Th = styled.th`
padding: 15px;
`
export const Tbody = styled.tbody`
color: gray;
`

export const TrBody = styled.tr`
background-color: ${props => {
        if (props.isDiferent) return globalStyles.trConditionalColor
        return "transparent"
    }};
color: ${props => {
        if (props.isDiferent) return globalStyles.btnConditionalColor
        return "#7faee3"
    }};

td:nth-child(6) button{
color: ${props => {
        if (props.isDiferent) return "white"
        return globalStyles.mainColor
    }};
}
&:hover{
    background-color: ${globalStyles.hoverTrColor};
    color: ${globalStyles.hoverLetterColor};
}
`

export const Td = styled.td`
border: 1px solid;
border-style: inset;
padding: 15px;
&:nth-child(6){
    padding: 0;
}
`
export const Button = styled.button`
background-color: transparent;
border: none;
font-size: 35px;
`

export const Tfoot = styled.tfoot`
text-align:end;
& span {
    color: "#7faee3";
}
`