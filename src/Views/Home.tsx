import React from "react";
import styled from "styled-components";
import BackGroundImage from '../assets/img/start-page.png'

import { locale } from "../global.presets";

const HomeComponent = styled.div`
    background: url(${BackGroundImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #eeeeee;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const PopUpHomeComponent = styled.div`
    width: 350px;
    height: 175px;
    padding: 10px;
    background-color: grey;
    border: 3px solid #eeeeee;
    border-radius: 10px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

`;

const Home = () => {
    return (
        <HomeComponent>
            <PopUpHomeComponent>
                <div>
                    <h3>{locale.wellcome}</h3>
                </div>
            </PopUpHomeComponent>
        </HomeComponent>
    )
}

export default Home