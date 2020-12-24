import { useEffect } from 'react'
import { auth } from '../configs/init-firebase'
import { signIn, signOut } from '../effector/auth'

export const useAuth = () => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        signIn(user)
      } else {
        signOut()
      }
    })
    return () => unsubscribeFromAuth()
  }, [])
}
