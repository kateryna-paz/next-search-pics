import { Book } from '../app/(data)/interfaces'
import BookCard from './BookCard'

function BooksColumn({ books }: { books: Book[] }) {
  return (
    <div className='flex flex-col gap-8'>
      {books.map((book, index) => (
        <BookCard
          key={`${book.title}-${book.first_publish_year}-${index}`}
          book={book}
        ></BookCard>
      ))}
    </div>
  )
}

export default BooksColumn
