import React from 'react'

function ContactUs() {
  return (
    <div>
      <div className='Contact'>
        <div className='con_header' ><h1>Get a Free Estimate</h1>
          <h2>Contact Us</h2>
        </div>
        <div className='contact_div'>
          {/* <h3 className='last_name'>First name</h3> */}
          <div className="input_box">
              <label htmlFor="username">Firsr Name:</label>
          <input type="text" id="username" /> 
          </div>

          <div className="input_box">
              <label htmlFor="username">Last Name:</label>
          <input type="text" id="username" /> 
          </div>




          <div className="input_box">
              <label htmlFor="username">E-mail:</label>
          <input type="text" id="username" /> 
          </div>
          </div>



        <div className="contact_div">
        <div className="input_box">
              <label htmlFor="username">Phone No.</label>
          <input type="text" id="username" /> 
          </div>



          <div className="input_box">
              <label htmlFor="username">Address:</label>
          <input type="text" id="username" /> 
          </div>


          <div className="input_box">
              <label htmlFor="username">City:</label>
          <input type="text" id="username" /> 
          </div>
          </div>



        <div  className="contact_div">
        <div className="input_box">
              <label htmlFor="username">Number of room</label>
          <input type="text" id="username" /> 
          </div>



          <div className="input_box" style={{width:'63%'}}>
              <label htmlFor="username">Choose your service</label>
          <input type="text" id="username" /> 
          </div>
          </div>

        <div className='con_btn'><button>Grt a quote</button></div>


      </div>
    </div>
  )
}

export default ContactUs