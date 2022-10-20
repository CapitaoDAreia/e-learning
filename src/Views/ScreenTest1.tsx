import React from "react";

import styled from "styled-components";
import GlobalButton from "../Components/Basics/GlobalButton.component";

const ScreenTestComponent1 = styled.div`
    background-color: grey;
    color: #eeeeee;
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 50px;
`;

const ScreenTest1 = () => {
    return (
        <ScreenTestComponent1>
            <div>
                <h1>Tela 1 do treinamento</h1>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus enim tempore atque nihil autem assumenda culpa delectus? Libero nesciunt dolor ducimus, a suscipit consequatur explicabo tempora veniam officiis natus? Consequuntur.
                </div>
            </div>
            <GlobalButton destination="/screen2" label="PRÓXIMO" />
        </ScreenTestComponent1>
    )
}

export default ScreenTest1