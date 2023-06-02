import React from 'react';
import TodoList from './TodoList';
import TopNav from '../components/Top/TopNav';
 import Todo from '../components/Todo/Todo';
 
const Dashboard = () => {
    
    return (
        <div className='dashboard'>
         <TopNav/>
          <TodoList/>
          
           
        </div>
    );
};

export default Dashboard;