import React from "react";
import styled from "styled-components";
import LeftArrow from '../../assets/img/left-arrow.png';
import RightArrow from '../../assets/img/right-arrow.png';
import { PaginationContext } from "../Structurals/GlobalStructure.component";


type GlobalButtonProps = {
    label: string
}

const GlobalButtonComponent = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-size: 1rem;
    width: 100px;
    height: 30px;
    padding: 18px 60px;
    background-color: #02061dd6;
    color: #eeeeee;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        opacity: .7;
        transition: 0.2s;
    }
    &:active{
        opacity: 1;
        background: #00507a;
    }
`;

const ButtonIcon = styled.img`
    filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(120deg) brightness(104%) contrast(101%);
    width: 22px;
`

const GlobalButton = (props: GlobalButtonProps) => {

    const {actualPage, setActualPage} = React.useContext(PaginationContext)

    function handleButtonPagination(){
        if(props.label === 'Avançar'){
            setActualPage(actualPage+1)
        }

        if(props.label === 'Voltar'){
            setActualPage(actualPage-1)
        }
    }

    return (
        <>
            <GlobalButtonComponent onClick={()=>{
                handleButtonPagination()
            }} >
                {props.label}
            </GlobalButtonComponent>
        </>
    )
}

export default GlobalButton