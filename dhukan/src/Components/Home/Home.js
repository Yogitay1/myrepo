import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'


function Home({images}) {
 
  return (
    <Carousel>
      {images.map((img)=>(
      <Carousel.Item>
      <img
        className="d-block w-100 Adjust"
        src={img.imgurl}
      />
      <Carousel.Caption>
        <h3>{img.Number}</h3>
        <p>{img.meaning}</p>
        </Carousel.Caption>
      </Carousel.Item>))}
  
     </Carousel>
        );
};

export default Home;