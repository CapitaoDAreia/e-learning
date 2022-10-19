import React from "react";
import styled from 'styled-components'

const GlobalStructureComponent = styled.div`
    border: 1px solid red;
    border-radius: 10px;
    padding: 10px;
    width: 800px;
    height: 500px;
`;

const GlobalStructure = (props: {}) => {
    return (
        <GlobalStructureComponent>
            
        </GlobalStructureComponent>
    )
}

export default GlobalStructure