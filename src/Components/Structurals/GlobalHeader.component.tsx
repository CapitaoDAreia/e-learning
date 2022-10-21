import React from "react";

import styled from "styled-components";
import { locale } from "../../global.presets";

const LogoImg = require('../../assets/img/logo.png')

const GlobalHeaderComponent = styled.div`

    box-sizing: border-box;

    width: 900px;
    padding: 5px 20px;

    /* font-size: 12px; */


    background-color: #d3d3d3;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const GlobalHeader = () => {
    
    return (
        <GlobalHeaderComponent>
            <img src={LogoImg} alt="logo" />
            <p>{locale.title}</p>
        </GlobalHeaderComponent>
    )
}

export default GlobalHeader