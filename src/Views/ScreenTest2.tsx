import React from "react";

import styled from "styled-components";

const ScreenTestComponent2 = styled.div`
    background-color: red;
    color: #eeeeee;
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ScreenTest2 = () => {
    return (
        <ScreenTestComponent2>
            <div>
                Screen2
            </div>
        </ScreenTestComponent2>
    )
}

export default ScreenTest2