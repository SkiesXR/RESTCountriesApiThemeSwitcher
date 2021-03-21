import { useState, useEffect } from 'react'

const useFetch = (url, options) => {
  const [response, setResponse] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await fetch(url, options)
        const json = await res.json()
        setResponse(json)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    };
    fetchData()
  }, [])

  return { isLoading, response, error }
}

export default useFetch