import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from "styled-components"
// components
import HeaderSection from './Components/HeaderSection'
import DetailPage from './Components/DetailPage'
import IndexPage from './Components/IndexPage'
import GlobalStyles from './globalStyles'
// styles
import themes from './themes'

function App() {
  const [theme, setTheme] = useState('light')
  console.log({ theme })

  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <HeaderSection theme={theme} setTheme={setTheme}/>
      <Switch>
        <Route exact path='/detail'>
          <DetailPage />
        </Route>
        <Route path='/'>
          <IndexPage />
        </Route>
      </Switch>
    </ThemeProvider>
  )
}

export default App;

// Header
  // "Where in the World?"
  // Theme Switcher

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
