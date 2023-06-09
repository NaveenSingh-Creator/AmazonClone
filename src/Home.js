import React from 'react';
import './Home.css'
import Product from './product';

const Home = () => {
    return ( 
    <div className='home'>
    <div className="home_container">
    <img className='home_img' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

    <div className="home_row">
      <Product  title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
      image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
      price={399}
      rating={4}
      id = {1}
      itemCount={0}
      />
      <Product 
        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
      image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
      price={11490}
      rating={5}
      id = {2}
      itemCount={0}
      />
      </div>

      <div className="home_row">
      <Product 
      title="boAt Wave Call Smart Watch, Smart Talk with Advanced Dedicated Bluetooth Calling Chip, 1.69 HD "
      image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
      price={2999}
      rating={4}
      id = {3}
      itemCount={0}
      />
      <Product 
         title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"      
      image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
      price={9091}
      rating={5}
      id = {4}
      itemCount={0}
      />
      <Product 
      
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
      image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
      price={38530}
      rating={5}
      id = {5}
      itemCount={0}
      />  
      </div>
      
      <div className="home_row">
      <Product
       title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
      image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
      price={89399}
      rating={4}
      id = {6}
      itemCount={0}
      />
      </div>
  
      
    </div>
    </div>
     );
}
 
export default Home;
