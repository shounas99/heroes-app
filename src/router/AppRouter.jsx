// principal router

import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../auth'
import { Marvel, Dc } from '../heroes'
import { Navbar } from '../ui'

export const AppRouter = () => {
  return (
    <>
    <Navbar />
        <Routes>
            <Route path="marvel" element={ <Marvel/> }/>
            <Route path="dc" element={ <Dc/> }/>

            <Route path="login" element={ <Login/> }/>
            <Route path="/" element={ <Navigate to="/marvel" /> }/>
        </Routes>
    </>
  )
}
