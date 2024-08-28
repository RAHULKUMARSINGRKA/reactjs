import React from 'react'

function Footer() {
  return (
    <div>

        <div className='footer'>
            <div className='footer1 .col-xs-13'>
            <img src={require('../image/star.jpg')}></img>
            <h1>
            The cleanic</h1>
            <button className='footer_buttan'>BOOK NOW</button>
            </div>

            
            <div className='footer2 '>
              <p>Legal <br></br> <br></br>

Privacy Policy<br></br>

Terms & Conditions<br></br>

Refund Policy</p>
               </div>

               <div className='footer3'>
                <p>
                  
Operating Hours<br></br>  <br></br>

Mon - Fri: 8am - 8pm ​​<br></br>

Saturday: 9am - 7pm​  <br></br>
Sunday: 9am - 8pm<br></br><br></br>

Follow us for cleaning tips
                </p>
               </div>

               <div className='footer4'>
                <p>
                  
Contact<br></br><br></br>

The cleanic<br></br>
500 Terry Francine Street<br></br>
San Francisco, CA 94158<br></br>

123-456-7890 <br></br>

info@mysite.com
                </p>

               </div>

        </div>






    </div>
  )
}

export default Footer