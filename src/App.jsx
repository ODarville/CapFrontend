import { useState, useEffect } from 'react'
// import React from "react";
import './App.css';
import Header from './Components/Header';
// import Main from './Components/Main';
import Body from './Pages/HomePage';
import ReviewsForm from './Components/ReviewsForm';
import { Routes, Route } from 'react-router-dom';
import BrothersPizza from './Pages/BrothersPizza'
import SouthernMaid from './Pages/SouthernMaid'
import SenorBurrito from './Pages/SenorBurrito'
import axios from "axios"

// const fetchAPI = async () => {
//   const response = await axios.get("http://localhost:3000/reviews");
//   console.log(response.data.reviews)
// }

// useEffect(() => {
//   fetchAPI
// })

function App() {

  // const fetchAPI = async () => {
  //   const response = await axios.get("http://localhost:3000/reviews");
  //   console.log(response.data.reviews)
  // }
  
  // useEffect(() => {
  //   fetchAPI
  // })

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={ <Body />}/>
        <Route path='/BrothersPizza' element={ <BrothersPizza />}/>
        <Route path='/SouthernMaid' element={ <SouthernMaid />}/>
        <Route path='/SenorBurrito' element={ <SenorBurrito/>}/>
      </Routes>
      <ReviewsForm/>
    </>
    
  )
}

export default App
