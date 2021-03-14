import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from "styled-components"
// components
import HeaderSection from './Components/HeaderSection'
import DetailPage from './Components/DetailPage'
import IndexPage from './Components/IndexPage'
import GlobalStyles from './globalStyles'
// hooks
import { useTheme } from './Theme/useTheme';

function App() {
  const {theme, themeLoaded} = useTheme()
  const [selectedTheme, setSelectedTheme] = useState(theme)

  return (
    <>
    {themeLoaded && <ThemeProvider theme={selectedTheme}>
        <GlobalStyles />
        <HeaderSection theme={selectedTheme} setTheme={setSelectedTheme}/>
        <Switch>
          <Route exact path='/detail'>
            <DetailPage />
          </Route>
          <Route path='/'>
            <IndexPage />
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
