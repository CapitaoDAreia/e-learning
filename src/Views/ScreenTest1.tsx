import React from "react";

import styled from "styled-components";

const ScreenTestComponent1 = styled.div`
    background-color: red;
    color: #eeeeee;
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ScreenTest1 = () => {
    return (
        <ScreenTestComponent1>
            <div>
                Screen1
            </div>
        </ScreenTestComponent1>
    )
}

export default ScreenTest1