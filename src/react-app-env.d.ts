/// <reference types="react-scripts" />

type Book = {
  title: string
  author: string
  year: string
  isbn: string
  id: string
}

type User = {
  email: null | string
  uid: null | string
  displayName: null | string
  photoURL: null | string
}

type SignInput = {
  email: string
  password: string
  confrimpassword?: string
}

type UserData = {
  email: string
  password?: string
  uid: string
}

type Notice = {
  message: string
  dismissed: boolean
  key: string
  options: {
    key: string
    variant: "default" | "error" | "success" | "warning" | "info" | undefined
    action?: (key: string) => void
    onClose?: () => void
    onExited?: () => void
  }
}
