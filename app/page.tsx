'use client'

import { useState } from 'react'
import ImageGrid from './components/ImageGrid'
import SearchBar from './components/SearchBar'
import useFetchPics from './(hooks)/useFetchPics'
import Loader from './components/UI/Loader'
import ErrorMessage from './components/UI/ErrorMessage'

export default function Home() {
  const [query, setQuery] = useState('dogs')

  const { pics, isLoading, error } = useFetchPics(query)

  const handleFind = () => {
    console.log(query)
  }
  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='mx-10 my-20 text-center text-7xl font-bold text-white'>
          The best pictures for you
        </h1>
        <SearchBar query={query} setQuery={setQuery} onClick={handleFind} />
      </div>
      {isLoading && <Loader />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {!isLoading && !error && <ImageGrid pics={pics} />}
    </main>
  )
}
