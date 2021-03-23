import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// components
import ThemeSwitcher from './ThemeSwitcher'
// utils
import { breakpoints } from './Mixins'

/* Styles Begin */

const Container = styled.div`
  height: 75px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.elementBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media (min-width: ${breakpoints.sm}) {
    padding: 0 75px;
  }
`

const AppNameText = styled.h3`
  user-select: none;

  &:focus { outline: ${({ theme }) => theme.focusColor}; }
`

/* Styles End */

const HeaderSection = ({ theme, setTheme }) => (
  <Container>
    <AppNameText
      aria-label='Index page'
      onMouseDown={(e) => e.preventDefault()}
      role='link'
      tabIndex='0'
    >
      Where in the world?
    </AppNameText>
    <ThemeSwitcher theme={theme} setTheme={setTheme}/>
  </Container>
)

export default HeaderSection

HeaderSection.propTypes = {
  theme: PropTypes.object.isRequired,
  setTheme: PropTypes.func.isRequired,
}