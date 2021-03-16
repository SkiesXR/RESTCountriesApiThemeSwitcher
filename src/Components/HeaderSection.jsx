import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import ThemeSwitcher from './ThemeSwitcher'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 75px;
  background: ${({ theme }) => theme.elementBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media (min-width: 576px) {
    padding: 0 75px;
  }
`

const AppNameText = styled.h3`
  user-select: none;
  &:hover { cursor: pointer; }
`

const HeaderSection = ({ theme, setTheme }) => {
  const history = useHistory()

  return (
    <Container>
      <AppNameText onClick={() => history.push('/')}>Where in the world?</AppNameText>
      <ThemeSwitcher theme={theme} setTheme={setTheme}/>
    </Container>
  )
}

export default HeaderSection
