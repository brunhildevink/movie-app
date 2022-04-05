import { useState, useEffect } from 'react'
import formatUrl from '../utils/helpers/formatUrl'

interface Params {
  [key: string]: any
}

interface State<T> {
  data?: T
  error?: Error
  loading: boolean
  refetch: () => void
  updateUrl: React.Dispatch<React.SetStateAction<string>>
}

const useFetch = <T,>(path: string, params: Params): State<T> => {
  const [url, updateUrl] = useState(formatUrl(path, params))
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | undefined>(undefined)
  const [refetchIndex, setRefetchIndex] = useState(0)

  const refetch = () => {
    setRefetchIndex((prevRefetchIndex) => prevRefetchIndex + 1)
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const result = await response.json()
      if (response.ok) {
        setData(result)
      } else {
        setError(result)
      }
    } catch (err) {
      if (err instanceof Error) setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [url, refetchIndex])

  return { data, error, loading, refetch, updateUrl }
}

export default useFetch
