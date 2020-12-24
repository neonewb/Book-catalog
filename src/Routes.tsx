import { useStore } from 'effector-react'
import React, { FC } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { userStore } from './effector/auth'
import { AddBook } from './pages/AddBook'
import { EditBook } from './pages/EditBook'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'

export const Routes: FC = () => {
  const user = useStore(userStore)

  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/add' component={AddBook} />
      <Route path='/edit/:id' component={EditBook} />
      {user.email ? (
        <Redirect to='/' />
      ) : (
        <>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
        </>
      )}
    </Switch>
  )
}
