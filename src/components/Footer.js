import React from "react";
import { FooterWrapper, FooterSocialWrapper, FooterSocialIcons, P } from "../elements";
import {useStaticQuery, graphql } from 'gatsby'


export const Footer = () => {

    const data = useStaticQuery(graphql`
    
        query {
            facebook: file(relativePath: {eq: "facebook.svg"}) {
                publicURL
            },
            instagram: file(relativePath: {eq: "instagram.svg"}) {
                publicURL
            },
            linkedin: file(relativePath: {eq: "linkedin.svg"}) {
                publicURL
            },
            twitter: file(relativePath: {eq: "twitter.svg"}) {
                publicURL
            },

        }

    `);

    return (
        <FooterWrapper>
             <FooterSocialWrapper>
                <FooterSocialIcons>
                    <a href="https://facebook.com" target="_blank">
                        <img src={data.facebook.publicURL} alt="Facebook logo" />
                    </a>
                    <a href="https://instagram.com" target="_blank">
                        <img src={data.instagram.publicURL} alt="instagram logo" />
                    </a>
                    <a href="https://linkedin.com" target="_blank">
                        <img src={data.linkedin.publicURL} alt="linkedin logo" />
                    </a>
                    <a href="https://twitter.com" target="_blank">
                        <img src={data.twitter.publicURL} alt="twitter logo" />
                    </a>
                </FooterSocialIcons>
                <P size="xSmall" color="dark3"> @ copyrights 2022 by Alexander Binder. All rights reserved</P>
             </FooterSocialWrapper>
         
        </FooterWrapper>
        
    );
}
