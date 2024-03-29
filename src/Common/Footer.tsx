import styled from '@emotion/styled'
import { FunctionComponent } from 'react'

const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      Thank You for Visiting My Blog, Have a Good Day 👍
      <br /> © 2022 Developer Soul, Powered By Gatsby.
    </FooterWrapper>
  )
}

export default Footer
