import axios from 'axios'

import { useEffect, useState } from 'react'

export default function fetchPics(query: string) {
  const [pics, setPics] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setIsError] = useState("")

  useEffect(() => {
    setIsLoading(true)
    axios
      .get('https://api.unsplash.com/search/photos', {
        headers: {
          Authorization: 'Client-ID bNzSTL_spk6w-HM3_6vqxDhriUNiyzNpuYkbpK8P3Ig'
        },
        params: {
          query: query
        }
      })
      .then(res => {
        setPics(res.data.results)
      }).catch(err => {
        setIsError(err.message)
      })
      .finally(() => setIsLoading(false))
  }, [query])

  return { pics, isLoading, error }
}
