import React from "react";
import styled from "styled-components";
import GlobalTextWindow from "../../Components/Basics/GlobalTextWindow.component";
import GlobalButtonWrapper from "../../Components/Structurals/Footer/GlobalButtonWrapper.component";
import BackGroundImage from '../assets/img/start-page.png'


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
                <h1>O que é XYZ?</h1>
            </div>
            <div className="content">
                <div className="innercontent">
                    <p >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia et eum nesciunt voluptas, consequuntur totam quae reprehenderit adipisci minima saepe voluptates nostrum debitis iusto obcaecati asperiores veniam est laudantium doloribus!
                    </p>
                    <p  >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati officia suscipit dolorem sint ab animi delectus quidem nihil libero vel, harum tenetur fugiat ipsam? Consequatur laborum deleniti libero quisquam pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus molestias placeat modi nisi incidunt maiores. Natus rerum tenetur laboriosam consectetur quidem fugit exercitationem at commodi voluptatum? Impedit, ipsa officia!
                    </p>
                </div>
                <GlobalTextWindow>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam laboriosam ea sunt deleniti autem. Sapiente architecto dolorem rem molestiae, laboriosam ipsa optio temporibus animi itaque est in dicta! Sint, quibusdam!
                    </p>
                </GlobalTextWindow>
                
            </div>
            <GlobalButtonWrapper>
            </GlobalButtonWrapper>
        </ScreenTestComponent1>
    )
}

export default ScreenTest1