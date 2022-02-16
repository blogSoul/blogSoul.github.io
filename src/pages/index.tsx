import React, { FunctionComponent } from 'react'
import styled from "@emotion/styled"
import GlobalStyle from "../Common/GlobalStyle"
import Introduction from "../Main/Introduction"
import Footer from "../Common/Footer"
import CategoryList from "../Main/CategoryList"
import PostList from "../Main/PostList"

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <CategoryList selectedCategory={"Web"} categoryList={CATEGORY_LIST}/>
      <PostList />
      <Footer />
    </Container>
  )
}

export default IndexPage
