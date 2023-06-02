import React from 'react'
import top from '../Top/top.css'
import { Wallet } from '@mui/icons-material'
const TopNav = () => {
  return (
    <div className='top'>
      
        <div ><h1>Style</h1></div>
        <div className='wallet'>
          <Wallet/>
          <h3>0.2 $XYZ</h3>
          <button>Tier 2</button>
        
      </div>
    </div>
  )
}

export default TopNav
