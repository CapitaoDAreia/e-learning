import React, { ReactElement } from "react";
import styled from "styled-components";


const ButtonWrapperComponent = styled.div`
    width: 100%;
`;

const GlobalButtonWrapper=(props: {children: JSX.Element})=>{
    return(
        <ButtonWrapperComponent>
            {props.children}
        </ButtonWrapperComponent>
    )
}

export default GlobalButtonWrapper
