import { Link } from "react-router-dom";
import styled from "styled-components";

type GlobalButtonProps = {
    label: string,
    destination: string
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
        opacity: .9;
    }

    &:active{
        opacity: .5;
    }
`;

const GlobalButton = (props: GlobalButtonProps) => {
    return (
        <Link to={props.destination}>
            <GlobalButtonComponent >
                {props.label}
            </GlobalButtonComponent>
        </Link>
    )
}

export default GlobalButton