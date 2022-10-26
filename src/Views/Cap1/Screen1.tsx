import React from "react";
import styled from "styled-components";
import GlobalTextWindow from "../../Components/Basics/GlobalTextWindow.component";
import GlobalButtonWrapper from "../../Components/Structurals/Footer/GlobalButtonWrapper.component";

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
                <h1>Isso é XYZ</h1>
            </div>
            <div className="content">
                <div className="innercontent">
                    <p >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illum at dolores? Minus nisi, est vitae, dolores veritatis doloremque consequuntur pariatur enim quaerat sequi suscipit sapiente voluptates eaque consectetur nemo.
                    </p>
                    <p  >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat sapiente facilis aut quas illo numquam asperiores mollitia minus praesentium at! Pariatur ex repellendus sequi aut eligendi dolore a, incidunt sed.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At ea iste excepturi, nesciunt praesentium odit saepe labore magni ullam quos. Veritatis ullam incidunt temporibus commodi repellendus! Maiores, magnam sunt! Consequatur!
                        
                    </p>
                </div>
                <GlobalTextWindow>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia aut tempora corrupti dolorum ab eum voluptates, deserunt architecto, odio magnam at voluptate asperiores vitae sequi, est vel facilis doloribus tenetur!
                    </p>
                </GlobalTextWindow>
                
            </div>
            <GlobalButtonWrapper>
            </GlobalButtonWrapper>
        </ScreenTestComponent1>
    )
}

export default ScreenTest1