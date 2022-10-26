import React from "react";
import styled from "styled-components";

const TextWindowComponent = styled.section`
    padding: 10px 15px;
    border: 1px solid #010931;
    width: 300px;
    height: 200px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    background: lightgrey;
    color: #000000;
    border: 3px solid #010931;
`;

const GlobalTextWindow=(props: {children: JSX.Element})=>{
    return(
        <TextWindowComponent>
            {props.children}
        </TextWindowComponent>
    )
}

export default GlobalTextWindow