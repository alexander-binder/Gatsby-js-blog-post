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

    grid-column: 7 / span 4;
    grid-row: 3 / 6;
    overflow: hidden;
    position: relative;

    /* @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    } */
`;