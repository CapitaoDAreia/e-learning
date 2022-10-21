import React from "react";

import styled from "styled-components";
import Book from "../Components/Basics/BookComponent.component";
import GlobalButton from "../Components/Basics/GlobalButton.component";
import GlobalButtonWrapper from "../Components/Structurals/GlobalButtonWrapper.component";
import { locale } from "../global.presets";

const MiddleScreenTestComponent1 = styled.div`
    background-color: grey;
    color: #eeeeee;
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    /* gap: 50px; */

`;

const MiddleScreenTest1 = () => {
    return (
        <MiddleScreenTestComponent1>
            <Book
                title={`${locale.title}`}
                subtitle={`${locale.title}`}
            />
            <GlobalButton destination="/screen1" label="PRÓXIMO" />
        </MiddleScreenTestComponent1>
    )
}

export default MiddleScreenTest1