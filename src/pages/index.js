import React from "react"
import { Container, FeatureImage, Content, ContentCard, Pagination } from "../components"


const IndexPage = () => {
  return (
    <Container>
      <FeatureImage/>
      <Content>
          <ContentCard date="2022-03-22" title="my first post" content="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" slug="my-first-post"/>
      </Content>
      <Pagination/>
    </Container>

  ) 
}

export default IndexPage;
