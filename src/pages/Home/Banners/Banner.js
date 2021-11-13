import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Banner/car1.png';
import banner2 from '../../../images/Banner/car2.png';
import banner3 from '../../../images/Banner/car3.png';

const Banner = () => {
    return (
        <>
           <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>YOUR PERFECT CAR <br/> DELIVERED TO YOUR DOOR</h1>
      <h5>All our cars come from main dealers and go through rigorous checks and tests before they arrive at your door</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1>FIND YOUR DREAM CAR WITH US</h1>
      <h5>we're proud to represent the world's most prestigious car brands at over 140 dealerships nationwide</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1>WE PROVIDE THE BEST CAR IN A REASONABLE PRICE</h1>
      <h5>We have 15 years of experience in the car selling industry. Our Customer is more important than anything</h5>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
       </>
    );
};

export default Banner;
