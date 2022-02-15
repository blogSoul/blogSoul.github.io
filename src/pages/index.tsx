import React, { FunctionComponent } from 'react'
import styled from "@emotion/styled"
import GlobalStyle from "../Common/GlobalStyle"
import Introduction from "../Main/Introduction"
import Footer from "../Common/Footer"

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
      <Footer />
    </Container>
  )
}

export default IndexPage
