import { createMuiTheme } from '@material-ui/core/styles'
import { indigo, teal } from '@material-ui/core/colors'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[500],
      dark: teal[900],
      light: teal[50]
    },
    secondary: {
      main: indigo[500],
    },
  },
})
