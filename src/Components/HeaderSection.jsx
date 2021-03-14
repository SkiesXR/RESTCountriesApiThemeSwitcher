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
  box-shadow: ${({ theme }) => theme.name === 'Light'
    ? '0px 10px 13px -7px #e8e8e8, 5px 5px 15px 5px rgba(0,0,0,0)'
    : '0px 10px 13px -12px #232323, 5px 5px 15px 5px rgba(0,0,0,0)'
  };
`

const AppNameText = styled.h3`
  user-select: none;
`

const HeaderSection = ({ theme, setTheme }) => {
  return (
    <Container theme={theme}>
      <AppNameText>Where in the world?</AppNameText>
      <ThemeSwitcher theme={theme} setTheme={setTheme}/>
    </Container>
  )
}

export default HeaderSection
