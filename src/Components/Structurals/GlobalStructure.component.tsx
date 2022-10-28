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
    border: 1px solid #eee;
    padding: 2px 8px;
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
    const paginationLength = 5

    return (
        <GlobalStructureComponent>
            <GlobalHeaderComponent />
            <GlobalContent>
                {
                    // switch (pagination) {
                    //     case '0': <Home />; break;
                    //     case '1': <Instructions />; break;
                    //     case '2': <MiddleScreen />;break;
                    //     case '3': <Intro />;break;
                    //     case '4': <ScreenTest2 />;break;
                    //     case '5': <End />;break;
                    //     default: <End />;
                    // }
                    pagination === 0 ? <Home /> :
                        pagination === 1 ? <Instructions /> :
                            pagination === 2 ? <MiddleScreen /> :
                                pagination === 3 ? <Intro /> :
                                    pagination === 4 ? <ScreenTest2 /> :
                                        pagination === paginationLength ? <End /> :
                                            'Out of range'
                }
            </GlobalContent>
            <GlobalFooterComponent counter={counter} setCounter={setCounter} setPagination={setPagination} paginationLength={paginationLength}/>
        </GlobalStructureComponent>
    )
}

export default GlobalStructure