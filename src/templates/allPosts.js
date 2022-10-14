import React from "react";
import { graphql } from "gatsby";
import {
    Container,
    Content,
    ContentCard,
    FeatureImage,
    Pagination, 
} from "../components";
import { H1, P } from "../elements";


const allPosts = ({ pageContext, data }) => {

    // -- Pagination navigation logic start--
    const {currentPage, numPage} = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPage;
    const prevPage = currentPage -1 === 1 ? "/" : `${currentPage -1}`
    const nextPage = `${currentPage +1}`;
    // -- Pagination navigation logic stop--

    const posts = data.allMdx.edges

    return (
        <Container>
        <FeatureImage/>
        <Content>
            <H1 textAlign="center">Elit rhoncus tellus proin parturient.</H1>
            <P color="dark2" textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing volutpat risus quis lorem pulvinar et pulvinar sit dictum. Eget orci, orci in congue cursus nulla tincidunt facilisi.</P>
            
            {posts.map(post => (
                 <ContentCard 
                    key={post.node.frontmatter.slug} 
                    date={post.node.frontmatter.date} 
                    title={post.node.frontmatter.title} 
                    content={post.node.frontmatter.content}
                 />
            ))}
            
        </Content>
        <Pagination 
            isFirst={isFirst} 
            isLast={isLast}
            prevPage={prevPage}
            nextPage={nextPage}
        />
      </Container>
    );
}

export default allPosts;

export const pageQuery = graphql`
    query AllPostsQuery($skip: Int!, $limit: Int!){
        allMdx(sort: {fields: frontmatter___date, order: DESC}, skip: $skip, limit: $limit) {
            edges {
              node {
                frontmatter {
                  content
                  date
                  slug
                  title
                }
              }
            }
          }
    }
`;