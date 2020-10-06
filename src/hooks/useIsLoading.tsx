import { useState } from 'react'

const useIsLoading = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return { isLoading, setIsLoading }
}

export default useIsLoading
