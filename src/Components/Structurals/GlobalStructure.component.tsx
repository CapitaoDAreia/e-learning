import React, { useState } from "react";
import styled from 'styled-components'

//Structurals
import GlobalContent from "./GlobalContent.component";
import GlobalFooterComponent from "./Footer/GlobalFooter.component";
import GlobalHeaderComponent from "./Header/GlobalHeader.component";

//Screens
import Home from "../../Views/Home";
import MiddleScreen from "../../Views/MiddleScreen";
import Intro from "../../Views/Cap1/Intro";
import ScreenTest2 from "../../Views/Cap1/Screen1";
import Instructions from "../../Views/Instructions";
import End from "../../Views/EndScreen";


const GlobalStructureComponent = styled.div`
    border: 1px solid #bfbfbf;
    padding: 2px 8px;
    border-radius: 10px;
    max-width: 900px;
    height: 700px;
    overflow: hidden;
    background-color: #bfbfbf;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const PaginationContextValues = {
    actualPage: 0,
    setActualPage: (n:number)=> {}
}

export const PaginationContext = React.createContext(PaginationContextValues)

const GlobalStructure = () => {

    const [pagination, setPagination] = useState(0)

    return (
        <PaginationContext.Provider value={{actualPage: pagination, setActualPage: setPagination }}>
        <GlobalStructureComponent>
            <GlobalHeaderComponent />
            <GlobalContent>
                {
                    pagination === 0 ? <Home /> :
                        pagination === 1 ? <Instructions /> :
                            pagination === 2 ? <MiddleScreen /> :
                                pagination === 3 ? <Intro /> :
                                    pagination === 4 ? <ScreenTest2 /> :
                                        pagination === 5 ? <End /> :
                                            'Out of range'
                }
            </GlobalContent>
            <GlobalFooterComponent/>
        </GlobalStructureComponent>
        </PaginationContext.Provider>
    )
}

export default GlobalStructure