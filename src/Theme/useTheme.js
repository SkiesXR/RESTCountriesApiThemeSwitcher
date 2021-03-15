import { useEffect, useState } from 'react'
import { setToLS, getFromLS } from '../Utils/storage'

export const useTheme = () => {
  const themes = getFromLS('all-themes')
  const themeFromLS = (getFromLS('theme') && getFromLS('theme').toLowerCase()) || 'light'
  const [theme, setTheme] = useState(themes.data[themeFromLS])
  const [themeLoaded, setThemeLoaded] = useState(false)

  const setMode = mode => {
    setToLS('theme', mode)
    setTheme(mode)
  }

  useEffect(() =>{
    const localTheme = getFromLS('theme')
    localTheme ? setTheme(localTheme) : setTheme(themes.data.light)
    setThemeLoaded(true)
  }, [])

  return { theme, themeLoaded, setMode }
}