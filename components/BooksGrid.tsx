import Image from 'next/image'
import images from '../app/(data)/images.json'

import { Book } from '../app/(data)/interfaces'
import BooksColumn from './BooksColumn'

type BooksGridProps = {
  books: Array<Book>
}

function BooksGrid({ books }: BooksGridProps) {
  const columns: Book[][] = [[], [], []]

  books.forEach((book, index) => {
    columns[index % 3].push(book)
  })

  return (
    <div className='grid w-full grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2 md:grid-cols-3'>
      {columns.map((column, index) => (
        <BooksColumn books={column} key={index} />
      ))}
    </div>
  )
}

export default BooksGrid
