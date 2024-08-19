import { Book } from '@/app/(data)/interfaces'
import LikeButton from './UI/LikeButton'

function BookCard({ book, index }: { book: Book; index: number }) {
  return (
    <div className='hover:shadow-3xl bg-light-orange relative transform cursor-pointer rounded-lg border-4 border-white px-3 py-4 shadow-lg transition-transform duration-500 hover:-translate-y-2 hover:border-orange-500'>
      <div className='absolute right-4 top-4'>
        <LikeButton />
      </div>
      <div>
        <div className='flex flex-col pb-20 pt-16'>
          <h1 className='text-center text-2xl font-semibold text-gray-800'>
            {book.title}
          </h1>
          <h3 className='mt-2 text-center text-lg font-medium text-gray-600'>
            Author: {book.author_name[0] ? book.author_name[0] : 'No author'}
          </h3>
        </div>
        <div className='absolute inset-x-0 bottom-0 flex flex-col items-center justify-center rounded-b-sm bg-orange-500 p-4 opacity-0 transition-opacity duration-500 hover:opacity-100'>
          <p className='text-sm text-gray-100'>
            Pages: {book.number_of_pages_median ?? 'Unknown'}
          </p>
          <p className='text-sm text-gray-100'>
            First Published: {book.first_publish_year}
          </p>
        </div>
      </div>
    </div>
  )
}

export default BookCard
