import styled from "styled-components";

export const FeatureImageWrapper = styled.div`

    grid-column: 3 / span 10;
    grid-row: 2 / 4;
    overflow: hidden;
    position: relative;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }
`;


export const RightSideFeatureImageWrapper = styled.div`

    grid-column: 8 / span 3;
    grid-row: 1 ;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;

    /* @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    } */

    @media ${props => props.theme.breakpoints.mobile}{
        grid-column: 2 / span 9;
    }
`;