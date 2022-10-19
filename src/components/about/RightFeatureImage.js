import React from "react";
import Img from "gatsby-image";
import {useStaticQuery, graphql } from 'gatsby';
import { RightSideFeatureImageWrapper } from "../../elements";

export const RightFeatureImage = ({ fixed }) => {

    const data = useStaticQuery(graphql`
    
        query {
            imageSharp(fixed: {originalName: {eq: "mailjetRightPic.jpg"}}) {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        }

    `);

    return(
        <RightSideFeatureImageWrapper >
  
            <Img 
                fixed={fixed ? fixed : data.imageSharp.fixed} 
                style={{
                    // position: "absolute",
                    // left: 0,
                    // top: 0,
                    // width: "100%",
                    // height: "100%",
                }}
            />
        </RightSideFeatureImageWrapper >
    
    );
}