import React from 'react'
import styled from 'styled-components'
import ThemeSwitcher from './ThemeSwitcher'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 75px;
  height: 75px;
  background: ${({ theme }) => theme.elementBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
`

const AppNameText = styled.h3`
  user-select: none;
`

const HeaderSection = ({ theme, setTheme }) => {
  return (
    <Container>
      <AppNameText>Where in the world?</AppNameText>
      <ThemeSwitcher theme={theme} setTheme={setTheme}/>
    </Container>
  )
}

export default HeaderSection
