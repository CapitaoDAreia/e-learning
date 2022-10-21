import React from "react";
import { Routes, Route } from 'react-router-dom';

import styled from "styled-components";
import Home from "../../Views/Home";
import MiddleScreenTest1 from "../../Views/MiddleScreenTest1";
import ScreenTest1 from "../../Views/ScreenTest1";
import ScreenTest2 from "../../Views/ScreenTest2";
import GlobalButton from "../Basics/GlobalButton.component";


const GlobalContentComponent = styled.div`
    width: 100%;
    height: 100%;
    align-self: center;
    
`;

const GlobalContent = () => {
    return (
        <GlobalContentComponent>
            <Routes>
                <Route path="/screen2" element={<ScreenTest2 />} />
                <Route path="/screen1" element={<ScreenTest1 />} />
                <Route path="/middle1" element={<MiddleScreenTest1 />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </GlobalContentComponent>
    )
}

export default GlobalContent