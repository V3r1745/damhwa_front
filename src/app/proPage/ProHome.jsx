import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const btns = {
  prevArrow: <i id="left_btn" style={{margin: "20px"}} className="fa-solid fa-chevron-left" />,
  nextArrow: <i id="right_btn" style={{margin: "20px"}} className="fa-solid fa-chevron-right" />,
  pauseOnHover: "false"
}

const ProHome = () => {
  const images = [
    "./src/img/main/1page_img1.jpg",
    "./src/img/main/1page_img2.jpg",
    "./src/img/main/1page_img3.jpg",
  ];
  let slider = images.map((v, i) => <div key={i} className="pro-slide-effect">
    <div style={{ 'backgroundImage': `url(${v})` }}></div>
  </div>
  )
  console.log(slider)
  return <>
    <Slide {...btns}>
      {slider}
    </Slide>
    <img src="./src/img/main/1page_img1.jpg" className="pro-main-img" alt="pro-main-img"/>
  </>
};

export default ProHome;
