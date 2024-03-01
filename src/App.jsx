import { useState } from 'react'
import Home from './Pages/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom";



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
