import { render } from "@testing-library/react";
import { countReset } from "console";
import { useEffect } from "react";
import styled from "styled-components";
import LeftArrow from '../../assets/img/left-arrow.png';
import RightArrow from '../../assets/img/right-arrow.png';


type GlobalButtonProps = {
    label: string
    destination: string
    setPagination: React.Dispatch<React.SetStateAction<number>>
    setCounter: React.Dispatch<React.SetStateAction<number>>
    counter: number
    paginationLength: number
}

const GlobalButtonComponent = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-size: .9rem;
    width: 100px;
    height: 30px;
    background-color: #0085cc;
    color: #eeeeee;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        opacity: .7;
        transition: 0.2s;
    }
    &:active{
        opacity: 1;
        background: #00507a;
    }
`;

const ButtonIcon = styled.img`
    filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(120deg) brightness(104%) contrast(101%);
    width: 20px;
`

const GlobalButton = (props: GlobalButtonProps) => {

    useEffect(() => {
        if (props.counter >= 0) {
            console.log(props.counter)
            props.setPagination(props.counter)
        } else {
            props.setCounter(props.counter + 1)
        }
    }, [props.counter])

    const handleCountValue = () => {
        if (props.label === 'Avançar' && props.counter >= 0 && props.counter <= props.paginationLength) {
            props.setCounter(props.counter + 1)
        }
        if (props.label === 'Voltar' && props.counter >= 0) {
            props.setCounter(props.counter - 1)
        }
    }

    return (
        <>
            <GlobalButtonComponent onClick={() => { handleCountValue() }}>
                {props.label === "Voltar" ? <><ButtonIcon src={LeftArrow} alt="logo" />{props.label}</> : <>{props.label}<ButtonIcon src={RightArrow} alt="logo" /></>}
            </GlobalButtonComponent>
        </>
    )
}

export default GlobalButton