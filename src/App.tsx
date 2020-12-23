import { CssBaseline, ThemeProvider } from '@material-ui/core'
import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { fetchBooksFx } from './effector/store'
import { Routes } from './Routes'
import { theme } from './theme/theme'

export const App = () => {
  useEffect(() => {
    //@ts-ignore
    fetchBooksFx()
  }, [])
  
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
