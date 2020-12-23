import { Box, Grid, Paper, TextField, Typography } from '@material-ui/core'
import React, { FC } from 'react'

type Props = {}

export const Login: FC<Props> = () => {
  return (
    <Box m={1}>
      <Paper elevation={4}>
        <Box p={2}>
          <Box marginBottom={1}>
            <Typography variant='h6'>Вход</Typography>
          </Box>
          <Grid container spacing={1}>
            <Grid item>
              <TextField label='Логин' />
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