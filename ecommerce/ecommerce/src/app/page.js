import React from 'react';
import { client } from '../../lib/client';
import { Product, FooterBanner, HeroBanner } from '../../components';
import product from '../../sanityecommerce/schemas/product';

const Home = ({ products, bannerData }) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
      <div className="products-heading">
        <h2>Best Selling Crystals</h2>
        <p>Crystals of many variations</p>
      </div>

      <div className="products-container">
        Product
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>

      <FooterBanner footerBanner={bannerData} />
    </div>
  );
}



export default Home;