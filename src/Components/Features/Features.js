import React from 'react'
import './Features.css'

const Features = () => {
  return (
    <div className="Feature">
    <div className='FeatureMain'>
        <div xs={12} md={12} lg={12} xl={4} className='Featurediv'>
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png" alt='Features'></img>
        <h5>Superfast Delivery</h5>
        <p>Get your order delivered to your doorstep at the earliest from dark stores near you.</p>
        </div>
        <div xs={12} md={12} lg={12} xl={4} className='Featurediv'>
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=90/assets/web/blinkit-promises/Best_Prices_Offers.png" alt='Features'></img>
        <h5>Best Prices & Offers</h5>
        <p>Best price destination with offers directly from the manufacturers.</p>        
        </div>
        <div xs={12} md={12} lg={12} xl={4} className='Featurediv'>
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=90/assets/web/blinkit-promises/Wide_Assortment.png" alt='Feature'></img>
        <h5>Wide Assortment</h5>
        <p>Choose from 5000+ products across food, personal care, household & other categories.</p>    
        </div>
    </div>
    <div className="FeatureDesc">
      <p>“Blinkit” is owned & managed by "Blink Commerce Private Limited" (formerly known as Grofers India Private Limited) and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.</p>
    </div>
    </div>
  )
}

export default Features