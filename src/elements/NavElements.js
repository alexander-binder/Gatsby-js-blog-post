import styled from "styled-components";


export const NavWrapper = styled.nav`
    grid-column: 2 / span 12;
    grid-row: 1 / 2 ;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    & img {
        height: 30px;
    }
    
    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }
`;  