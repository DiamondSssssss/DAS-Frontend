import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AssessmentStaffLayout from '../layout/AssessmentStaffLayout'
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
import AssessmentRequestCustomer from '../Component/AssessmentRequestCustomer/AssessmentRequestCustomer'
import ConsultingStaffLayout from '../layout/ConsultingStaffLayout'
import AssessmentRequestConsulting from '../Component/AssessmentRequestPage/AssessmentRequestConsulting'
import AssessmentRequestDetail from '../Component/AssessmentRequestDetail/AssessmentRequestDetail'


const RoutePath = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<CustomerLayout />} >
          <Route index element={<HomePage />} />
          <Route path='homepage' element={<HomePage />} />
          <Route path='makerequest' element={<AssessmentRequestCustomer />} />
        </Route>
        <Route path='/assessmentstaff' element={<AssessmentStaffLayout />}>
          <Route index element={<AssessmentBooking />} />
          <Route path='assessmentbooking' element={<AssessmentBooking />} />
          <Route path='assessmentbooking/:id' element={<AssessmentBookingSample />} />
          <Route path='assessmentpaper' element={<AssessmentPaper />} />
          <Route path="selection" element={<SelectionForm/>} />
          <Route path="info" element={<InfoForm/>} />
          <Route path="cut" element={<CutForm/>} />
          <Route path="summary" element={<SummaryPage/>} />
        </Route>
        <Route path='/consultingstaff' element={<ConsultingStaffLayout />}>
        <Route index element={<AssessmentRequestConsulting/>} />
          <Route path='assessmentrequest' element={<AssessmentRequestConsulting/>} />
          <Route path='assessmentrequest/:id' element={<AssessmentRequestDetail />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutePath