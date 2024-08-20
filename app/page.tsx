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
import SortBar from '@/components/SortBar'

export default function Home() {
  const [query, setQuery] = useState('')
  const [sortState, setSortState] = useState({ sortBy: 'year', order: 'asc' }) // Default values
  const { books, totalPages, currentPage } = useAppSelector(
    state => state.books
  )
  const { isLoading, error, fetchBooks } = useFetchBooks()

  const sortedBooks = useMemo(() => {
    const sorted = [...books].sort((a, b) => {
      if (sortState.sortBy === 'year') {
        return sortState.order === 'asc'
          ? a.first_publish_year - b.first_publish_year
          : b.first_publish_year - a.first_publish_year
      } else if (sortState.sortBy === 'pages') {
        return sortState.order === 'asc'
          ? a.number_of_pages_median - b.number_of_pages_median
          : b.number_of_pages_median - a.number_of_pages_median
      }
      return 0
    })
    return sorted
  }, [books, sortState])

  const paginatedBooks = useMemo(() => {
    return sortedBooks.slice((currentPage - 1) * 12, currentPage * 12)
  }, [sortedBooks, currentPage])

  const dispatch = useDispatch<AppDispatch>()

  const handleFind = () => {
    fetchBooks(query)
  }
  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page))
  }
  return (
    <main className='my-12 flex min-h-screen flex-col'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='mx-10 my-20 text-center text-7xl font-bold leading-relaxed text-white'>
          The best books for you with{' '}
          <span className='text-pink-100'>Shelfly</span>
        </h1>
        <SearchBar query={query} setQuery={setQuery} onClick={handleFind} />
      </div>
      {isLoading ? (
        <Loader>We are trying to find the appropriate books for you </Loader>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        books.length !== 0 && (
          <>
            <SortBar
              sortState={sortState}
              setSortState={newSortState => setSortState(newSortState)}
            />
            <BooksGrid books={paginatedBooks} />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )
      )}
    </main>
  )
}
