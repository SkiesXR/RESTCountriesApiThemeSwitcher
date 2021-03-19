import styled from "styled-components"
import PropTypes from 'prop-types'
// hooks
import useTheme from '../Hooks/useTheme'
// utils
import { FlexRowCenter } from './Mixins'
import { getFromLS } from '../Utils/storage'
// icons
import {ReactComponent as DarkThemeIcon} from '../Assets/Images/dark_theme.svg'
import {ReactComponent as LightThemeIcon} from '../Assets/Images/light_theme.svg'

/* Styles Begin */

const ThemeSwitcherSection = styled.div `
  ${FlexRowCenter};

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
  user-select: none;
  font-weight: 400;
`

/* Styles End */

const ThemeSwitcher = ({ theme, setTheme }) => {
  const themesFromStore = getFromLS('all-themes')
  const { dark , light } = themesFromStore
  const { setMode } = useTheme()
  
  if (!theme) return null
  
  const isLightTheme = theme.name === 'Light'

  const switchThemes = (selectedTheme) => {
    setMode(selectedTheme.name);
    setTheme(selectedTheme);
  }

  return (
    <ThemeSwitcherSection onClick={() => switchThemes(isLightTheme ? dark : light)}>
      {isLightTheme ? <LightIcon /> : <DarkIcon /> }
      <ThemeText>{isLightTheme ? `${light.name} Mode` : `${dark.name} Mode` }</ThemeText> 
    </ThemeSwitcherSection>
  )
}

export default ThemeSwitcher

ThemeSwitcher.propTypes = {
  theme: PropTypes.object.isRequired,
  setTheme: PropTypes.func.isRequired,
}
