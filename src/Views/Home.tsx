import React from "react";

import styled from "styled-components";
import GlobalButton from "../Components/Basics/GlobalButton.component";

const HomeComponent = styled.div`
    background-color: grey;
    color: #eeeeee;
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const Home = () => {
    return (
        <HomeComponent>
            <div>
                <h1>Home</h1>
                <h2>Clique em no botão abaixo para Iniciar o seu treinamento</h2>
            </div>
            <GlobalButton destination='/screen1' label="INICIAR"/>
        </HomeComponent>
    )
}

export default Home