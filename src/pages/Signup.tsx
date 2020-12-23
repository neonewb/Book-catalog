import { Box, Grid, Paper, TextField, Typography } from '@material-ui/core'
import React, { FC } from 'react'

export const Signup: FC = () => {
  return (
    <Box m={1}>
      <Paper elevation={4}>
        <Box p={2}>
          <Box marginBottom={1}>
            <Typography variant='h6'>Регистрация</Typography>
          </Box>
          <Grid container spacing={1}>
            <Grid item>
              <TextField label='Логин' />
            </Grid>
            <Grid item>
              <TextField label='Пароль' />
            </Grid>
            <Grid item>
              <TextField label='Пароль' />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  )
}
