import React from "react";
import Header from "./components/Header"
import Banner from "./components/Banner"
import Special from "./components/Special"
import Reviews from "./components/Reviews"
import Menu from "./components/Menu"
import Hero from "./components/Hero"
import About from "./components/About"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <Banner/>
    <Special/>
    <Menu/>
    <Reviews/>
    <About/>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}

export default App
