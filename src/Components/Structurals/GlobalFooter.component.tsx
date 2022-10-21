import React from "react";

import styled from "styled-components";
import GlobalButton from "../Basics/GlobalButton.component";

import { Link } from "react-router-dom";
import { locale } from "../../global.presets";

const GlobalFooterComponent = styled.div`
    width: 100%;
    padding: 5px 10px;

    background-color: #d3d3d3;

    display: flex;
    justify-content: space-evenly;
`;

const GlobalFooter = (props: {}) => {
    return (
        <GlobalFooterComponent>
            <p>{locale.footer}</p>
        </GlobalFooterComponent>
    )
}

export default GlobalFooter