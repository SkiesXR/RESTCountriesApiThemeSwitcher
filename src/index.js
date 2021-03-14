import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import * as themes from './Theme/schema.json'
import { setToLS } from './Utils/storage'
import './index.css'

const Index = () => {
  setToLS('all-themes', themes.default)
  return <App />
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Index />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

