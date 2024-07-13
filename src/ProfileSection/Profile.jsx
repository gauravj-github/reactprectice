import React from 'react'
import InputSection from '../Componante/InputSection'
import './profile.css'
const Profile = () => {
  return (
    <div className='container'>
    <div className='profile'>
        <h1>Profile</h1>
    </div>
    
    <div className="profiledetail">
      <h1>Profile Details</h1>
      <InputSection text="text" placeholder="name" />
      <InputSection text="number" placeholder="phone" />

    </div>
    <div className="profiledetail">
      <h1>Change Password</h1>
      <InputSection text="number" placeholder="Enter New Password" />
      <InputSection text="password" placeholder="Enter Confirm Password" />

    </div>
    </div>
  )
}

export default Profile