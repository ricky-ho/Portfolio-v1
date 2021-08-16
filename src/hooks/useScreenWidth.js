import { useState, useEffect } from "react"

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState()

  useEffect(() => {
    setScreenWidth(window.innerWidth)

    const handleResize = () => setScreenWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return screenWidth
}

export default useScreenWidth
