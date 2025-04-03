// principal router

import React from 'react'
import { Login } from '../auth/pages/Login'
import { Marvel } from '../heroes/pages/Marvel'
import { Dc } from '../heroes/pages/Dc'
import { Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="marvel" element={ <Marvel/> }/>
            <Route path="dc" element={ <Dc/> }/>

            <Route path="login" element={ <Login/> }/>
            <Route path="/" element={ <Navigate to="/marvel" /> }/>
        </Routes>
    </>
  )
}
