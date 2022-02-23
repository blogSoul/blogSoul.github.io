import { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from '../../Common/GlobalStyle'
import Footer from '../../Common/Footer'

type TemplateProps = {
  children: ReactNode
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Template: FunctionComponent<TemplateProps> = function ({ children }) {
  return (
    <Container>
      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  )
}

export default Template
