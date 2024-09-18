import React, { useState } from 'react';
import './SideDrawer.scss';
import { HomeOutlined, KeyboardTabOutlined } from '@mui/icons-material';

function SideDrawer() {
  const [drawerOpen, setDrawerOpen] = useState(true)
  
  const handleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <div className={`${drawerOpen ? 'side-drawer-container' : 'closed-drawer'}`}>
      {drawerOpen && <div className='dashboard-title'><HomeOutlined/> <h6 className='dashboard'>Dashboard</h6></div>}
      <div className={`${drawerOpen ? 'icon-container': 'closed-icon-container'}`} onClick={handleDrawer}><KeyboardTabOutlined className={`${drawerOpen ? 'arrow-icon' : 'closed-arrow'}`}/></div>
    </div>
  )
}

export default SideDrawer