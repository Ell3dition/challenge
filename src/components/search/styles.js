import styled from "styled-components";
import { globalStyles } from "../../globalStyles/globalStyles";

export const ContenedorSearch = styled.div`
border-collapse: collapse;
display: flex;
justify-content: space-between;
width: 80%;
`
export const Title = styled.h4`
margin-top: 20px;
color: ${globalStyles.titleColor};
`
export const WrapperSearch = styled.div`
display: flex;
justify-content: end;
position: relative;
width: 40%;
.icon-search{
    color: ${globalStyles.mainColor};
	position: absolute;
	right: 20%;
	top: 25%;
}
`

export const InputSearch = styled.input`
border: 1px solid #ccc;
border-radius: 30px;
font-size: 18px;
height: 45px;
margin-bottom: 20px;
padding-left: 15px;
width: 70%;
    &:focus {
        box-shadow: 0px 0px 25px 0px rgba(194,194,194,1);
        outline: 0 none;
    }
`

export const ButtonExport = styled.button`
background-color: ${globalStyles.btnExportColor};
border: 0;
border-radius: 50px;
color: white;
height: 50px;
margin-left: 10px;
width: 50px;
&:hover {
        box-shadow: 0px 0px 25px 0px rgba(194,194,194,1);
    }

`

