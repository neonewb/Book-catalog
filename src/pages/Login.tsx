import {
  Box,
  Button,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { schemaSI } from '../utils/yupSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import GoogleButton from '../utils/google/GoogleButton'
import { signInFX } from '../effector/auth'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: 'auto',
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
    maxWidth: 400,
    minWidth: 300,
  },
}))

export const Login: FC = () => {
  useDocumentTitle('Вход')
  const classes = useStyles()

  const { register, handleSubmit, errors } = useForm<SignInput>({
    resolver: yupResolver(schemaSI),
  })

  const onSubmit = (signInput: SignInput) => {
    signInFX(signInput)
  }

  return (
    <Paper className={classes.paper} elevation={4}>
      <Box marginBottom={1}>
        <Typography variant='h6'>Вход</Typography>
      </Box>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction='column' spacing={2}>
          <Grid item>
            <TextField
              autoFocus
              fullWidth
              inputRef={register}
              error={!!errors.email}
              helperText={errors.email?.message}
              label='Логин'
              name='email'
              type='email'
              id='email'
              autoComplete='email'
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              inputRef={register}
              error={!!errors.password}
              helperText={errors.password?.message}
              label='Пароль'
              name='password'
              type='password'
              id='password'
              autoComplete='current-password'
            />
          </Grid>
          <Button fullWidth size='large' color='primary' type='submit'>
            Войти
          </Button>
          <GoogleButton />
        </Grid>
      </form>
    </Paper>
  )
}
