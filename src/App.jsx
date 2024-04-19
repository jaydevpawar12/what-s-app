import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Authentication from './pages/Authentication'
import Chat from './pages/Chat'
import Protected from './componants/Protected'
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.min.css"
const App = () => {
  return <>
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Authentication />} />
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path='/chat' element={< Protected compo={< Chat />} />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App