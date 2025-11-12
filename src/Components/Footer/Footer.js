import React from 'react'
import Grid from '@mui/material/Grid';
import './Footer.css'

const FooterSec = () => {
  return (
    <div className="FooterSec">
     <Grid container spacing={2}>
        <Grid xs={12} md={4} lg={4} xl={4}>
        <h3>Useful Links</h3>
        <div className='Useful'>
        <div>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
            <li>Lead</li>
            <li>Value</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Privacy</li>
            <li>Terms</li>
            <li>FAQs</li>
            <li>Security</li>
            <li>Mobile</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Partner</li>
            <li>Express</li>
            <li>Seller</li>
            <li>Spotlight</li>
            <li>Warehouse</li>
            <li>Deliver</li>
          </ul>
        </div>
        </div>
        </Grid>
        <Grid item xs={12} md={4} lg={4} xl={4}>
        <h3>Categories &nbsp;<span style={{ color: '#0c831f', fontSize: '17px', fontWeight: '500'}}>see all</span></h3>
        <div className='Categories'>
        <div>
          <ul>
            <li>Vegetables & fruits</li>
            <li>Munchies</li>
            <li>Instant & Frozen Food</li>
            <li>Bakery & Biscuits</li>
            <li>Atta, Rice & Dal</li>
            <li>Sauces & Spreads</li>
            <li>Paan Corner</li>
            <li>Baby Care</li>
            <li>Cleaning Essentials</li>
            <li>Personal Care</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Dairy & Breakfast</li>
            <li>Cold Drinks & Juices</li>
            <li>Tea, Coffee & Health Drinks</li>
            <li>Sweet Tooth</li>
            <li>Dry Fruits, Masala & Oil</li>
            <li>Chicken, Meat & Fish</li>
            <li>Organic & Premium</li>
            <li>Pharma & Wellness</li>
            <li>Home & Office</li>
            <li>Pet Care</li>
          </ul>
        </div>
        </div>
        </Grid>
        <Grid item xs={12} md={4} lg={4} xl={4}>
        <h3>Festive Season</h3>
        <div className='Festive'>
            <ul>
            <li>Navratri</li>
            <li>Dussehra</li>
            <li>Diwali</li>
            <li>Durga Puja</li>
          </ul>
        </div>
        </Grid>
     </Grid>
      <Grid  container spacing={2} xs={12} sm={12} md={12} lg={12} xl={12}>
     <h3>Brands &nbsp;<span style={{ color: '#0c831f', fontSize: '17px', fontWeight: '500'}}>see all</span></h3>
     </Grid>
     <Grid  container spacing={2} xs={12} sm={12} md={12} lg={12} xl={12}>
     <h3>Payment partners</h3>
     </Grid> 
     <Grid container spacing={2}>
      <Grid item xs={1.2}>
      <div className='partnersLogo'>
      <img src='https://blinkit.com/5fdcf0f548fbf112eec1.png' alt='partners'></img>
      </div>
      </Grid>
      <Grid item xs={1.2}>
      <div className='partnersLogo'>
      <img src='https://blinkit.com/901d69d548e0feba09ab.png' alt='partners'></img>
      </div>
      </Grid>
      <Grid item xs={1.2}>
      <div className='partnersLogo'>
      <img src='https://blinkit.com/3a1a66a7bf0fbfd26ab8.png' alt='partners'></img>
      </div>
      </Grid>
      <Grid item xs={1.2}>
      <div className='partnersLogo'>
      <img src='https://blinkit.com/989b1a681e449677450c.png' alt='partners'></img>
      </div>
      </Grid>
      <Grid item xs={1.2}>
      <div className='partnersLogo'> 
      <img src='https://blinkit.com/22eb5fa23ba3b6609751.png' alt='partners'></img>
      </div>
      </Grid>
      <Grid item xs={1.2}>
      <div className='partnersLogo'>  
      <img src='https://blinkit.com/ba6f4bc10ee998b5ef4a.png' alt='partners'></img>
      </div>
      </Grid> 
      <Grid item xs={1.2}>
      <div className='partnersLogo'>  
      <img src='https://blinkit.com/faa9535d3774d52e399a.png' alt='partners'></img>
      </div>
      </Grid>
      <Grid item xs={1.2}>
      <div className='partnersLogo'>  
      <img src='https://blinkit.com/84d7815d39258e73dcde.png' alt='partners'></img>
      </div>
      </Grid>
      <Grid item xs={1.2}>
      <div className='partnersLogo'>  
      <img src='https://blinkit.com/97c6174b61b03e30fce9.png' alt='partners'></img>
      </div>
      </Grid>
      <Grid item xs={1.2}>
      <div className='partnersLogo'>  
      <h5>Net Banking</h5>
      </div>
      </Grid>
      <Grid item xs={1.2}>
      <div className='partnersLogo'>  
      <h5>Cash on Delivery</h5>
      </div>
      </Grid>
      <Grid item xs={1.2}>
      <div className='partnersLogo'>  
      <h5>blinkit cash</h5>
      </div>
      </Grid>
    </Grid>
    <Grid container spacing={2}>
      <div className='FooterLast'>
      <Grid item xs={12} sm={12} md={12} lg={4} xl={12} className='Copyright'>
          <p>© Blink Commerce Private Limited (formerly known as Grofers India<br></br> Private Limited), 2016-2023</p>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={12} className='Download'>
          <h4>Download App</h4>
          <img src='https://blinkit.com/d61019073b700ca49d22.png' alt='Appstore'></img>
          <img src='https://blinkit.com/8ed033800ea38f24c4f0.png' alt='Playstore'></img>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={12} className='SocialIcons'>
          <ul>
            <li><img src='.\img\facebook.png' alt='social icons'></img></li>
            <li><img src='.\img\twitter.png' alt='social icons'></img></li>
            <li><img src='.\img\instagram.png' alt='social icons'></img></li>
            <li><img src='.\img\linkedin.png' alt='social icons'></img></li>
          </ul>
        </Grid>
        </div>
      </Grid>
    </div>
  )
}

export default FooterSec