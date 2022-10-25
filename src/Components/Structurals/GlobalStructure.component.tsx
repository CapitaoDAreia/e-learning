import React, { useState } from "react";
import styled from 'styled-components'
import GlobalContent from "./GlobalContent.component";
import GlobalFooterComponent from "./GlobalFooter.component";
import GlobalHeaderComponent from "./GlobalHeader.component";

import Home from "../../Views/Home";
import MiddleScreenTest1 from "../../Views/MiddleScreenTest1";
import ScreenTest1 from "../../Views/ScreenTest1";
import ScreenTest2 from "../../Views/ScreenTest2";
import GlobalButton from "../Basics/GlobalButton.component";

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

const GlobalStructure = (props: {}) => {

    const [pagination, setPagination] = useState(0)
    const [counter, setCounter] = useState(0)

    return (
        <GlobalStructureComponent>
            <GlobalHeaderComponent />

            <GlobalContent>
                {
                    pagination === 0 ? <Home /> : 
                    pagination === 1 ? <MiddleScreenTest1/> :
                    pagination === 2 ? <ScreenTest1 /> :
                    pagination === 3 ? <ScreenTest2/> : 'End of line, 3 is your limit for now.'
                }
            </GlobalContent>

            <GlobalFooterComponent counter={counter} setCounter={setCounter} setPagination={setPagination} />
        </GlobalStructureComponent>
    )
}

export default GlobalStructure