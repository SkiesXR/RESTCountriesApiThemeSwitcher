import { Route, Switch } from 'react-router-dom'
import Header from './Components/Header'
import DetailPage from './Components/DetailPage'
import IndexPage from './Components/IndexPage'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/detail'>
          <DetailPage />
        </Route>
        <Route path='/'>
          <IndexPage />
        </Route>
      </Switch>
    </>
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
