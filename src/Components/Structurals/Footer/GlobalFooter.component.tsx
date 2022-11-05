import React from "react";
import styled from "styled-components";
import GlobalButton from "../../Basics/GlobalButton.component";
import GlobalButtonSkeleton from "../../Basics/GlobalButtonSkeleton.component";

const GlobalFooterComponent = styled.div`
    width: 100%;
    padding: 10px 10px;
    background-color: #bfbfbf;
    display: flex;
    justify-content: space-evenly;
`;


const GlobalFooter = () => {
    return (
        <GlobalFooterComponent>
            <GlobalButton />
            <GlobalButton />
        </GlobalFooterComponent>
    )
}

export default GlobalFooter