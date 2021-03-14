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
          <Route exact path='/detail'>
            <DetailPage theme={selectedTheme} data={data} />
          </Route>
          <Route path='/'>
            <IndexPage data={data} />
          </Route>
        </Switch>
      </ThemeProvider>}
    </>
  )
}

export default App;

/* Index Page */
// Search
// Filter
// Grid of country cards
  // Card
    // Flag image
    // Country name
    // Country details
      // Population
      // Region
      // Capital

/* Detail Page */
// Back Button
// Country Flag
// Country Details
  // Header
  // Details
  // Border Countries section
    // "Border Countries"
    // Map of countries to links/buttons
