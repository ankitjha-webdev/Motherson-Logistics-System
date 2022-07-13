import React from 'react'
import Geography from '../components/Geography/Geography'
import Party from '../components/Party/Party'
import SideBar from '../components/Sidebar/SideBar'

const Master = () => {
  return (

      <SideBar>
        <div>
        <Party />
        <Geography/>
      </div>
      </SideBar>
  )
}

export default Master