import { yupResolver } from '@hookform/resolvers/yup'
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
import { nanoid } from 'nanoid'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { addBookFx } from '../effector/books'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { bookSchema } from '../utils/yupSchema'
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

export const AddBook: FC = () => {
  const classes = useStyles()
  useDocumentTitle('Добавить книгу')

  const { register, handleSubmit, errors } = useForm<Book>({
    resolver: yupResolver(bookSchema),
  })

  const onSubmit = (data: Book) => {
    data.id = nanoid()
    addBookFx(data)
  }

  return (
    <Paper className={classes.paper} elevation={4}>
      <Box marginBottom={1}>
        <Typography variant='h6'>Добавить книгу</Typography>
      </Box>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction='column' spacing={1}>
          <Grid item>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <TitleRoundedIcon />
                  </InputAdornment>
                ),
              }}
              autoFocus
              fullWidth
              error={!!errors.title}
              helperText={errors.title?.message}
              name='title'
              inputRef={register({ required: true })}
              label='Название'
            />
          </Grid>
          <Grid item>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <CreateRoundedIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
              error={!!errors.author}
              helperText={errors.author?.message}
              name='author'
              inputRef={register({ required: true })}
              label='Автор'
            />
          </Grid>
          <Grid item>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <TodayRoundedIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
              error={!!errors.year}
              helperText={errors.year?.message}
              name='year'
              inputRef={register({ required: true })}
              label='Год'
            />
          </Grid>
          <Grid item>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <ClosedCaptionRoundedIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
              error={!!errors.isbn}
              helperText={errors.isbn?.message}
              name='isbn'
              inputRef={register({ required: true })}
              label='ISBN'
            />
          </Grid>
          <Grid item>
            <Button fullWidth size='large' color='primary' type='submit'>
              Добавить
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}
