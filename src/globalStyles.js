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
    font-weight: 300;
  }

  button {
    background: ${({ theme }) => theme.elementBackground};
  }

  img {
    user-drag: none;
    user-select: none;
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
    font-size: 1.5rem;
    font-family: Nunito Sans Light, Sans-Serif;
  }

  svg {
    stroke: ${({ theme }) => theme.iconColor};
  }

  input::placeholder {
    color: ${({ theme }) => theme.placeholderTextColor};
    font-size: 1rem;
  }

  span {
    line-height: 1.75rem;
    color: #dadada;
  }
`
 
export default GlobalStyles