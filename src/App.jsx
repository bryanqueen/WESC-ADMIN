import { useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import Index from './pages/Index';
import DashBoard from './pages/Dashboard';
import CreateBlog from './pages/CreateBlog';


function App() {
  return (
    <>
      <Routes>
        <Route index element={<Index/>}/>
        <Route path='create-blog' element={<CreateBlog/>} />
        <Route path='dashboard' element={<DashBoard/>}/>
      </Routes>
    </>
  )
}

export default App
