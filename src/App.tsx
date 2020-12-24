import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { SnackbarProvider } from 'notistack'
import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Notifier } from './components/Notifier'
import { fetchBooksFx } from './effector/books'
import { useAuth } from './hooks/useAuth'
import { Routes } from './Routes'
import { theme } from './theme/theme'

export const App = () => {
  useEffect(() => {
    fetchBooksFx(null)
  }, [])
  
  useAuth()

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <SnackbarProvider preventDuplicate maxSnack={3}>
          <CssBaseline />
          <Navbar />
          <Routes />
          <Footer />
          <Notifier />
        </SnackbarProvider>
      </ThemeProvider>
    </Router>
  )
}
