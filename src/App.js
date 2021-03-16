import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from "styled-components"
// components
import HeaderSection from './Components/HeaderSection'
import DetailPage from './Components/DetailPage'
import IndexPage from './Components/IndexPage'
import GlobalStyles from './globalStyles'
// hooks
import { useFetch } from './Hooks/useFetch'
import { useTheme } from './Theme/useTheme';

function App() {
  const {theme, themeLoaded} = useTheme()
  const [selectedTheme, setSelectedTheme] = useState(theme)
  const { error, isLoading, response: data } = useFetch('https://restcountries.eu/rest/v2/all', {})

  if (error) return <div>Sorry! Please try again later</div>
  if (isLoading) return <div>Loading...</div>

  return (
    <>
    {themeLoaded && <ThemeProvider theme={selectedTheme}>
        <GlobalStyles />
        <HeaderSection theme={selectedTheme} setTheme={setSelectedTheme} />
        <Switch>
          <Route exact path='/detail/:id'><DetailPage data={data} /></Route>
        <Route path='/'><IndexPage data={data} /></Route>
        </Switch>
      </ThemeProvider>}
    </>
  )
}

export default App;

/* TODO:
WRAPPING UP THE BASICS
- Add down arrow to region filter dropdown
- Finalize icons
- Fix theme-switching for icons & theme text
- Finalize box-shadow(s) for light theme
- Null State (search) component
- Error message for API error
- Loader component / design

OPTIONAL ADD-ONS
- Speech Recognition
- Create mixins to reduce code
- Create CSS constants

CLEANUP
- Organize imports
- Organize CSS
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
