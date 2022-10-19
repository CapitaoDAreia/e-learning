import React from "react";
import styled from 'styled-components'
import GlobalContent from "./GlobalContent.component";
import GlobalFooterComponent from "./GlobalFooter.component";
import GlobalHeaderComponent from "./GlobalHeader.component";

const GlobalStructureComponent = styled.div`
    border: 2px solid #fcfcfc;
    border-radius: 10px;
    width: 1000px;
    height: 600px;

    overflow: hidden;


    background-color: #EEEEEE;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const GlobalStructure = (props: {}) => {
    return (
        <GlobalStructureComponent>
            <GlobalHeaderComponent />

            <GlobalContent />
            
            <GlobalFooterComponent />
        </GlobalStructureComponent>
    )
}

export default GlobalStructure