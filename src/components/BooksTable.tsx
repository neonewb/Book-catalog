import React, { FC } from 'react'
import MUIDataTable, { MUIDataTableOptions } from 'mui-datatables'
import { Box, makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useStore } from 'effector-react'
import { booksStore, deleteBookFx } from '../effector/books'

const useStyles = makeStyles({
  table: {
    minWidth: 284,
    '& tr': {
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
})

export const BooksTable: FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const books = useStore(booksStore)

  const columns = [
    {
      name: 'name',
      label: '📚 Название',
    },
    {
      name: 'author',
      label: '🖊️ Автор',
    },
    {
      name: 'year',
      label: '🗓️ Год',
    },
    {
      name: 'isbn',
      label: '#️⃣ ISBN',
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
    //@ts-ignore
    onRowsDelete: (rowsDeleted) => {
      rowsDeleted.data.forEach((e) => {
        deleteBookFx(data[e.dataIndex].id)
      })
    },
    draggableColumns: {
      enabled: true,
      transitionTime: 100,
    },
    textLabels: {
      body: {
        noMatch: 'Извините, книг нет.',
        toolTip: 'Сортировать',
        columnHeaderTooltip: (column) => `Сортировать по ${column.label}`,
      },
      pagination: {
        next: 'Следующая страница',
        previous: 'Предыдущая страница',
        rowsPerPage: '',
        displayRows: 'из',
      },
      toolbar: {
        search: 'Поиск',
        downloadCsv: 'Скачать CSV',
        print: 'Печать',
        viewColumns: 'Посмотреть столбцы',
        filterTable: 'Фильтровать таблицу',
      },
      filter: {
        all: 'ВСЕ',
        title: 'ФИЛЬТРЫ',
        reset: 'СБРОСИТЬ',
      },
      viewColumns: {
        title: 'Показать столбцы',
        titleAria: 'Показать/спрятать столбцы',
      },
      selectedRows: {
        text: 'книг(и) выбрано',
        delete: 'Удалить',
        deleteAria: 'Удалить Выбранные книги',
      },
    },
  }

  return (
    <Box m={1} className={classes.table}>
      <MUIDataTable
        title={'Каталог книг'}
        data={data}
        columns={columns}
        options={options}
      />
    </Box>
  )
}
