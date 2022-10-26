import React from "react";
import styled from "styled-components";
import GlobalTextWindow from "../Components/Basics/GlobalTextWindow.component";
import GlobalButtonWrapper from "../Components/Structurals/Footer/GlobalButtonWrapper.component";

const EndScreen = styled.div`
    background-color: #eeeeee;
    color: #000000;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;

    .title{
        width: 100%;
        height: 40px;
        margin-top: 15px;
    }
    .content{
        font-size: 1.5rem;

        p.contentp{
            width: 50%;
            margin: 0px auto;
        }
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

const End = () => {
    return (
        <EndScreen>
            <div className="title">
                <h1>Fim do treinamento</h1>
            </div>
            <div className="content">
                <p>
                    Parabéns!
                </p>

            </div>
            <GlobalButtonWrapper>
            </GlobalButtonWrapper>
        </EndScreen>
    )
}

export default End