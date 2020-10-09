import { useEffect, useRef, useState } from 'react'

function useLoading() {
  const [isLoading, setLoading] = useState<boolean>()

  useEffect(() => {
    setLoading(true)
    setInterval(() => setLoading(false), 100)
  }, [])

  return { isLoading, setLoading }
}

export default useLoading
