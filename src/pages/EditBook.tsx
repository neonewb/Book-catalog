import {
  Box,
  Button,
  Grid,
  InputAdornment,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core'
import { useStore } from 'effector-react'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { booksStore, updateBookFx } from '../effector/books'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import TitleRoundedIcon from '@material-ui/icons/TitleRounded'
import CreateRoundedIcon from '@material-ui/icons/CreateRounded'
import TodayRoundedIcon from '@material-ui/icons/TodayRounded'
import ClosedCaptionRoundedIcon from '@material-ui/icons/ClosedCaptionRounded'

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: 'auto',
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
    maxWidth: 400,
    minWidth: 300,
  },
}))

export const EditBook: FC = () => {
  const classes = useStyles()
  useDocumentTitle('Редактировать книгу')
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
      <Paper className={classes.paper} elevation={4}>
        <Box marginBottom={1}>
          <Typography variant='h6'>Редактировать книгу</Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container direction='column' spacing={1}>
            <Grid item>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <TitleRoundedIcon />
                    </InputAdornment>
                  ),
                }}
                autoFocus
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
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <CreateRoundedIcon />
                    </InputAdornment>
                  ),
                }}
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
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <TodayRoundedIcon />
                    </InputAdornment>
                  ),
                }}
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
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <ClosedCaptionRoundedIcon />
                    </InputAdornment>
                  ),
                }}
                error={!!errors.isbn}
                helperText={errors.isbn?.type}
                name='isbn'
                inputRef={register({ required: true })}
                label='ISBN'
                defaultValue={editBook.isbn}
              />
            </Grid>
            <Grid item>
              <Button fullWidth size='large' color='primary' type='submit'>
                Принять
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    )
  } else {
    return null
  }
}
