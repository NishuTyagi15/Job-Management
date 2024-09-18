import React from 'react';
import './SearchAppBar.scss';
import { Search, Notifications, Settings, Apps } from '@mui/icons-material';
import { Avatar } from '@mui/material';

function SearchAppBar() {
  return (
    <div className='app-bar-container'>
      <h4 className='first-heading'>
        Onefinnet
      </h4>
      <div className='other-options'>
          <Search/><h6 className='start-search'>Start searching</h6>
          <Notifications className='notification'/>
          <Settings/>
          <Apps className='notification'/>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </div>
    </div>
  )
}

export default SearchAppBar