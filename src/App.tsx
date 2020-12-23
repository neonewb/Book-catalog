import { CssBaseline, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Routes } from './Routes'
import { theme } from './theme/theme'

export const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Routes />
        <Footer />
      </ThemeProvider>
    </Router>
  )
}
