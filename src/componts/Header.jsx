import React from 'react'
import ContactUs from './ContactUs'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      {/* ***********header start ********* */}
      <div className='all_box'>
       
      <div className="header">
        <div className="logo">
          <img src={require('../image/star.jpg')}></img>
          <h1>the cleanic</h1>
        </div>
            


         <div className='navbar'>
          <ul className='nav'>
          <Link to="/">  <li className='nav1'>Home</li></Link>  
           <Link to="plans">  <li className='nav1'>plans</li></Link>   
            

               <Link to="Services"><li className='nav1'>Services</li></Link>
               <Link to="About">  <li className='nav1'>About</li></Link>
               {/* <li className='nav1'>About</li> */}

               {/* <li className='nav1'>login</li> */}
          </ul>
         </div>


         <div className='login_buttan'>
          <button>booking now</button>
         </div>

      </div>



        
         
        



      {/* **************header and************** */}
      </div>
    </div>
  )
}

export default Header