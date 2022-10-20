import React from "react";
import { Routes, Route } from 'react-router-dom';

import styled from "styled-components";
import Home from "../../Views/Home";
import ScreenTest1 from "../../Views/ScreenTest1";
import ScreenTest2 from "../../Views/ScreenTest2";
import GlobalButton from "../Basics/GlobalButton.component";


const GlobalContentComponent = styled.div`
    width: 90%;
    height: 80%;
    align-self: center;
    
`;

const GlobalContent = () => {
    return (
        <GlobalContentComponent>
            <Routes>
                <Route path="/screen2" element={<ScreenTest2 />} />
                <Route path="/screen1" element={<ScreenTest1 />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </GlobalContentComponent>
    )
}

export default GlobalContent