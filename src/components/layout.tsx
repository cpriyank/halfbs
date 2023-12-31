import React from 'react'
import {Link} from 'gatsby'
import {GlobalStyle, styled} from '../styles/theme'

const StyledNav = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 16px;

    a {
      background: none;
    }
  }
`

const StyledFooter = styled.footer`
  padding-bottom: 36px;
`

interface Props {
  readonly title?: string
  readonly children: React.ReactNode
}

const Layout: React.FC<Props> = ({children}) => (
  <>
    <GlobalStyle />
    <StyledNav className="navigation">
      <ul>
        <li>
          <Link to={`/`}>&</Link>
        </li>
        <li>
          <Link to={`/tags`}>Tags</Link>
        </li>
        <li>
          <Link to={`/about`}>About</Link>
        </li>
      </ul>
    </StyledNav>
    <main className="content" role="main">
      {children}
    </main>
    <StyledFooter className="footer">
      © {new Date().getFullYear()},{` `}
      <a href="https://cpriyank.github.io/halfbs">cpriyank.github.io/halfbs</a>. Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </StyledFooter>
  </>
)

export default Layout