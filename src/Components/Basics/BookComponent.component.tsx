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
    height: 450px;
    border: 2px solid #010931;
    padding: 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    background-color: lightgrey;
    h1{
        margin-top: 20px;
    }
    h2{
        margin-bottom: 20px;
    }
    ul{
        list-style: none;
        font-size: 18px;
        margin-left: 20px;
        li{
            margin: 10px 0px;
        }
    }
`;

const Circle = styled.div`
    display: inline-block;
    margin-right: 10px;
    border-radius: 10px;
    background: #010931;
    width: 10px;
    height: 10px;
`;

const Book = (props: ButtonProps) => {
    return (
        <BookComponent>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <ul>
                <li>{props.first ? <Circle /> : ''} {props.first}</li>
                <li>{props.second ? <Circle /> : ''} {props.second}</li>
                <li>{props.third ? <Circle /> : ''} {props.third}</li>
                <li>{props.fourth ? <Circle /> : ''} {props.fourth}</li>
            </ul>
        </BookComponent>
    )
}

export default Book