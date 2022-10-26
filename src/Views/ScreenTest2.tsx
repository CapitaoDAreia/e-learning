import React from "react";
import styled from "styled-components";
import GlobalTextWindow from "../Components/Basics/GlobalTextWindow.component";
import GlobalButtonWrapper from "../Components/Structurals/Footer/GlobalButtonWrapper.component";

const ScreenTestComponent1 = styled.div`
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
        p.contentp{
            width: 50%;
            margin: 0px auto;
        }
        div{
            width: 80%;
            p{
                margin-bottom: 20px;
                text-align: left;
            }
        }
        width: 100%;
        height: 60%;
        padding: 10px 20px;
        gap: 5px;
        display: flex;
        /* flex-wrap: nowrap; */
    }
`;

const ScreenTest1 = () => {
    return (
        <ScreenTestComponent1>
            <div className="title">
                <h1>Isso é LGPD</h1>
            </div>
            <div className="content">
                <div className="innercontent">
                    <p >
                        A Lei Geral de Proteção de Dados Pessoais (LGPD ou LGPDP),
                        é a legislação brasileira que regula as atividades de tratamento de dados pessoais e que também altera os artigos 7º e 16 do Marco Civil da Internet.
                    </p>
                    <p  >
                        A Lei Geral de Proteção de Dados Pessoais (LGPD ou LGPDP),
                        é a legislação brasileira que regula as atividades de tratamento de dados pessoais e que também altera os artigos 7º e 16 do Marco Civil da Internet.
                        A Lei Geral de Proteção de Dados Pessoais (LGPD ou LGPDP),
                        é a legislação brasileira que regula as atividades de tratamento de dados pessoais e que também altera os artigos 7º e 16 do Marco Civil da Internet.
                        
                    </p>
                </div>
                <GlobalTextWindow>
                    <p>
                        A Lei Geral de Proteção de Dados Pessoais (LGPD ou LGPDP),
                        é a legislação brasileira que regula as atividades de tratamento de dados pessoais e que também altera os artigos 7º e 16 do Marco Civil da Internet.
                    </p>
                </GlobalTextWindow>
                
            </div>
            <GlobalButtonWrapper>
            </GlobalButtonWrapper>
        </ScreenTestComponent1>
    )
}

export default ScreenTest1