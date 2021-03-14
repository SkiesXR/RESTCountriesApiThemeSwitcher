import React from 'react'
import styled from 'styled-components'
import {ReactComponent as DarkThemeIcon} from '../Assets/Images/dark_theme.svg'
import {ReactComponent as LightThemeIcon} from '../Assets/Images/light_theme.svg'

const dark = 'dark'
const light = 'light'

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

  &:hover {
    cursor: pointer;
  }
`

const DarkIcon = styled(DarkThemeIcon)`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`

const LightIcon = styled(LightThemeIcon)`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`

const ThemeText = styled.span`
  text-transform: capitalize;
`

const HeaderSection = ({ theme, setTheme }) => {
  return (
    <Container>
      <h3>Where in the world?</h3>
      <ThemeSwitcherSection onClick={() => setTheme(theme === light ? dark : light)}>
        {theme === light ? <LightIcon /> : <DarkIcon />}
        <ThemeText>{`${theme} Mode`}</ThemeText> 
      </ThemeSwitcherSection>
    </Container>
  )
}

export default HeaderSection
