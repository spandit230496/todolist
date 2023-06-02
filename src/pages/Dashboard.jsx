import React from 'react';
import Comment from './Comment';
import TopNav from '../components/Top/TopNav';
import RightBar from '../components/EditComponent/RightBar';
import Todo from '../components/Todo/Todo';
const Dashboard = () => {
    
    return (
        <div className='dashboard'>
         <TopNav/>
          <Comment/>
          
           
        </div>
    );
};

export default Dashboard;