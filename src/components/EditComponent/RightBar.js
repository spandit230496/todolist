import React,{useState} from 'react'
import right from '../EditComponent/right.css'
import { WestOutlined } from '@mui/icons-material'
import { ToastContainer, toast } from 'react-toastify'
const RightBar = (props) => {
  const [edited,setEdited]=useState(props.value)
  return (
    <>
    <div className='containerright'>
        <div className='edit'>
            <WestOutlined/>
            <h1>Edit</h1>
        </div>
      <div className='right'>
      <input type='text' value={edited.title} placeholder='Edit Heading' onChange={(e)=>setEdited(e.target.value)}></input>
      <textarea type="text" value={edited.description} placeholder='Edit Description' onChange={(e)=>setEdited(e.target.value)}></textarea>
      <button onClick={()=>toast("Updated ")}>Save</button>
    <ToastContainer/>
      </div>
    </div>
    </>
  )
}

export default RightBar
