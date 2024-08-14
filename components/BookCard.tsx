import { Book } from '@/app/(data)/interfaces'

function BookCard({ book, index }: { book: Book; index: number }) {
  return (
    <div
      key={`${book.title}-${book.first_publish_year}-${index}`}
      className='relative transform rounded-lg bg-white px-6 py-20 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl'
    >
      <div className='flex flex-col items-center'>
        <h1 className='text-center text-2xl font-semibold text-gray-800'>
          {book.title}
        </h1>
        <h3 className='mt-2 text-center text-lg font-medium text-gray-600'>
          Author: {book.author_name[0] ? book.author_name[0] : 'No author'}
        </h3>
      </div>
      <div className='absolute inset-x-0 bottom-0 flex flex-col items-center justify-center rounded-b-lg bg-gray-100 p-4 opacity-0 transition-opacity duration-300 hover:opacity-100'>
        <p className='text-sm text-gray-700'>
          Pages: {book.number_of_pages_median ?? 'Unknown'}
        </p>
        <p className='text-sm text-gray-700'>
          First Published: {book.first_publish_year}
        </p>
      </div>
    </div>
  )
}

export default BookCard
