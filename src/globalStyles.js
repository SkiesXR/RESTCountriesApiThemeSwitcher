import { createGlobalStyle } from 'styled-components'
 
const GlobalStyles = createGlobalStyle`
  html {
    font-size: 16px;
  }

  @media (max-width: 900px) {
    html { font-size: 15px; }
  }

  @media (max-width: 400px) {
    html { font-size: 13px; }
  }

  body {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => theme.bodyBackground};
    font-family: Nunito Sans Light, Sans-Serif;
  }

  button {
    background: ${({ theme }) => theme.elementBackground};
  }

  h1 {
    font-size: 3rem;
    font-family: Nunito Sans ExtraBold, Sans-Serif;
  }

  h2 {
    font-size: 2rem;
    font-family: Nunito Sans SemiBold, Sans-Serif;
  }

  h3 {
    font-size: 1.25rem;
    font-family: Nunito Sans Light, Sans-Serif;
  }
`
 
export default GlobalStyles