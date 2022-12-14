import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export const PaginationWrapper = styled.div`

    grid-column: 2 / span 12;
    /* grid-row: 5; */
    padding: 3rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
    a:nth-child(1){
        color: ${props => props.isFirst ? props.theme.color.dark3 : props.theme.color.dark3};
        pointer-events: ${props => props.isFirst ? "none" : "auto"};
        cursor: ${props => props.isFirst ? "default" : "pointer"};
    }

    a:nth-child(2){
        color: ${props => props.isLast ? props.theme.color.dark3 : props.theme.color.dark3};
        pointer-events: ${props => props.isLast ? "none" : "auto"};
        cursor: ${props => props.isLast ? "default" : "pointer"};
    }

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2/ span 6;
    }

`;


export const PaginationLink = styled(props => <Link {...props}/>)`
    font-size: 0,875rem;
    line-height: 1.125rem;
    text-decoration: none;
    font-weight: 400;
    margin: 0 2rem;

    &:hover,&:focus {
        text-decoration: underline;
    }


`;