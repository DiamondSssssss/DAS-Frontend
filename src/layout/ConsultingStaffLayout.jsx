import React from 'react'
import HeaderCs from '../Component/HeaderCs/HeaderCs'
import SideBarCs from '../Component/SideBarCs/SideBarCs'
import { Outlet } from 'react-router-dom'
import "./ConsultingStaffLayout.css"

const ConsultingStaffLayout = () => {
  return (
    <div className="staffLayout">
      <HeaderCs />
      <div className="staffbody">
        <div className="sidebar"><SideBarCs/></div>
        <div className="outlet"><Outlet/></div>
      </div>
    </div>
  )
}

export default ConsultingStaffLayout