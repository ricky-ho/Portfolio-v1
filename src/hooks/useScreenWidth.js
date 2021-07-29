import { useState, useEffect } from "react"

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleResize = () => setScreenWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return screenWidth
}

export default useScreenWidth
