import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'
import { AddBook } from './pages/AddBook'
import { EditBook } from './pages/EditBook'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'

export const Routes: FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/add' component={AddBook} />
      <Route path='/edit/:id' component={EditBook} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
    </Switch>
  )
}
