import { useState } from "react";
import styled from "styled-components";

type GlobalButtonProps = {
    label: string
    destination: string
    pagination: React.Dispatch<React.SetStateAction<number>>
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

    const [count, setCount] = useState(0)

    const handleCountValue = () => {
        if (props.label === 'Avançar' && count >= 0) {
            setCount(count + 1)

        }
        if (props.label === 'Voltar' && count >= 0) {
            setCount(count - 1)

        }
    }

    return (<>
        <GlobalButtonComponent onClick={
            () => {
                handleCountValue()
                console.log(props.label, count)
                // props.pagination(count)
            }
        } >
            {props.label}
        </GlobalButtonComponent>
        <input type="text" value={count} />
    </>
    )
}

export default GlobalButton