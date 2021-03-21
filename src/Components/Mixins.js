import styled, { css, keyframes } from 'styled-components'

export const breakpoints = {
  sm: '576px',
  md: '850px'
}

export const FlexRowCenter = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const FlexColCenter = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FlexColStart = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const FlexStartCenter = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(10%); };
  to { opacity: 1; transform: translateY(0%); };
`

export const StyledThemeIcon = (icon) => {
  const Icon = styled(icon)`
    ${uniformSize(25)};
    margin-right: 10px;
    animation: ${fadeUp} .25s ease-in;
  `
  return <Icon />
}

export const StyledCancelIcon = (icon) => {
  const Icon = styled(icon)`
    width: 15px;
    display: ${({ $inputValue }) => !$inputValue && 'none'};
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translate(-50%, -50%);
    outline: none;

    &:hover {
      cursor: pointer;
    }
  `
  return Icon
}

export const uniformSize = (size) => {
  return css`
    width: ${size}px;
    height: ${size}px;
  `
}