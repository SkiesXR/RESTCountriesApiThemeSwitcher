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

const HeaderSection = () => {
  return (
    <Container>
      <h2>Where in the world?</h2>
      <DarkThemeIcon />
      <span>Dark Mode</span> 
    </Container>
  )
}

export default HeaderSection

/* Header Section TODOs

- Theme switching section

*/