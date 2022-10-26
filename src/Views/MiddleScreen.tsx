import React from "react";

import styled from "styled-components";
import Book from "../Components/Basics/BookComponent.component";
import { locale } from "../global.presets";

const MiddleScreenTestComponent1 = styled.div`
    background-color: #eeeeee;
    color: #000000;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const MiddleScreen = () => {
    return (
        <MiddleScreenTestComponent1>
            <Book
                title='O que é XYZ?'
                subtitle='Subtitle'
                first='Exemplo de tema'
                second='Exemplo de tema 2'
                third='Exemplo de tema 3'
                fourth='Exemplo de tema 4'
            />
        </MiddleScreenTestComponent1>
    )
}

export default MiddleScreen