import React from 'react';
import { graphql } from "gatsby";
import { H1, P } from "../elements";
import { Container, Post, FeatureImage } from '../components';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const singlePost = ({data}) => {
    const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed;

    return (
        <Container>

            <FeatureImage fixed={featureImage}/>
            <Post>
                <H1 margin="0 0 2rem 0">{data.mdx.frontmatter.title}</H1>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </Post>
        </Container>
    );
}



export const pageQuery = graphql`
    query SinglePostQuery($id: String!) {
        mdx(id: {eq: $id}) {
            body
            frontmatter {
                date
                content
                slug
                title
                featureImage {
                    publicURL
                    childImageSharp {
                        fixed {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        }
    }`;


export default singlePost;