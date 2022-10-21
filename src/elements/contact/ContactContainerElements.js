import styled from "styled-components";


export const ContactContainerWrapper = styled.div`
    padding-top: 6rem;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr) ;
    grid-template-rows: 23rem 6rem 6rem 35rem 15rem;
    column-gap: 60px;
    background-color: rgb(245, 248, 250);
`;


export const TopWrapper = styled.div`
    grid-column: 1 / span 8;
    grid-row: 1 / span 3;

    /* grid-template-columns: repeat(8, 1fr) ;
    grid-template-rows: 23rem 6rem 6rem 40rem 15rem; */

    background-color: rgb(5, 68, 81);
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const BottomWrapper = styled.div`
    grid-column: 3 / span 4;
    grid-row: 3 / span 2;
    background-color: rgb(255, 255, 255);
    border-top: 4px solid rgb(149, 133, 244);
    box-shadow: rgb(0 32 37 / 32%) 0px 16px 48px -16px;
    padding: 64px;
   
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;

export const TopTextWrapper = styled.div`
    /* grid-column: 4 / span 7;
    grid-row: 1; */
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 23rem;
    margin-right: 23rem;
    text-align: center;

    & h1 {
        font-size: 45px;
        font-weight: bold;
        line-height: 56px;
        color: white;
        margin-bottom: 2rem;
        /* letter-spacing: 0.5rem; */
    };

    & :nth-child(1) {
        margin-bottom: 1rem;
        
    }

    & :nth-child(3) {
        text-align: center;
        line-height: 35px;
        
    }

      
`;







