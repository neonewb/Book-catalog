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
import { schemaSU } from '../utils/yupSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { signUpFX } from '../effector/auth'
import GoogleButton from '../utils/google/GoogleButton'
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

export const Signup: FC = () => {
  useDocumentTitle('Регистрация')
  const classes = useStyles()

  const { register, handleSubmit, errors } = useForm<SignInput>({
    resolver: yupResolver(schemaSU),
  })

  const onSubmit = (signInput: SignInput) => {
    signUpFX(signInput)
  }

  return (
    <Paper className={classes.paper} elevation={4}>
      <Box marginBottom={1}>
        <Typography variant='h6'>Регистрация</Typography>
      </Box>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction='column' spacing={2}>
          <Grid item>
            <TextField
              fullWidth
              autoFocus
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
          <Grid item>
            <TextField
              fullWidth
              inputRef={register}
              error={!!errors.confrimpassword}
              helperText={errors.confrimpassword?.message}
              label='Пароль'
              name='confrimpassword'
              type='password'
              id='confrimpassword'
              autoComplete='current-password'
            />
          </Grid>
          <Button fullWidth size='large' color='primary' type='submit'>
            Зарегистрироваться
          </Button>
          <GoogleButton />
        </Grid>
      </form>
    </Paper>
  )
}
