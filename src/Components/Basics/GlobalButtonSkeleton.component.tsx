import { render } from "@testing-library/react";
import { countReset } from "console";
import { useEffect } from "react";
import styled from "styled-components";
import LeftArrow from '../../assets/img/left-arrow.png';
import RightArrow from '../../assets/img/right-arrow.png';


type GlobalButtonPropsSkeleton = {
    label: string
    destination: string
}

const GlobalButtonComponent = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-size: .9rem;
    width: 100px;
    height: 30px;
    background-color: #02061dd6;
    color: #eeeeee;
    border: none;
    border-radius: 5px;
    opacity: 0.2;
`;

const ButtonIcon = styled.img`
    filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(120deg) brightness(104%) contrast(101%);
    width: 20px;
`

const GlobalButtonSkeleton = (props: GlobalButtonPropsSkeleton) => {

    return (
        <>
            <GlobalButtonComponent>
                Skeleton
            </GlobalButtonComponent>
        </>
    )
}

export default GlobalButtonSkeleton