import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";



export const ButtonWrapper = styled(props => <Link {...props} />)`

    padding: 0.5rem 0.75rem;
    background-color: ${props => props.theme.color.main1};
    border-radius: 0.5rem;
    color: ${props => props.theme.color.light1};
    font-weight: 700;
    font-size: 0.875rem;
    width: fit-content;
    transition: fliter 0.3s ease;
    text-decoration: none;
    
    &:hover,&:focus {
        filter: brightness(110%);
    }

`;


export const Button2 = styled(props => <Link {...props} />)`



  

    width: 60%;
    color: white;
    height: 4rem;
    box-sizing: border-box;
    appearance: none;
    background-color: rgb(111, 103, 217);
    background-color:  ${props => props.color ? props.color : "rgb(111, 103, 217)"};
    border: ${props => props.border ? props.border : "none"};
    border-radius: 3px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-weight: 700;
    line-height: 50px;
    font-size: 16px;
    text-align: center;
    font-weight: 400;
    line-height: 1;
    margin-right: 15px;
    padding: 7px 20px;
    text-decoration: none;
    // text-align: left;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    
     
    transition: fliter 0.3s ease;
    text-decoration: none;
    
    &:hover,&:focus {
        filter: brightness(110%);
    }

    @media ${props => props.theme.breakpoints.mobile} {
        width: 100%;
    } 

`;