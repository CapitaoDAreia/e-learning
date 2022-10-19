import React from "react";

import styled from "styled-components";
import GlobalButton from "../Basics/GlobalButton.component";

import { Link } from "react-router-dom";

const GlobalFooterComponent = styled.div`
    width: 100%;
    padding: 10px 5px;

    background-color: #d3d3d3;

    display: flex;
    justify-content: space-evenly;
`;

const GlobalFooter = (props: {}) => {
    return (
        <GlobalFooterComponent>
            <GlobalButton label="ANTERIOR"/>
            <GlobalButton label="PRÓXIMO"/>
        </GlobalFooterComponent>
    )
}

export default GlobalFooter