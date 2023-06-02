import { AddCircleOutline, CancelOutlined, Edit } from '@mui/icons-material'
import todo from '../Todo/todo.css';
import {useState} from 'react'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUserFriends } from 'react-icons/fa';

const Todo = () => {
    const [heading,setHeading]= useState(
      { id: new Date().getTime(),
      heading: "",})
    const [todoDescription,setTodoDescription]=useState({
      isEdit:"",
      id: new Date().getTime(),
      heading:"",
      paragraph:""
    })
    const [edit,isEdit]=useState(false)
    const [todoName,setTodoName]=useState([])
    const [todoTopic,setTodoTopic]=useState([])
    
    function handleTopicAdd(id){
      if(heading.heading!==""){
    
    setTodoTopic([...todoTopic,heading]);
     setHeading({id:new Date().getTime(),heading:""})
      }
      else
        toast("please add some text")
      
    }
    function handleTodoAdd(){
      if(todoDescription.heading!==""&&todoDescription.paragraph!==""){
        setTodoName([...todoName,todoDescription])
        setTodoDescription({heading:"",paragraph:""})
      }
      else
        toast("please add some text")
    }
    const handleDelete = (id) => {
      const updatedTodos = todoTopic.filter((item) => item.id !== id);
      setTodoTopic(updatedTodos);
     
      
    };
    
  return (

    <div className='topsection'>
      <div className='todotopic'>
        {todoTopic.map((val)=>{
          return(
            <div>
            <div key={val.id} className='headingvalue'><h1>{val}</h1>
            <CancelOutlined  onClick={()=>handleDelete(val.id)} style={{color:"grey"}}/>
            </div>
            <div className='todo'>
              <div>
              <div className="headinglogo" >
              <FaUserFriends/>
              <input type="text" value={todoDescription.heading} placeholder=' Add Todo' onChange={(e)=>{setTodoDescription({...todoDescription,heading:e.target.value})}}></input>
              <AddCircleOutline onClick={handleTodoAdd}/>
              </div>
              

              </div>
             
              
              <textarea  value={todoDescription.paragraph} placeholder=' Add Todo Description' onChange={(e)=>{setTodoDescription({...todoDescription,paragraph:e.target.value})}}></textarea>
            </div>
              {todoName.map((val)=>{
                return( <div>
                  <div className='addedtodo'>
                  <div key={val.id} className="headinglogoname" >
                   
                   <h1>{val.heading}</h1>
                   <div>
                     <Edit onClick={setTodoDescription({...todoDescription,isEdit:true})}/>
                     <CancelOutlined/>
                   </div>
                   
                   </div>
                   <p>{val.paragraph}</p>
            </div>
                   </div>)
              })}
              
            </div>
            
          
          )
         
        })}
      </div>
      <div className='todoHeading'>
        <input type='text' placeholder="Add todo-List" value={heading.heading} onChange={(e)=>setHeading(e.target.value)}/>
        <AddCircleOutline onClick={handleTopicAdd} style={{color:"grey"}}/>
        <ToastContainer/>
      </div>
    </div>
  )
}

export default Todo
