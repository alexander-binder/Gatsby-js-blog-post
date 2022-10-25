import styled from "styled-components";


export const FonctionnaliteContainerWrapper = styled.div`
    max-width: 100%;
    padding-top: 6rem;
    height: 100%;
    display: grid;
    column-gap: 16px;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1f);

    background-color: rgb(255, 255, 255);
`;


export const FonctionnalteItemsWrapper = styled.div`
    grid-area: 2 / 2 / auto / 6;
    margin-top: 48px;
 
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 40px 24px;

`;

export const FonctionnalteItem = styled.div`
    /* grid-column: 1 / span 2; */
    display: block;

    & :nth-child(1) {
        margin-bottom: 8px;
        font-size: 16px;
    }

    & :nth-child(2) {
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px; 
        color: rgb(99, 115, 126);
    }

`;
