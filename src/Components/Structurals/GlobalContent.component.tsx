import React from "react";

import styled from "styled-components";

const GlobalContentComponent = styled.div`
    width: 80%;
    align-self: center;
    
`;

const GlobalContent = () => {
    return (
        <GlobalContentComponent>
            <div>
                Content 
            </div>
            <br/>
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eaque, voluptate nihil, corporis sint cum eius facilis dicta nam nostrum animi aut dolor.
                Illum debitis commodi asperiores dolorem maiores, vitae delectus.
            </div>
        </GlobalContentComponent>
    )
}

export default GlobalContent