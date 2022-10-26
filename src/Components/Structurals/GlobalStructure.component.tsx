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

const GlobalStructure = () => {

    const [pagination, setPagination] = useState(0)
    const [counter, setCounter] = useState(0)

    return (
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
            <GlobalFooterComponent counter={counter} setCounter={setCounter} setPagination={setPagination} />
        </GlobalStructureComponent>
    )
}

export default GlobalStructure