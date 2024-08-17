import React from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import CompanyExperience from './components/Experience/CompanyExperience'
import ClientsExperience from './components/Experience/ClientsExperience'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import MobilePortfolio from './components/MobilePortfolio'

function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <CompanyExperience/>
      <ClientsExperience/>
      <Skills/>
      <Portfolio/>
      <MobilePortfolio/>
      <Footer/>
    </>
  )
}

export default App
