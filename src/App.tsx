import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import styled from 'styled-components'
import GlobalContent from "./Components/Structurals/GlobalContent.component";
import GlobalFooterComponent from "./Components/Structurals/GlobalFooter.component";
import GlobalHeaderComponent from "./Components/Structurals/GlobalHeader.component";

const GlobalStructureComponent = styled.div`
    border: 2px solid #fcfcfc;
    border-radius: 10px;
    max-width: 900px;
    height: 700px;

    overflow: hidden;

    background-color: #EEEEEE;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

function App() {
  return (
    <BrowserRouter basename='' >
      <GlobalStructureComponent>
            <GlobalHeaderComponent />

            <GlobalContent />
            
            <GlobalFooterComponent />
        </GlobalStructureComponent>
    </BrowserRouter>
  );
}

export default App;
