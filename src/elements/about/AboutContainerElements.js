import styled from "styled-components";


export const AboutContainerWrapper = styled.div`
    padding-top: 6rem;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr) ;
    grid-template-rows: 40rem repeat(5, 2fr);
    column-gap: 60px;
    background-color: rgb(5, 68, 81);
`;