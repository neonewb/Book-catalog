import { Box, Grid, Paper, TextField, Typography } from '@material-ui/core'
import React, { FC } from 'react'

type Props = {}

export const AddBook: FC<Props> = () => {
  return (
    <Box m={1}>
      <Paper elevation={4}>
        <Box p={2}>
          <Box marginBottom={1}>
            <Typography variant='h6'>Добавить книгу</Typography>
          </Box>
          <Grid container spacing={1}>
            <Grid item>
              <TextField label='Название' />
            </Grid>
            <Grid item>
              <TextField label='Автор' />
            </Grid>
            <Grid item>
              <TextField label='Год' />
            </Grid>
            <Grid item>
              <TextField label='ISBN' />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  )
}
