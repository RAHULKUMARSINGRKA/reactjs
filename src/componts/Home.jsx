import React from 'react'
import ContactUs from './ContactUs'
// import ContactUs from '../components/ContactUs' // Corrected the path to 'components'

function Home() {
  return (
    <div>
      <div className="page1">
        {/* Page 1 content */}
      </div>
      <div>
        <ContactUs/>
      </div>

      {/* *********  happy page start ************ */}

     <div className="container">
     <div className="happy">
      <div className="space"></div>
        <div style={{ height: '100px' }}><h1>Shiny Happy Clients</h1></div>
        <div className="the4">

          <div className="the ">
          <img src={require('../image/ssssssssss.png')}></img>
            <h1>
            
            “I’m addicted to the Cleanic!”</h1>   <br></br> <p>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”
              <br></br>   <br></br>  Jane Deirs, AR</p></div>

          <div className="the">
          <img src={require('../image/ssssssssss.png')}></img>
            <h1>
            “My flat looks like a boutique hotel”</h1>  <br></br>
            <p>
              “My flat looks like a boutique hotel”
              “I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”  <br></br>
              Eric Laguardia, CA</p></div>

          <div className="the">
          <img src={require('../image/ssssssssss.png')}></img>
            
            <h1>
            “Soft perfection”</h1><br></br>
            <p>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”<br></br><br></br>
              Lena Rogel, RI</p>

          </div>

          <div className="the">
          <img src={require('../image/ssssssssss.png')}></img>
            
            <h1>“I’m obsessed”</h1><br></br>
            <p>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”<br></br><br></br>
              Jean McDermott, CT</p>
          </div>
        </div>
      </div>  
     </div>

      {/* ************happy and*********** */}


      {/* **********services********* */}

      <div className='services'>

        <div style={{ height: '200px' }} className=' con_header'>
          <h1 className='car'>For Anything You Need</h1>
          <h1 className='car'>Our stellar services</h1>
        </div>


        <div className='move_all'>
          <div className='move'>
           
            <img src={require('../image/3_1.jpg')}></img>
          </div>
          <div className='move'>
            <img src={require('../image/3_2.jpg')}></img>
          </div>
          <div className='move'>
            <img src={require('../image/3_3.jpg')}></img>
          </div>
        </div>

        <button className='rvices_buttan'>services</button>
      </div>
      {/* ***********services and************* */}


    {/* **************   latch start  ************* */}
          <div className='gape'></div>
      <div className='container'>

        <div className='latch'>
          <div>
          <h1>Featured In</h1>
          </div>
          <div>
      <h2>Latch</h2>
      <h2>rahul</h2>
      <h2>rahul</h2>
      <h2>rahul</h2>
      <h2>rahul</h2>
      </div>


        </div>



      </div>
     

      {/* ***************latch and **************** */}
      <div className='space3'></div>

      {/* **********Before start********** */}
      <div className='Before'>
       

       <div>
        <h1>Before & After
        </h1>
        <h5>Window cleaning</h5>
        </div>
{/* <br></br><br></br> */}
        {/* <slider> */}
        <div className='slider'>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">

         <div className='slider1'> <img src={require('../image/slider1.webp')} class="d-block w-100" alt="..."/> <h4>Before</h4></div>
         <div className='slider2'> <img src={require('../image/slidee1_2.webp')} class="d-block w-100" alt="..."/> <h4>After</h4></div>
       
      {/* <img src="..." class="d-block w-100" alt="..."/> */}
    </div>
    <div class="carousel-item">
    <div className='slider1'> <img src={require('../image/slider2.webp')} class="d-block w-100" alt="..."/> <h4>Before</h4></div>
    <div className='slider2'> <img src={require('../image/slider2_2.webp')} class="d-block w-100" alt="..."/> <h4>After</h4></div>
      {/* <img src="..." class="d-block w-100" alt="..."/> */}
    </div>
    <div class="carousel-item">
      {/* <img src="..." class="d-block w-100" alt="..."/> */}
      <div className='slider1'> <img src={require('../image/slider3.webp')} class="d-block w-100" alt="..."/> <h4>Before</h4></div>
      <div className='slider2'> <img src={require('../image/slider3_2.webp')} class="d-block w-100" alt="..."/> <h4>After</h4></div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon " aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next colar" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>


        {/* </slider> */}
    
     
      </div>


      <div className='space4'></div>
      {/* **************Works start********** */}

         <div className='Works'>

          <h1>How It Works</h1>
          <div className='work4_4'>
            <div className='work1'> 
              
            </div>  
            <div className='work1'></div>
            <div className='work1'></div>
            <div className='work1'></div>
            </div>
         </div>
       {/* *************  Works and************** */}

       {/* *************Plans start***************/}

       <div className='Plans'>

            <div className='plans_50'>
              <h1>
Our Plans & <br></br>
Special Discounts</h1>
<br></br>

<p>I'm a paragraph. Click here to add your own text<br></br> and edit me. It's easy. I'm a paragraph. Click here<br></br> to add your own text and edit me. It's easy.</p>

        <button className='plans_b'>choose your plane</button>
            </div>


            <div className='plans_50_2'>

              <div className='foram'>
                <div className='foram_2'>

                <h4>The Bi-Monthly Plan</h4>
  
                <h1><sup><span className='dd'>$</span></sup> 280</h1>

                <p>evry manth</p>

                <button className='planss'> select</button>

                     </div>
                <div className='foram_50'>
                  <br></br>

                  <h5>
                  I’m a benefi</h5>
                  <br></br>

                  <h5>
                  I’m a benefi</h5>
                  <br></br>

                  <h5>
                  I’m a benefi</h5>
                  <br></br>

                  <h5>
                  I’m a benefi</h5>
                </div>
              </div>

    




            </div>
       </div>



       {/* ****************Plans and*************** */}


       <div className='nice'></div>

    </div>

  )
}

export default Home
