import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const btns = {
  prevArrow: <i id="left_btn" className="fa-solid fa-chevron-left" />,
  nextArrow: <i id="right_btn" className="fa-solid fa-chevron-right" />,
  pauseOnHover: "false"
}

const Element = () => {
  const images = [
    "./src/img/main/1page_img1.jpg",
    "./src/img/main/1page_img2.jpg",
    "./src/img/main/1page_img3.jpg",
  ];
  let slider = images.map((v, i) => <div key={i} className="each-slide-effect">
    <div style={{ 'backgroundImage': `url(${v})` }}>
    </div>
  </div>
  )
  return <>
    <Slide {...btns}>
      {slider}
    </Slide>
  </>;
};

export default Element;