import { createEffect, createEvent, createStore } from 'effector'
import { db } from '../configs/init-firebase'

export const booksStore = createStore<Book[]>([])

export const updateBookEvent = createEvent<Book>()

const updateBookState = (state: Book[], book: Book) => {
  if (state.some((b) => b.id === book.id)) {
    return state.map((b) =>
      b.id === book.id
        ? {
            ...book,
          }
        : b
    )
  } else {
    state.push(book)
    return [...state]
  }
}

booksStore.on(updateBookEvent, updateBookState)

export const fetchBooks = () => {
  db.collection('books')
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        //@ts-ignore
        updateBookEvent(doc.data())
      })
    })
}

export const fetchBooksFx = createEffect()
fetchBooksFx.use(fetchBooks)
fetchBooksFx.fail.watch(({ error, params }) => {
  console.error(error)
})

export const addBook = (book: Book) => {
  db.collection('books').doc(book.id).set(book)
}

export const addBookFx = createEffect()
//@ts-ignore
addBookFx.use(addBook)
addBookFx.done.watch(({ result, params }) => {
  //@ts-ignore
  updateBookEvent(params)
})
addBookFx.fail.watch(({ error, params }) => {
  console.error(error)
})

export const updateBook = (book: Book) => {
  db.collection('books').doc(book.id).update(book)
}

export const updateBookFx = createEffect()
//@ts-ignore
updateBookFx.use(updateBook)
updateBookFx.done.watch(({ result, params }) => {
  //@ts-ignore
  updateBookEvent(params)
})
updateBookFx.fail.watch(({ error, params }) => {
  console.error(error)
})

export const deleteBook = (id: Book['id']) => {
  db.collection('books').doc(id).delete()
}

export const deleteBookFx = createEffect()
//@ts-ignore
deleteBookFx.use(deleteBook)
deleteBookFx.done.watch(({ result, params }) => {
  //@ts-ignore
  deleteBookEvent(params)
})
deleteBookFx.fail.watch(({ error, params }) => {
  console.error(error)
})

export const deleteBookEvent = createEvent<{ id: string }>()

const deleteBookFromState = (state: Book[], id: string) => {
  console.log('deleteBookFromState')

  return state.filter((b) => b.id !== id)
}

//@ts-ignore
booksStore.on(deleteBookEvent, deleteBookFromState)
