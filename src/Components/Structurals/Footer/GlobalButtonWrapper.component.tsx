import React, { ReactElement } from "react";
import styled from "styled-components";

interface GlobalButtonWrapperProps<JSX> {
    children: JSX.Element | JSX.Element[]
}

const ButtonWrapperComponent = styled.div`
    width: 100%;
`;

const GlobalButtonWrapper=(props: GlobalButtonWrapperProps<JSX.Element>)=>{
    return(
        <ButtonWrapperComponent>
            {props.children}
        </ButtonWrapperComponent>
    )
}

export default GlobalButtonWrapper
