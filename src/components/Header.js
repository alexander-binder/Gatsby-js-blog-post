import React from "react";
import styled from "styled-components";
import {useStaticQuery, Link, graphql } from 'gatsby'
import { useState } from "react";


const HeaderWrapper = styled.header`
    height: 60px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    padding:0 16px;
    position: fixed;
    top: 0;
    background-color: white;
    border-bottom: 3px solid #fdd66f;
    z-index: 1000;
`;


const Menu = styled.nav`
        display: ${props => props.open ? 'flex' : 'none'};
        width: 100%;
        height: 100%;
        /* font-family: 'Open Sans'; */
        position: relative;
        flex-direction: column;
        align-items: center;
        top: 60px;
        padding: 8px;
        border-bottom: 3px solid #fdd66f;
      
        background-color: white;
        
     
        @media(min-width: 768px){
            display: flex;
            width: 100%;
            position: relative;
            border-bottom: none;
            background: none;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            left: initial;
            top: initial;
        }


`;





const StyledLink = styled(props => <Link {...props} />)`
    padding: 4px 8px;
    display: block ;
    text-align: center;
    box-sizing: border-box;
    font-weight:${props => props.isActive ? 'bold' : 'normal'} ;
    color: black;
    
`;

const MobileMenuIcon = styled.div`

        position: absolute;
        margin-top: 1.2%;
        margin-left: 88%;
        width: 25px;
        min-width: 25px;
        padding: 5px;
        

    >div{
        height: 3px;
        background: black;
        margin: 5px 0;
        width: 100%;
    }

    @media(min-width: 768px){
        display: none;
    }
`;

export function Header() {

    
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <HeaderWrapper>
            <MobileMenuIcon onClick={()=> setMenuOpen(!menuOpen)} >
                <div />
                <div />
                <div />
            </MobileMenuIcon>
            <Menu open={menuOpen}>
                <StyledLink to="/" isActive={ '/' === '/'}>
                    Blog
                </StyledLink>
                <StyledLink to="/about" isActive={ '/about' === '/about'} >
                    About
                </StyledLink>
            </Menu>    
        </HeaderWrapper>
    );
}

