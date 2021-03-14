import React from 'react'
import styled from 'styled-components'
import {ReactComponent as DarkThemeIcon} from '../Assets/Images/dark_theme.svg'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 35px;
  height: 75px;
  box-shadow: 0px 10px 13px -7px #e8e8e8, 5px 5px 15px 5px rgba(0,0,0,0);
`

const ThemeSwitcherSection = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`

const Icon = styled(DarkThemeIcon) `
  width: 25px;
  height: 25px;
  margin-right: 10px;
`

const HeaderSection = () => {
  return (
    <Container>
      <h2>Where in the world?</h2>
      <ThemeSwitcherSection>
        <Icon/>
        <span>Dark Mode</span> 
      </ThemeSwitcherSection>
    </Container>
  )
}

export default HeaderSection
