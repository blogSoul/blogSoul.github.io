import { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from '../../Common/GlobalStyle'
import Footer from '../../Common/Footer'
import { Helmet } from 'react-helmet'

type TemplateProps = {
  title: string
  description: string
  url: string
  image: string
  children: ReactNode
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Template: FunctionComponent<TemplateProps> = function ({
  title,
  description,
  url,
  image,
  children,
}) {
  return (
    <Container>
      <Helmet>
        <title>{title}</title>

        <meta name={'description'} content={description} />
        <meta
          name={'viewport'}
          content={'width=device-width, initial-scale=1.0'}
        />
        <meta httpEquiv={'Content-Type'} content={'text/html;charset=UTF-8'} />

        <meta property={'og:type'} content={'website'} />
        <meta property={'og:title'} content={title} />
        <meta property={'og:description'} content={description} />
        <meta property={'og:image'} content={image} />
        <meta property={'og:url'} content={url} />
        <meta property={'og:site_name'} content={title} />

        <meta property={'twitter:card'} content={'summary'} />
        <meta property={'twitter:title'} content={title} />
        <meta property={'twitter:description'} content={description} />
        <meta property={'twitter:image'} content={image} />
        <meta property={'twitter:site'} content={'@사용자이름'} />
        <meta property={'twitter:creator'} content={'@사용자이름'} />

        <html lang={'ko'} />
      </Helmet>
      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  )
}

export default Template
