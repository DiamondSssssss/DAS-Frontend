import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import AssessmentBooking from '../Component/AssessmentBookingPage/AssessmentBooking'
import AssessmentPaper from '../Component/AssessmentPaperPage/AssessmentPaper'
import AssessmentBookingSample from '../Component/AssessmentBookingSamplePage/AssessmentBookingSample'
import CustomerLayout from '../layout/CustomerLayout'
import HomePage from '../Component/HomePage/HomePage'
import Login from '../Component/Login/Login'
import InfoForm from '../Component/ConsultingStaffPage/InfoForm'
import CutForm from '../Component/ConsultingStaffPage/CutForm'
import SummaryPage from '../Component/ConsultingStaffPage/SummaryPage'
import ErrorPage from '../Component/ErrorPage/ErrorPage'
import SelectionForm from '../Component/ConsultingStaffPage/SelectionForm'



const RoutePath = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<CustomerLayout />} >
          <Route index element={<HomePage />} />
          <Route path='homepage' element={<HomePage />} />
        </Route>
        <Route path='/assessmentstaff' element={<App />}>
          <Route index element={<AssessmentBooking />} />
          <Route path='assessmentbooking' element={<AssessmentBooking />} />
          <Route path='assessmentbooking/:id' element={<AssessmentBookingSample />} />
          <Route path='assessmentpaper' element={<AssessmentPaper />} />
          <Route path="selection" element={<SelectionForm/>} />
          <Route path="info" element={<InfoForm/>} />
          <Route path="cut" element={<CutForm/>} />
          <Route path="summary" element={<SummaryPage/>} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutePath