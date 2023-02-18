import React from 'react'

import '../assets/css/common.css'

import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Sidepage from '../routes/Sidepage'

const userdashboard = () => {
  return (
    <div className="userdashboard">
      <Sidebar/>
      <div className="userDash2">
        <Navbar />
        <Sidepage />
      </div>
      
    </div>
  )
}

export default userdashboard