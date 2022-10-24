import React from "react";

import styled from "styled-components";
import GlobalButton from "../Basics/GlobalButton.component";

import { locale } from "../../global.presets";

const GlobalFooterComponent = styled.div`
    width: 100%;
    padding: 5px 10px;

    background-color: #d3d3d3;

    display: flex;
    justify-content: space-evenly;
`;

type GlobalFooterProps = {
    pagination: React.Dispatch<React.SetStateAction<number>>
}

const GlobalFooter = (props: GlobalFooterProps) => {
    return (
        <GlobalFooterComponent>
            <GlobalButton pagination={props.pagination} label="Voltar" destination="página anterior"/>
            <GlobalButton pagination={props.pagination} label="Avançar" destination="próxima página"/>
        </GlobalFooterComponent>
    )
}

export default GlobalFooter