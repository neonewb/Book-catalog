import { createEffect, createEvent, createStore } from 'effector'
import { db } from '../configs/firebase.config'

export const booksStore = createStore<Book[]>([
  {
    title: 'Гарри Поттер',
    author: 'Дж. К. Роулинг',
    year: 1997,
    isbn: '978-0-8262-1549-9',
    id: 'uiojklm',
  },
  {
    title: '1984',
    author: 'Джордж Оруэлл',
    year: 1948,
    isbn: '	978-5-17-080115',
    id: 'qweasdzxc',
  },
  {
    title: 'Властелин колец',
    author: 'Дж. Р. Р. Толкин',
    year: 1954,
    isbn: '978-3-16-148410-0',
    id: 'rtyfghvbn',
  },
])

export const update = createEvent<Book>()

const updateBooks = (state: Book[], data: Book) => {
  state.push(data)
  return [...state]
}

booksStore.on(update, updateBooks)

export const getBooksFx = createEffect()

export const getBooks = async () => {
  const res = await db.collection("books").get()
  res.forEach(function (doc: any) {
    console.log(doc)
  })

  return res
}

getBooksFx.use(getBooks)

// // subscribe to effect call
getBooksFx.watch(params => {
  console.log(params)
})

// // subscribe to promise resolve
getBooksFx.done.watch(({result, params}) => {
  console.log(params)
  console.log(result) // resolved value
})

// // subscribe to promise reject (or throw)
getBooksFx.fail.watch(({error, params}) => {
  console.error(params)
  console.error(error) // rejected value
})

// call effect with your params