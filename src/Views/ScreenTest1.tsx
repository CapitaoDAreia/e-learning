import React from "react";

import styled from "styled-components";
import GlobalButton from "../Components/Basics/GlobalButton.component";
import GlobalButtonWrapper from "../Components/Structurals/GlobalButtonWrapper.component";

const ScreenTestComponent1 = styled.div`
    background-color: grey;
    color: #eeeeee;
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    /* gap: 50px; */

    .title{
        width: 100%;
        height: 40px;
        margin-top: 15px;
    }
    .content{
        h2{
            margin-bottom: 30px;
        }
        p{
            width: 80%;
            margin: 0px auto;
        }
        width: 100%;
        height: 60%;
    }
`;

const ScreenTest1 = () => {
    return (
        <ScreenTestComponent1>
            <div className="title">
                <h1>Título do treinamento</h1>
            </div>
            <div className="content">
                <h2>Treinamento sobre LGPD</h2>
                <p>
                    A Lei Geral de Proteção de Dados Pessoais (LGPD ou LGPDP),
                    é a legislação brasileira que regula as atividades de tratamento de dados pessoais e que também altera os artigos 7º e 16 do Marco Civil da Internet.
                </p>
            </div>
            <GlobalButtonWrapper>
            </GlobalButtonWrapper>
        </ScreenTestComponent1>
    )
}

export default ScreenTest1