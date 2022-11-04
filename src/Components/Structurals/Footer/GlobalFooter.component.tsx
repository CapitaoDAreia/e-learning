import React from "react";
import styled from "styled-components";
import GlobalButton from "../../Basics/GlobalButton.component";
import GlobalButtonSkeleton from "../../Basics/GlobalButtonSkeleton.component";

const GlobalFooterComponent = styled.div`
    width: 100%;
    padding: 10px 10px;
    background-color: #bfbfbf;
    display: flex;
    justify-content: space-evenly;
`;

type GlobalFooterProps = {
    setPagination: React.Dispatch<React.SetStateAction<number>>
    setCounter: React.Dispatch<React.SetStateAction<number>>
    counter: number
    paginationLength: number
}



const GlobalFooter = (props: GlobalFooterProps) => {
    return (
        <GlobalFooterComponent>
            {
                props.counter === 0 ?
                    <>
                        <GlobalButtonSkeleton label="Voltar" destination="página anterior" />
                        <GlobalButton counter={props.counter} setCounter={props.setCounter} setPagination={props.setPagination} label="Avançar" destination="próxima página" paginationLength={props.paginationLength} />
                    </>
                    : (props.counter === props.paginationLength ?
                        <>
                            <GlobalButton counter={props.counter} setCounter={props.setCounter} setPagination={props.setPagination} label="Voltar" destination="página anterior" paginationLength={props.paginationLength} />
                            <GlobalButtonSkeleton label="Avançar" destination="próxima página" />
                        </>
                        : <>
                            <GlobalButton counter={props.counter} setCounter={props.setCounter} setPagination={props.setPagination} label="Voltar" destination="página anterior" paginationLength={props.paginationLength} />
                            <GlobalButton counter={props.counter} setCounter={props.setCounter} setPagination={props.setPagination} label="Avançar" destination="próxima página" paginationLength={props.paginationLength} />
                        </>
                    )}
        </GlobalFooterComponent>
    )
}

export default GlobalFooter