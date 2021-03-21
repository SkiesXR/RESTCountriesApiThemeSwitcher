import React from 'react'
import styled from 'styled-components'
import { breakpoints, FlexColCenter, FlexRowCenter } from './Mixins'

const Container = styled.div`
  width: 100%;
  margin-top: 75px;
  ${FlexColCenter};
`

const HeaderText = styled.h1`
  margin-bottom: 1rem;
`

const BodyText = styled.span`
  margin-bottom: 2rem;
`

const Button = styled.div`
  width: fit-content;
  ${FlexRowCenter};
  padding: 7px 15px;
  border-radius: var(--borderRadius);
  background: ${({ theme }) => theme.elementBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: background .15s ease-in;

  @media (min-width: ${breakpoints.sm}) {
    &:focus {
      outline: ${({ theme }) => theme.focusColor};
    }

    &:hover {
      cursor: pointer;
      background: ${({ theme }) => theme.filterBackgroundHover};

      svg {
        transition: transform .5s cubic-bezier(0.68, -0.6, 0.32, 1.6);
        transform: translateX(-10%);
      }
    }
  } 
`

const ErrorMessage = () => {
  return (
    <Container>
      <HeaderText>Uh oh.</HeaderText>
      <BodyText>Well that's embarrassing.</BodyText>
      <Button onClick={() => window.location.reload()}>Try Again</Button>
    </Container>
  )
}

export default ErrorMessage