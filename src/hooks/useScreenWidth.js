import { useState, useEffect } from "react"

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const handleResize = () => setScreenWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return screenWidth
}

export default useScreenWidth
