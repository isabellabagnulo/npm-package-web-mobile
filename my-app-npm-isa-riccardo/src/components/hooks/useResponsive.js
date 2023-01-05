import { useMediaQuery } from "react-responsive"

const useResponsive = () => {
  const Desktop = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 992 })
    return isNotMobile ? children : null
  }

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 991 })
    return isMobile ? children : null
  }

  const isMobile = useMediaQuery({ maxWidth: 991 })
  const isDesktop = useMediaQuery({ minWidth: 992 })

  return [Mobile, Desktop, isMobile, isDesktop]
}

export default useResponsive
