import styled, { css } from 'styled-components'

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

export const StyledIcon = (icon) => {
  const Icon = styled(icon)`
    ${uniformSize(25)};
    margin-right: 10px;
  `
  return <Icon />

}

export const uniformSize = (size) => {
  return css`
    width: ${size}px;
    height: ${size}px;
  `
}