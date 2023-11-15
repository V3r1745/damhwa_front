import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const btns = {
  prevArrow: <i id="left_btn" style={{margin: "20px"}} className="fa-solid fa-chevron-left" />,
  nextArrow: <i id="right_btn" style={{margin: "20px"}} className="fa-solid fa-chevron-right" />,
  pauseOnHover: false
}

const ProHome = () => {
  const images = window.innerWidth < 750 ?  ["/src/img/m/m1.jpg", "/src/img/m/m4.jpg", "/src/img/m/m3.jpg"]: [
    "/src/img/m/m_1.png",
    "/src/img/m/m_2.png",
    "/src/img/m/m_3.png",
  ]
  let slider = images.map((v, i) => <div key={i} className="pro-slide-effect">
    <div style={{ 'backgroundImage': `url(${v})` }}></div>
  </div>
  )
  return <>
    <Slide {...btns}>
      {slider}
    </Slide>
    <img src="/src/img/m/s_12.png" className="pro-main-img" alt="pro-main-img"/> 
    <img src="/src/img/m/s_11.png" className="pro-main-img" alt="pro-main-img"/> 
  </>
};

export default ProHome;
