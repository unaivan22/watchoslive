import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import Watch from './watch/Watch'
import Alarm from './alarm/Alarm'

export default function RouterPage() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/watch' element={<Watch/>} />
            <Route path='/alarm' element={<Alarm/>} />

            <Route path='*' element={<NotFound/>} />

        </Routes>
     </Router>
  )
}