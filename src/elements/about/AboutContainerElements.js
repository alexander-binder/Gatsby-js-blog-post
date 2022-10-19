import styled from "styled-components";


export const AboutContainerWrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr) ;
    grid-template-rows: 16px repeat(5, 2fr);
    column-gap: 60px;
    background-color: rgb(5, 68, 81);
`;