import React from 'react';
import Advantages from '../Advantages/Advantages';
import Banner from '../Banners/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Advantages></Advantages>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;