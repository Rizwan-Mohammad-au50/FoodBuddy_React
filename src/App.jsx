import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Success from './Pages/Success'
import Home from './Pages/Home'
import Error from './Pages/Error'
import ProtectedRoutes from './Components/ProtectedRoutes'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/success' element={<ProtectedRoutes element={<Success />} />} />
      <Route path='/*' element={<Error />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App