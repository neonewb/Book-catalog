import {
  AppBar,
  Button,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@material-ui/core'
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
  const match600 = useMediaQuery('(min-width:600px)')
  const match900 = useMediaQuery('(min-width:900px)')
  const signOut = () => signOutFX()
  const user = useStore(userStore)

  if (match600) {
    return (
      <AppBar color='primary' position='sticky'>
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
                  {match900 &&
                  <Grid item>
                    <Typography>{user.displayName || user.email}</Typography>
                  </Grid>
                  }
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
  } else {
    return (
      <AppBar color='primary' position='sticky' style={{ minWidth: 300 }}>
        <Toolbar>
          <Grid container justify='space-between'>
            <Grid item>
              <IconButton component={Link} to='/' color='inherit'>
                <CollectionsBookmarkRoundedIcon />
              </IconButton>
              <IconButton component={Link} to='/add' color='inherit'>
                <LibraryAddRoundedIcon />
              </IconButton>
            </Grid>

            {user.email ? (
              <Grid item>
                <Grid container alignItems='center'>
                  <Grid item>
                    <IconButton onClick={signOut} color='inherit'>
                      <ExitToAppRoundedIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              <Grid item>
                <IconButton component={Link} to='/login' color='inherit'>
                  <VpnKeyRoundedIcon />
                </IconButton>
                <IconButton component={Link} to='/signup' color='inherit'>
                  <LockRoundedIcon />
                </IconButton>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}
