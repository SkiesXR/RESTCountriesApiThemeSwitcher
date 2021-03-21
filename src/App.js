import { useEffect, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
// components
import HeaderSection from './Components/HeaderSection'
import DetailPage from './Components/DetailPage'
import IndexPage from './Components/IndexPage'
import GlobalStyles from './globalStyles'
import Loader from './Components/Loader'
// hooks
import useFetch from './Hooks/useFetch'
import useTheme from './Hooks/useTheme'

function App() {
  const {theme, themeLoaded} = useTheme()
  const [selectedTheme, setSelectedTheme] = useState(theme)
  const [switchedRoutes, setSwitchedRoutes] = useState(null)
  const { error, isLoading, response: data } = useFetch('https://restcountries.eu/rest/v2/all', {})

  useEffect(() => {
    const routes = (
      <Switch>
        <Route exact path='/detail/:id'><DetailPage data={data} error={error} /></Route>
        <Route exact path='/'><IndexPage data={data} error={error} theme={selectedTheme} /></Route>
        <Redirect to={{ pathname: '/' }}/>
      </Switch>
    )

    // Delay state change to allow loading animation to complete
    if (!isLoading) setTimeout(() => setSwitchedRoutes(routes), 1000)
  }, [isLoading, data])

  return (
    <>
    {themeLoaded &&
      <ThemeProvider theme={selectedTheme}>
        <GlobalStyles />
        <HeaderSection theme={selectedTheme} setTheme={setSelectedTheme} />
        {switchedRoutes ?? <Loader />}
      </ThemeProvider>}
    </>
  )
}

export default App;
