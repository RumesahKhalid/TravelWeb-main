import React, {useState} from 'react';
import Header from '../components/Dashboard/Header/header';
import Sidebar from '../components/Dashboard/Sidebar/sidebar';
import Home from '../components/Dashboard/Home/home';

const Dashboard = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar =() =>{
    setOpenSidebarToggle (!openSidebarToggle)
   }
  
    return (      
          <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar}/>
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <Home/> 
          </div>
  )
}

export default Dashboard;