import axios from 'axios'
import { useState } from 'react'
import { setBooks, clearBooks } from '@/lib/features/books-slice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/lib/store'

export default function useFetchBooks() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const dispatch = useDispatch<AppDispatch>()

  const fetchBooks = async (query: string) => {
    const source = axios.CancelToken.source()
    dispatch(clearBooks())
    setIsLoading(true)
    setError('')

    try {
      const res = await axios.get(`https://openlibrary.org/search.json`, {
        params: {
          q: query
        },
        cancelToken: source.token
      })

      const newBooks = res.data.docs.map((b: any) => ({
        id: `${b.title}-${b.number_of_pages_median}-${b.first_publish_year}`,
        title: b.title,
        author_name: b.author_name || [],
        number_of_pages_median: b.number_of_pages_median,
        first_publish_year: b.first_publish_year,
        language: b.language || []
      }))

      dispatch(setBooks(newBooks))
    } catch (err: any) {
      if (!axios.isCancel(err)) {
        setError(err.message)
      }
    } finally {
      setIsLoading(false)
    }

    return () => source.cancel()
  }

  return { isLoading, error, fetchBooks }
}
