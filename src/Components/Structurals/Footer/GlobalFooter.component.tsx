import React from "react";
import styled from "styled-components";
import GlobalButton from "../../Basics/GlobalButton.component";

const GlobalFooterComponent = styled.div`
    width: 100%;
    padding: 5px 10px;
    background-color: #d3d3d3;
    display: flex;
    justify-content: space-evenly;
`;

type GlobalFooterProps = {
    setPagination: React.Dispatch<React.SetStateAction<number>>
    setCounter: React.Dispatch<React.SetStateAction<number>>
    counter: number
}

const GlobalFooter = (props: GlobalFooterProps) => {
    return (
        <GlobalFooterComponent>
            <GlobalButton counter={props.counter} setCounter={props.setCounter} setPagination={props.setPagination} label="Voltar" destination="página anterior"/>
            <GlobalButton counter={props.counter} setCounter={props.setCounter} setPagination={props.setPagination} label="Avançar" destination="próxima página"/>
        </GlobalFooterComponent>
    )
}

export default GlobalFooter