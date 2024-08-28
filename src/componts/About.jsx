import React from 'react'

function About() {
  return (
    <div>
        <div className='About'>hh</div>


            <div className='about_start'>

              <h1 style={{textAlign:'center'}}>About Us</h1>
              <h5 style={{textAlign:'center'}}>Our story is a passion for</h5>
              <h5 style={{textAlign:'center'}}>clean homes and happy clients</h5>
            </div>

            <div className='Are'>
              <div className='are_1'>
                  <div className='Are_img'>
                    <img src={require('../image/ARE.webp')}></img>
                  </div>
              </div>

              <div className='are_2'>
                 <h1>
                 Who We Are</h1>
          


              <p>I'm a paragraph. Click here to add your own text and edit<br></br>
               me. It’s easy. Just click “Edit Text” or double click me to add your<br></br>
                own content and make changes to the font. I’m a great place for you to tell a<br></br>
                 story and let your users know a little more about you.

</p>
</div>
            </div>

    </div>
  )
}

export default About