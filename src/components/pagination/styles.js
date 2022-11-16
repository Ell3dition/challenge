import styled from "styled-components";
import { globalStyles } from "../../globalStyles/globalStyles";

export const ContainerPagination = styled.div`
margin-top: 25px;
width: 100%;
`
export const Ul = styled.ul`
display: flex;
justify-content: end;
`
export const Li = styled.li`
list-style-type: none;
`
export const ButtonPagination = styled.button`
background-color: ${props => props.active ? globalStyles.mainColor : 'transparent'};
border:${props => {
        if (props.disabled) return ".4px solid grey"
        return ".4px solid #7faee3"
    }};
font-weight: bold;
font-size: 12px;
border-radius: 45px;
color: ${props => {
        if (props.disabled) return "grey"
        if (props.active) return "white"
        return globalStyles.mainColor
    }};
height: 35px;
margin-right: 6px;
width: 35px;
`