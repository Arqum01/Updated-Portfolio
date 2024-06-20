import React from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import CompanyExperience from './components/Experience/CompanyExperience'

function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <CompanyExperience/>
      <Footer/>
    </>
  )
}

export default App
