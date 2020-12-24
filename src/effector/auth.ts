import { createEffect, createEvent, createStore } from 'effector'
import { showSnack } from '../components/Notifier'
import { auth, googleProvider } from '../configs/init-firebase'

export const userStore = createStore<User>({
  email: null,
  uid: null,
  displayName: null,
  photoURL: null,
})

export const signIn = createEvent<User>()
export const signUp = createEvent<User>()
export const signOut = createEvent()
export const googleSignIn = createEvent<User>()

const updateUserState = (state: User, user: User) => {
  const { email, uid, displayName, photoURL } = user
  return {
    email,
    uid,
    displayName,
    photoURL,
  }
}

userStore.on(signIn, updateUserState)
userStore.on(signUp, updateUserState)
userStore.reset(signOut)

// Sign Up
export const signUpFX = createEffect(async ({ email, password }: SignInput) => {
  const response = await auth.createUserWithEmailAndPassword(email, password)
  return response.user
})

signUpFX.done.watch(({ result, params }) => {
  if (result) {
    signUp(result)
    showSnack(`Здравствуйте, ${result?.displayName || result.email}!`, 'info')
  }
})
signUpFX.fail.watch(({ error, params }) => {
  console.error('Error:', error)
  showSnack(`Ошибка: ${error.message}`, 'error')
})

// Sign In
export const signInFX = createEffect(async ({ email, password }: SignInput) => {
  const response = await auth.signInWithEmailAndPassword(email, password)
  return response.user
})

signInFX.done.watch(({ result, params }) => {
  if (result) {
    signIn(result)
    showSnack(`Здравствуйте, ${result?.displayName || result.email}!`, 'info')
  }
})
signInFX.fail.watch(({ error, params }) => {
  console.error('Error:', error)
  showSnack(`Ошибка: ${error.message}`, 'error')
})

// Sign In With Google
export const googleSignInFX = createEffect(async () => {
  const response = await auth.signInWithPopup(googleProvider)
  return response.user
})

googleSignInFX.done.watch(({ result, params }) => {
  if (result) {
    signIn(result)
    showSnack(`Здравствуйте, ${result?.displayName || result.email}!`, 'info')
  }
})
googleSignInFX.fail.watch(({ error, params }) => {
  console.error('Error:', error)
  showSnack(`Ошибка: ${error.message}`, 'error')
})

// Sign Out
export const signOutFX = createEffect(async () => {
  const response = await auth.signOut()
  return response
})

signOutFX.done.watch(({ result, params }) => {
  signOut()
})
signOutFX.fail.watch(({ error, params }) => {
  console.error('Error:', error)
  showSnack(`Ошибка: ${error.message}`, 'error')
})

// Reset Password
export const resetPassFX = createEffect(
  async ({ email }: { email: string }) => {
    const response = await auth.sendPasswordResetEmail(email)
    return response
  }
)

resetPassFX.done.watch(({ result, params }) => {
  showSnack('Письмо отправлено', 'info')
})
resetPassFX.fail.watch(({ error, params }) => {
  console.error('Error:', error)
  showSnack(`Ошибка: ${error.message}`, 'error')
})
