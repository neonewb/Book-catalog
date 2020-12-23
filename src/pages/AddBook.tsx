import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core'
import { nanoid } from 'nanoid'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { addBookFx } from '../effector/store'

export const AddBook: FC = () => {
  const { register, handleSubmit, errors } = useForm<Book>()

  const onSubmit = (data: Book) => {
    data.id = nanoid()
    addBookFx(data)
  }

  return (
    <Box m={1}>
      <Paper elevation={4}>
        <Box p={2}>
          <Box marginBottom={1}>
            <Typography variant='h6'>Добавить книгу</Typography>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={1}>
              <Grid item>
                <TextField
                  error={!!errors.title}
                  helperText={errors.title?.type}
                  name='title'
                  inputRef={register({ required: true })}
                  label='Название'
                />
              </Grid>
              <Grid item>
                <TextField
                  error={!!errors.author}
                  helperText={errors.author?.type}
                  name='author'
                  inputRef={register({ required: true })}
                  label='Автор'
                />
              </Grid>
              <Grid item>
                <TextField
                  error={!!errors.year}
                  helperText={errors.year?.type}
                  name='year'
                  inputRef={register({ required: true })}
                  label='Год'
                />
              </Grid>
              <Grid item>
                <TextField
                  error={!!errors.isbn}
                  helperText={errors.isbn?.type}
                  name='isbn'
                  inputRef={register({ required: true })}
                  label='ISBN'
                />
              </Grid>
            </Grid>
            <Button size='large' color='primary' type='submit'>
              Добавить
            </Button>
          </form>
        </Box>
      </Paper>
    </Box>
  )
}
