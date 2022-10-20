import React from "react";

import styled from "styled-components";
import GlobalButton from "../Components/Basics/GlobalButton.component";

const ScreenTestComponent2 = styled.div`
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

const ScreenTest2 = () => {
    return (
        <ScreenTestComponent2>
            <div>
                <h1>Tela 2 do treinamento</h1>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolorem repellat asperiores et, iusto ex perferendis corporis magnam a tenetur dicta! Voluptatum molestias at amet aliquid! Totam ad voluptatibus omnis!
                </div>
            </div>
            <div>
                <GlobalButton destination="/screen1" label="ANTERIOR" />
                <GlobalButton destination="/" label="PRÓXIMO" />
            </div>
        </ScreenTestComponent2>
    )
}

export default ScreenTest2