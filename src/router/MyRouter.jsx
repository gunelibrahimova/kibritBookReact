import React from 'react'
import { Route, Routes } from 'react-router-dom';
import BookDetail from '../components/BookDetail/BookDetail';
import Home from '../Pages/Home';


const MyRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<BookDetail />}/>
    </Routes>
  )
}

export default MyRouter