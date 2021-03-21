import styled from 'styled-components'
import PropTypes from 'prop-types'
// components
import {ReactComponent as DarkThemeIcon} from '../Assets/Images/dark_theme.svg'
import {ReactComponent as LightThemeIcon} from '../Assets/Images/light_theme.svg'
// hooks
import useTheme from '../Hooks/useTheme'
// utils
import { getFromLS } from '../Utils/storage'
import { FlexRowCenter, StyledThemeIcon } from './Mixins'

/* Styles Begin */

const ThemeSwitcherSection = styled.div `
  ${FlexRowCenter};

  &:hover {
    cursor: pointer;
  }
`
const LightIcon = StyledThemeIcon(LightThemeIcon)
const DarkIcon = StyledThemeIcon(DarkThemeIcon)

const ThemeTextWrapper = styled.span`
  text-transform: capitalize;
  user-select: none;
  font-weight: 400;

  &:focus { outline: ${({ theme }) => theme.focusColor}; }
`

/* Styles End */

const ThemeSwitcher = ({ theme, setTheme }) => {
  const themesFromStore = getFromLS('all-themes')
  const { dark , light } = themesFromStore
  const { setMode } = useTheme()
  
  if (!theme) return null
  
  const isLightTheme = theme.name === 'Light'
  const themeIcon = isLightTheme ? LightIcon : DarkIcon
  const themeText = isLightTheme ? `${light.name} Mode` : `${dark.name} Mode`

  const switchThemes = () => {
    const newTheme = isLightTheme ? dark : light
    setMode(newTheme.name)
    setTheme(newTheme)
  }

  return (
    <ThemeSwitcherSection onClick={switchThemes}>
      {themeIcon}
      <ThemeTextWrapper
        aria-label='Switch website color theme'
        onKeyDown={(e) => e.key === 'Enter' && switchThemes()}
        onMouseDown={(e) => e.preventDefault()}
        role='button'
        tabIndex='0'
      >
        {themeText}
      </ThemeTextWrapper>
    </ThemeSwitcherSection>
  )
}

export default ThemeSwitcher

ThemeSwitcher.propTypes = {
  theme: PropTypes.object.isRequired,
  setTheme: PropTypes.func.isRequired,
}
