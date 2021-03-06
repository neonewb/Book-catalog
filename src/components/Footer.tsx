import { Box, Link, makeStyles } from '@material-ui/core'
import React, { FC } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import TelegramIcon from '@material-ui/icons/Telegram'

const useStyles = makeStyles({
  github: {
    color: 'grey',
    '&:hover': {
      color: 'black',
    },
    marginRight: 8,
  },
  telegram: {
    color: 'grey',
    '&:hover': {
      color: '#27A6E5',
    },
  },
})

export const Footer: FC = () => {
  const classes = useStyles()
  return (
    <Box textAlign='center' m={2}>
      <Link href='https://github.com/neonewb' target='_blank'>
        <GitHubIcon className={classes.github} />
      </Link>
      <Link href='https://telegram.me/NeoRuslan' target='_blank'>
        <TelegramIcon className={classes.telegram} />
      </Link>
    </Box>
  )
}
