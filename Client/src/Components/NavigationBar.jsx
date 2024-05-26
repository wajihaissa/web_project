import React from 'react'
import '../Styles/NavigationBar.css'  
import { Link } from 'react-router-dom';  

export const NavigationBar = () => {
  return (
    <div className='nav'><h1>BlogSite:<h6> by wajih aissa</h6></h1>
    
    <ul>
    <li><Link to="/">Write</Link></li>
    <li>Science</li>
    <li>Technologie</li>
    <li>Desgin</li>
    <li>Public Opinion</li>
    <li><Link to="/login">Login</Link></li>
    <li><Link to="/Signin">Siginn</Link></li>

    </ul>
    </div>
  )
}
