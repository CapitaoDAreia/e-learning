import { useEffect, useState } from "react";
import styled from "styled-components";

type GlobalButtonProps = {
    label: string
    destination: string
    setPagination: React.Dispatch<React.SetStateAction<number>>
    setCounter: React.Dispatch<React.SetStateAction<number>>
    counter: number

}

const GlobalButtonComponent = styled.button`
    font-size: .9rem;

    padding: 4px 6px;

    background-color: #010931;
    color: #eeeeee;

    border: 0.5px solid black;
    border-radius: 10px;

    cursor: pointer;

    &:hover{
        opacity: .7;
        transition: 1s;
    }

    &:active{
        opacity: .3;
        transition: 1s;
    }
`;

const GlobalButton = (props: GlobalButtonProps) => {


    useEffect(() => {
        if (props.counter >= 0) {
            console.log(props.counter)
            props.setPagination(props.counter)
        }else{
            props.setCounter(props.counter+1)
        }

    }, [props.counter])


    const handleCountValue = () => {
        if (props.label === 'Avançar' && props.counter >= 0) {
            props.setCounter(props.counter + 1)

        }
        if (props.label === 'Voltar' && props.counter >= 0) {
            props.setCounter(props.counter - 1)

        }
    }

    return (<>
        <GlobalButtonComponent onClick={
            () => {
                handleCountValue()
            }
        } >
            {props.label}
        </GlobalButtonComponent>
        <input type="text" value={props.counter} />
    </>
    )
}

export default GlobalButton