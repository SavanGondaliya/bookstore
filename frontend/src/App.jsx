import React, { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route,Outlet} from "react-router-dom";
import { Books } from './pages/Book'
import DeleteBook from './components/DeleteBook';
import { CreateBook } from './components/CreateBook'
import { UpdateBook } from './components/UpdateBook'
import { SignUp } from './pages/Login';
import { Card } from './pages/Card';
import ProtectedRoute from './utils/ProtectedRoutes';


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books/>}></Route>
          <Route path="/login" element={<SignUp/>}></Route>
          <Route path="books/:id" element={<Card/>}></Route>
          <Route path="books/create" element={<ProtectedRoute><CreateBook/></ProtectedRoute>}></Route>
          <Route path="books/delete/:id" element={<ProtectedRoute><DeleteBook/></ProtectedRoute>}></Route>
          <Route path="books/edit/:id" element={<ProtectedRoute><UpdateBook/></ProtectedRoute>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
