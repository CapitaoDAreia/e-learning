import React from "react";

import styled from "styled-components";

const GlobalHeaderComponent = styled.div`
    width: 100%;
    padding: 10px 5px;


    background-color: #d3d3d3;

    display: flex;
    justify-content: space-evenly;
`;

const GlobalHeader = () => {
    return (
        <GlobalHeaderComponent>
            Header - Company Info
        </GlobalHeaderComponent>
    )
}

export default GlobalHeader