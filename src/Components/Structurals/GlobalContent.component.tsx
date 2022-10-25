import React from "react";
import styled from "styled-components";

const GlobalContentComponent = styled.div`
    width: 100%;
    height: 100%;
    align-self: center;
`;

type GlobalContentProps = {
    children: JSX.Element | string
}

const GlobalContent = (props: GlobalContentProps) => {
    return (
        <GlobalContentComponent>
            {props.children}
        </GlobalContentComponent>
    )
}

export default GlobalContent