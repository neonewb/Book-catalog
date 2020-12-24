import React, { FC } from 'react'
import { BooksTable } from '../components/BooksTable'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export const Home: FC = () => {
  useDocumentTitle('Каталог книг')
  return <BooksTable />
}
