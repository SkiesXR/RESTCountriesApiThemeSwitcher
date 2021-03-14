import React from 'react'
import styled from 'styled-components'
import ThemeSwitcher from './ThemeSwitcher'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 35px;
  height: 75px;
  box-shadow: 0px 10px 13px -7px #e8e8e8, 5px 5px 15px 5px rgba(0,0,0,0);
`

const HeaderSection = ({ theme, setTheme }) => {
  return (
    <Container>
      <h3>Where in the world?</h3>
      <ThemeSwitcher theme={theme} setTheme={setTheme}/>
    </Container>
  )
}

export default HeaderSection
