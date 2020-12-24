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
import { emailSchema } from '../utils/yupSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import GoogleButton from '../utils/google/GoogleButton'
import { resetPassFX } from '../effector/auth'
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

export const ResetPass: FC = () => {
  useDocumentTitle('Сбросить пароль')
  const classes = useStyles()

  const { register, handleSubmit, errors } = useForm<{ email: string }>({
    resolver: yupResolver(emailSchema),
  })

  const onSubmit = (email: { email: string }) => {
    resetPassFX(email)
  }

  return (
    <Paper className={classes.paper} elevation={4}>
      <Box marginBottom={1}>
        <Typography variant='h6'>Сброс пароля</Typography>
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
              label='Email'
              name='email'
              type='email'
              id='email'
              autoComplete='email'
            />
          </Grid>
          <Grid item>
            <Button fullWidth size='large' color='primary' type='submit'>
              Сбросить
            </Button>
          </Grid>
        </Grid>
      </form>
      <Box marginTop={1}>
        <GoogleButton />
      </Box>
    </Paper>
  )
}
