import React from 'react';
import './Home.css';
import Product from './Product.js';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' 
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='clothes and shoe'/>
        
        <div className='home__row'>
           <Product 
           id= '12321341'
           title= "the lean startup"
           price={29}
           image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
           rating={5}
            />
           <Product
           id='49538094'
           title= "Kenwood KMix Stand MIxer for Bakin, Stylish Kitchen Mixer for Baking"
           price={239.0}
           image='https://dam.kenwoodworld.com/562x468/assets/148434'
           rating={4}
           />
        </div>
        <div className='home__row'>
        <Product
        id='4903850'
        title= "SamsungLC$%HDHKHSDI 49 Curved Model"
        price={199.0}
        image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
        rating={4}
        />
        <Product
        id='23445930'
        title= "AMazon Echo (3rd Generation)"
        price={98.99}
        image='http://mobileimages.lowes.com/productimages/1bd5e292-b68d-4877-8400-b983034381ec/12025270.jpg'
        rating={3}
        />
        <Product
        id='3254354345'
        title= "New Appple Ipad Pro (12.9 - inch)"
        price={598.9}
        image='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4263/4263701_sd.jpg'
        rating={4}
        />
        </div>
        <div className='home__row'>
        <Product
        id='90829334'
        title= "Samsung Curved LED Gaming MONitor Super Ultra"
        price={1094.8}
        image='https://m.media-amazon.com/images/I/81rus0UFhsL._AC_SX450_.jpg'
        rating={5}
        />
        </div>
      </div>

    </div>
  )
}

export default Home