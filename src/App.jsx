import { useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import Index from './pages/Index';
import DashBoard from './pages/Dashboard';
import CreateBlog from './pages/CreateBlog';
import { ProtectedRoute } from './components/ProtectedRoutes';


function App() {
  return (
    <>
      <Routes>
        <Route index element={<Index/>}/>
        <Route
          path='dashboard'
          element={
            <ProtectedRoute>
              <DashBoard/>
            </ProtectedRoute>
          }
        />
      <Route
        path='create-blog'
        element={
          <ProtectedRoute>
            <CreateBlog/>
          </ProtectedRoute>
        }
      />
      </Routes>
    </>
  )
}

export default App
