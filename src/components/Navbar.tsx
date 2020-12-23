import { AppBar, Button, Grid, Toolbar } from '@material-ui/core'
import React, { FC } from 'react'
import LibraryAddRoundedIcon from '@material-ui/icons/LibraryAddRounded'
import CollectionsBookmarkRoundedIcon from '@material-ui/icons/CollectionsBookmarkRounded'
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded'
import LockRoundedIcon from '@material-ui/icons/LockRounded'
import { Link } from 'react-router-dom'

export const Navbar: FC = () => {
  return (
    <AppBar color='primary' position='static'>
      <Toolbar>
        <Grid container justify='space-between'>
          <Grid item>
            <Button
              component={Link}
              to='/'
              startIcon={<CollectionsBookmarkRoundedIcon />}
              color='inherit'>
              Каталог
            </Button>
            <Button
              component={Link}
              to='/add'
              startIcon={<LibraryAddRoundedIcon />}
              color='inherit'>
              Добавить
            </Button>
          </Grid>
          <Grid item>
            <Button
              component={Link}
              to='/login'
              startIcon={<VpnKeyRoundedIcon />}
              color='inherit'>
              Вход
            </Button>
            <Button
              component={Link}
              to='/signup'
              startIcon={<LockRoundedIcon />}
              color='inherit'>
              Регистрация
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
