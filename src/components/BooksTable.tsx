import React, { FC } from 'react'
import MUIDataTable, { MUIDataTableOptions } from 'mui-datatables'
import { Box, makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useStore } from 'effector-react'
import { booksStore } from '../effector/store'

const useStyles = makeStyles({
  pointer: {
    '& tr': {
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
})

type Props = {}

export const BooksTable: FC<Props> = () => {
  const classes = useStyles()
  const history = useHistory()
  const books = useStore(booksStore)

  const columns = [
    {
      name: 'name',
      label: 'Название',
    },
    {
      name: 'author',
      label: 'Автор',
    },
    {
      name: 'year',
      label: 'Год',
    },
    {
      name: 'isbn',
      label: 'ISBN',
    },
  ]

  const data = books.map((b) => {
    return {
      name: b.title,
      author: b.author,
      year: b.year,
      isbn: b.isbn,
      id: b.id,
    }
  })

  const options: MUIDataTableOptions = {
    filterType: 'checkbox',
    onRowClick(rowData, rowMeta) {
      const id = data[rowMeta.dataIndex].id
      history.push(`/edit/${id}`)
    },
    // onRowsDelete: handleDeleteLoad,
    draggableColumns: {
      enabled: true,
      transitionTime: 100,
    },
  }

  return (
    <Box m={1} className={classes.pointer}>
      <MUIDataTable
        title={'Каталог книг'}
        data={data}
        columns={columns}
        options={options}
      />
    </Box>
  )
}
