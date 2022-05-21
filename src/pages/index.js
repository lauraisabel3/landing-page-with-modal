import React, {useState, useEffect} from "react"
import styles from '../styles/global.css'
import NavBar from "../Components/NavBar"
import Header from "../Components/Header"
import Main from "../Components/Main"
import Footer from "../Components/Footer"




const IndexPage = () => {
  const isBrowser = typeof window !== 'undefined'
  let width;
  if(isBrowser) {
    width = window.innerWidth
  }

  const [ screenWidth, setScreenWidth] = useState(width)

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  return (
    <>
      <NavBar screenWidth={screenWidth} />
      <Header screenWidth={screenWidth}/>
      <Main/>
      <Footer />
    </>
  )
}

export default IndexPage
