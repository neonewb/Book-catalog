import { AppBar, Button, Grid, Toolbar, Typography } from '@material-ui/core'
import React, { FC } from 'react'
import LibraryAddRoundedIcon from '@material-ui/icons/LibraryAddRounded'
import CollectionsBookmarkRoundedIcon from '@material-ui/icons/CollectionsBookmarkRounded'
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded'
import LockRoundedIcon from '@material-ui/icons/LockRounded'
import { Link } from 'react-router-dom'
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded'
import { signOutFX, userStore } from '../effector/auth'
import { useStore } from 'effector-react'

export const Navbar: FC = () => {
  const signOut = () => signOutFX()
  const user = useStore(userStore)

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

          {user.email ? (
            <Grid item>
              <Grid container alignItems='center'>
                <Grid item>
                  <Typography>{user.displayName || user.email}</Typography>
                </Grid>
                <Grid item>
                  <Button
                    onClick={signOut}
                    startIcon={<ExitToAppRoundedIcon />}
                    color='inherit'>
                    Выход
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          ) : (
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
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
