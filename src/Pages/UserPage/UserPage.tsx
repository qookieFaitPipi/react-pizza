import React from 'react';

// components
import Sidebar from './Sidebar/Sidebar';
import Profile from './Profile/Profile';

const UserPage: React.FC = () => {
  return (
    <section style={{display: 'flex'}}>
      <Sidebar />
      <Profile />
    </section>
  )
}

export default React.memo(UserPage);