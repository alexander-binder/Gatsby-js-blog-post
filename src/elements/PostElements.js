import styled from "styled-components";


export const PostWrapper = styled.main`

    grid-column: 4 / span 8 ;
    grid-row: 3 / span 5;
    background-color: ${props => props.theme.color.light2};
    padding: ${props => `${props.theme.spacings.xLarge} ${props.theme.spacings.xxLarge}`};
    box-shadow: ${props => props.theme.shadows.shadow1};
    z-index: 10;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        /* grid-column: 2 / span 6; */
        padding: ${props => `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
    }
`;
