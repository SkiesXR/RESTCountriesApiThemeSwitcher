import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
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
        <Route exact path='/detail/:id'><DetailPage data={data} /></Route>
        <Route path='/'><IndexPage data={data} /></Route>
      </Switch>
    )

    // Delay state change to allow loading animation to complete
    if (!isLoading) setTimeout(() => setSwitchedRoutes(routes), 1000)
  }, [isLoading, data])

  if (error) return <div>Sorry! It looks like the API is experiencing issues. Please try again later</div>

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

/* TODO:
WRAPPING UP THE BASICS
- Finalize icons
- Fix theme-switching for icons
- Error message for API error
- Tablet responsivenes (breakpoint)

OPTIONAL ADD-ONS
- Accessibility improvements
- Navigate country card grid using arrow keys

CLEANUP
- Organize file hierarchy & naming

TESTING
- Test on major browsers: Chrome, Firefox, Safari, Edge
- Test on mobile & tablet

BUILD
- Gzip
- Prod build
- Heroku deployment

POST-BUILD
- READme
*/
