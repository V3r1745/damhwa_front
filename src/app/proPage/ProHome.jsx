import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const btns = {
  prevArrow: <i id="left_btn" style={{margin: "20px"}} className="fa-solid fa-chevron-left" />,
  nextArrow: <i id="right_btn" style={{margin: "20px"}} className="fa-solid fa-chevron-right" />,
  pauseOnHover: false
}

const ProHome = () => {
  const images = [
    "/src/img/m/m_1.png",
    "/src/img/m/m_2.png",
    "/src/img/m/m_3.png",
  ];
  let slider = images.map((v, i) => <div key={i} className="pro-slide-effect">
    <div style={{ 'backgroundImage': `url(${v})` }}></div>
  </div>
  )
  return <>
    <Slide {...btns}>
      {slider}
    </Slide>
    <img src="/src/img/m/s_1.png" className="pro-main-img" alt="pro-main-img"/>
  </>
};

export default ProHome;
