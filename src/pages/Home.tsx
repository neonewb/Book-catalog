import React, { FC, useEffect } from 'react'
import { BooksTable } from '../components/BooksTable'
import { getBooksFx } from '../effector/store'

type Props = {}

export const Home: FC<Props> = () => {
  useEffect(() => {
    //@ts-ignore
    getBooksFx()
  }, [])
 
  return (
    <BooksTable />
  )
}
