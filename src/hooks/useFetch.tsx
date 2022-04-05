import { useState, useEffect } from 'react'
import formatUrl from '../utils/helpers/formatUrl'

interface State<T> {
  data?: T
  error?: Error
  loading: boolean
  updateUrl: React.Dispatch<React.SetStateAction<string>>
}

const useFetch = <T,>(path: string, params: any, skip = false): State<T> => {
  const [url, updateUrl] = useState(formatUrl(path, params))
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | undefined>(undefined)

  const fetchData = async () => {
    if (skip) return

    setLoading(true)
    try {
      const response = await fetch(url)
      const result = await response.json()
      if (response.ok) {
        setData(result)
      } else {
        setError(result)
      }
      setLoading(false)
    } catch (err) {
      if (err instanceof Error) setError(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return { data, loading, error, updateUrl }
}

export default useFetch
