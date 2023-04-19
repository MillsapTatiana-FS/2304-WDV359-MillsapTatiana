import React from 'react';
import { client } from '../../lib/client';
import { getServerSideProps } from './api/hello/route';
import { Product, FooterBanner, HeroBanner } from '../../components';

const Home = ({ products, bannerData }) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData} />

      <div className="products-heading">
        <h2>Best Selling Crystals</h2>
        <p>Crystals of many variations</p>
      </div>

      <div className="products-container">
        Product
        {products?.map((product) => <Product key={product._id} product={Product} />)}
      </div>

      <FooterBanner footerBanner={bannerData} />
    </div>
  );
}



export default Home;