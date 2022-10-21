import React from "react";
import styled from "styled-components";

type ButtonProps = {
    title: string
    subtitle: string
    first?: string
    second?: string
    third?: string
    fourth?: string
}

const BookComponent = styled.div`
    width: 350px;
    height: 400px;
    border: 1px solid red;
    padding: 10px;
    border-radius: 10px;
    ul{
        list-style: none;
    }
`;

const Book=(props: ButtonProps)=>{
    return(
        <BookComponent>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <ul>
                <li>{props.first}</li>
                <li>{props.second}</li>
                <li>{props.third}</li>
                <li>{props.fourth}</li>
            </ul>
        </BookComponent>
    )
}

export default Book