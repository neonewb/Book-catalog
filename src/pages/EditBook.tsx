import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core'
import { useStore } from 'effector-react'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { booksStore, updateBookFx } from '../effector/store'

export const EditBook: FC = () => {
  const books = useStore(booksStore)
  const params = useParams<{ id: string }>()
  const editBook = books.find((b) => b.id === params.id)

  const { register, handleSubmit, errors } = useForm<Book>()

  const onSubmit = (data: Book) => {
    data.id = params.id
    updateBookFx(data)
  }

  if (editBook) {
    return (
      <Box m={1}>
        <Paper elevation={4}>
          <Box p={2}>
            <Box marginBottom={1}>
              <Typography variant='h6'>Редактировать книгу</Typography>
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
                    defaultValue={editBook.title}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    error={!!errors.author}
                    helperText={errors.author?.type}
                    name='author'
                    inputRef={register({ required: true })}
                    label='Автор'
                    defaultValue={editBook.author}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    error={!!errors.year}
                    helperText={errors.year?.type}
                    name='year'
                    inputRef={register({ required: true })}
                    label='Год'
                    defaultValue={editBook.year}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    error={!!errors.isbn}
                    helperText={errors.isbn?.type}
                    name='isbn'
                    inputRef={register({ required: true })}
                    label='ISBN'
                    defaultValue={editBook.isbn}
                  />
                </Grid>
              </Grid>

              <Button size='large' color='primary' type='submit'>
                Принять
              </Button>
            </form>
          </Box>
        </Paper>
      </Box>
    )
  } else {
    return null
  }
}
