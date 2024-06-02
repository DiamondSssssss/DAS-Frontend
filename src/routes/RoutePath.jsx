import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import AssessmentBooking from '../Component/AssessmentBookingPage/AssessmentBooking'
import AssessmentPaper from '../Component/AssessmentPaperPage/AssessmentPaper'
import AssessmentBookingSample from '../Component/AssessmentBookingSamplePage/AssessmentBookingSample'
import CustomerLayout from '../layout/CustomerLayout'
import HomePage from '../Component/HomePage/HomePage'
import Login from '../Component/Login/Login'
import ErrorPage from '../Component/ErrorPage/ErrorPage'

const RoutePath = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<CustomerLayout />} >
          <Route index element={<HomePage />} />
          <Route path='homepage' element={<HomePage />} />
        </Route>
        <Route path='/staff' element={<App />}>
          <Route index element={<AssessmentBooking />} />
          <Route path='assessmentbooking' element={<AssessmentBooking />} />
          <Route path='assessmentbooking/:id' element={<AssessmentBookingSample />} />
          <Route path='assessmentpaper' element={<AssessmentPaper />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutePath