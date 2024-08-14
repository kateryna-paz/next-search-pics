'use client'

import { useMemo, useState } from 'react'
import BooksGrid from '../components/BooksGrid'
import SearchBar from '../components/SearchBar'
import useFetchBooks from './(hooks)/useFetchBooks'
import Loader from '../components/UI/Loader'
import ErrorMessage from '../components/UI/ErrorMessage'
import Pagination from '../components/UI/Pagination'
import { useAppSelector } from '@/lib/store'
import { useDispatch } from 'react-redux'
import { setCurrentPage } from '@/lib/features/books-slice'
import { AppDispatch } from '@/lib/store'

export default function Home() {
  const [query, setQuery] = useState('')
  const { books, totalPages, currentPage } = useAppSelector(
    state => state.books
  )
  const { isLoading, error, fetchBooks } = useFetchBooks()

  const paginatedBooks = useMemo(() => {
    return books.slice((currentPage - 1) * 12, currentPage * 12)
  }, [books, currentPage])

  const dispatch = useDispatch<AppDispatch>()

  const handleFind = () => {
    fetchBooks(query)
  }
  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page))
  }
  return (
    <main className='mb-12 flex min-h-screen flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='mx-10 my-20 text-center text-7xl font-bold text-white'>
          The best books for you
        </h1>
        <SearchBar query={query} setQuery={setQuery} onClick={handleFind} />
      </div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <>
          <BooksGrid books={paginatedBooks} />
          {books.length !== 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </main>
  )
}
