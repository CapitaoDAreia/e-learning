import React from "react";
import { Routes, Route } from 'react-router-dom';

import styled from "styled-components";
import ScreenTest1 from "../../Views/ScreenTest1";
import ScreenTest2 from "../../Views/ScreenTest2";


const GlobalContentComponent = styled.div`
    width: 90%;
    height: 100%;
    align-self: center;
    
`;

const GlobalContent = () => {
    return (
        <GlobalContentComponent>
            <Routes>
                <Route path="/screen2" element={<ScreenTest2 />} />
                <Route path="/screen1" element={<ScreenTest1 />} />
            </Routes>
        </GlobalContentComponent>
    )
}

export default GlobalContent