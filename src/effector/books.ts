import { createEffect, createEvent, createStore } from 'effector'
import { showSnack } from '../components/Notifier'
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

// Fetch books
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
fetchBooksFx.fail.watch(({ error }) => {
  console.error(error)
})

// Add book
export const addBookFx = createEffect<Book, void, Error>((book) => {
  db.collection('books').doc(book.id).set(book)
})
addBookFx.done.watch(({ result, params }) => {
  updateBookEvent(params)
  showSnack('Книга добавлена', 'success')
})
addBookFx.fail.watch(({ error, params }) => {
  console.error(error)
  showSnack(`Ошибка: ${error.message}`, 'error')})

// Update book
export const updateBookFx = createEffect<Book, void, Error>((book) => {
  db.collection('books').doc(book.id).update(book)
})
updateBookFx.done.watch(({ result, params }) => {
  updateBookEvent(params)
  showSnack('Книга изменена', 'info')
})
updateBookFx.fail.watch(({ error, params }) => {
  console.error(error)
  showSnack(`Ошибка: ${error.message}`, 'error')})

// Delete book from state
export const deleteBookEvent = createEvent<Book['id']>()

const deleteBookFromState = (state: Book[], id: string) => {
  return state.filter((b) => b.id !== id)
}

booksStore.on(deleteBookEvent, deleteBookFromState)

// Delete book
export const deleteBookFx = createEffect<Book['id'], void, Error>((id) => {
  db.collection('books').doc(id).delete()
})

deleteBookFx.done.watch(({ result, params }) => {
  deleteBookEvent(params)
  showSnack('Книга удалена', 'info')
})
deleteBookFx.fail.watch(({ error, params }) => {
  console.error(error)
  showSnack(`Ошибка: ${error.message}`, 'error')
})
