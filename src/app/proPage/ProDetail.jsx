import { React, useState } from 'react';

const ProDetail = () => {
  const inProPrice = 27900;
  const [currentCount, setCount] = useState(1);
  const [currentPrice, setPrice] = useState(inProPrice);
  const minusBtn = () => {
    if (currentCount > 1) {
      setCount(parseInt(currentCount) - 1);
      setPrice(inProPrice * (parseInt(currentCount) - 1));
    }
  }
  const plusBtn = () => {
    if (currentCount < 10) {
      setCount(parseInt(currentCount) + 1)
      setPrice(inProPrice * (parseInt(currentCount) + 1));
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
  return <section className="pro-detail-section">
    <div className="img-box">
      <img src="/src/img/intro_img.png" alt="pro-img" />
      <div className="mark-box">
        <img src="/src/img/intro_img.png" alt="mark-img" />
        <img src="/src/img/intro_img.png" alt="mark-img" />
        <img src="/src/img/intro_img.png" alt="mark-img" />
      </div>
    </div>
    <div className="func-box">
      <p className="pro-name">자연 친화적 바디워시 3종 세트
        (샤워볼, 바디워시, 때타올)</p>
      <div className="price-box">
        <p className="pro-price">{currentPrice.toLocaleString()}</p>
        <p className="pro-krw">원</p>
      </div>
      <div className="count-box">
        <div onClick={minusBtn} className="minus-btn">-</div>
        <input type="text" className="current-Count" value={currentCount} onChange={inputCount} onBlur={blurCount}/>
        <div onClick={plusBtn} className="plus-btn">+</div>
      </div>
      <div className="purchase-box">
        <div className="pro-basket">장바구니 담기</div>
        <div className="pro-purchase">구매하기</div>
      </div>
    </div>
    <div className="pro-description">
      환경 호르몬, 납, 카드뮴 무검출 제품으로 환경 유해 성분을 포함하지 않는 발수처리 방식으로 제작되어 유해물질 없는 친환경 제품입니다.
    </div>
  </section>
}

export default ProDetail;
