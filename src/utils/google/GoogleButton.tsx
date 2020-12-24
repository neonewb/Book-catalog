import React, { FC } from 'react'
import { Button, Grid, makeStyles } from '@material-ui/core'
import GoogleIcon from './GoogleIcon'
import { teal } from '@material-ui/core/colors'
import { googleSignInFX } from '../../effector/auth'

const useStyles = makeStyles(() => ({
  googleButton: {
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: teal[50],
    },
  },
}))

const GoogleButton: FC = () => {
  const classes = useStyles()

  const handleGoogleSignIn = () => {
    googleSignInFX()
  }

  return (
    <Grid item xs={12}>
      <Button
        className={classes.googleButton}
        onClick={handleGoogleSignIn}
        startIcon={<GoogleIcon />}
        fullWidth
        size='large'
        color='primary'
      >
        Войти с google
      </Button>
    </Grid>
  )
}

export default GoogleButton
