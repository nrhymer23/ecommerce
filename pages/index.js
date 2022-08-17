import React from 'react'

import { Product, FooterBanner, HeroBanner } from '../components'
import products from '../sanity_ecommerce/schemas/products'

const Home  = () => {
  return (
   <div>
    <HeroBanner />

    <div className='products-heading'>
      <h2>Best Selling Product</h2>
      <p>Speakers of many variations</p>
    </div>

    <div className='products-container'>
      {['Product 1', 'Product 2'].map(
        (products) => products
      )}
    </div>

    < FooterBanner />
   </div>
  )
}

export default Home