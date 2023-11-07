import { React, useState } from 'react';

const Element = () => {
    let inProPrice = 5500;
    const [currentCount, setCount] = useState(1);
    const [currentPrice, setPrice] = useState(inProPrice);
    const minusBtn = () => {
      if (currentCount > 1) {
        setCount(currentCount - 1);
        setPrice(inProPrice * (currentCount - 1));
      }
    }
    const plusBtn = () => {
      if (currentCount < 10) {
        setCount(currentCount + 1)
        setPrice(inProPrice * (currentCount + 1));
      }
    }
    const inputCount = (e) => {
        if( e.target.value <= 10 || e.target.value === "") {
          if (e.target.value !== "" && e.target.value > 0) {
            setCount(e.target.value)
            setPrice(inProPrice * e.target.value);
          } else {
            setCount("")
          }
        } else if ( e.target.value > 10) {
          setCount(10)
          setPrice(inProPrice * 10);
        }
      }
      const blurCount = (e) => {
        if( e.target.value === "" ) {
          setCount(1);
          setPrice(inProPrice * 1);
        }
      }
    return <>
        <div className="cart-each-box"> 
            <div className="cart-each-check"></div>
            <div className="cart-each-pro-box">
                <img src="/" alt=""/>
                <p className="cart-each-name">친환경 린넨 가방친환경 린넨 가방친환경 린넨 가방</p>
            </div>
            <div className="cart-each-price-box">
                <p className="cart-each-price">5,500</p>
                <p className="cart-each-krw">원</p>
            </div>
            <div className="cart-each-count-box">
                <div onClick={minusBtn} className="cart-each-minus">-</div>
                <input type="number" value={currentCount} onChange={() => {setCount(currentCount)}}/>
                <div onClick={plusBtn} className="cart-each-plus">+</div>
            </div>
            <div className="cart-each-total-box">
                <p className="cart-each-total">{currentPrice.toLocaleString()}</p>
                <p className="cart-each-krw">원</p>
            </div>
        </div>
        <div className="cart-each-box"> 
            <div className="cart-each-check"></div>
            <div className="cart-each-pro-box">
                <img src="/" alt=""/>
                <p className="cart-each-name">친환경 린넨 가방친환경 린넨 가방친환경 린넨 가방</p>
            </div>
            <div className="cart-each-price-box">
                <p className="cart-each-price">5,500</p>
                <p className="cart-each-krw">원</p>
            </div>
            <div className="cart-each-count-box">
                <div onClick={minusBtn} className="cart-each-minus">-</div>
                <input type="number" value={currentCount} onChange={() => {setCount(currentCount)}}/>
                <div onClick={plusBtn} className="cart-each-plus">+</div>
            </div>
            <div className="cart-each-total-box">
                <p className="cart-each-total">{currentPrice.toLocaleString()}</p>
                <p className="cart-each-krw">원</p>
            </div>
        </div>
    </>
}

export default Element;