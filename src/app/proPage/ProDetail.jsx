import axios from "axios";
import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NotificationManager } from "react-notifications";

const ProDetail = () => {
  const [currentCount, setCurrentCount] = useState(1);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [fetchElement, setFetchElement] = useState({});
  const location = useLocation();
  useEffect(() => {
    (async () => {
      const result = await axios.get(
        `/po?pk=${location.pathname.split("/").at(-1)}`
      );
      console.log(result);
      setFetchElement({ ...result.data.at(0) });
      setCurrentPrice(result.data.at(0).fields.product_price);
    })();
  }, [location]);

  const minusBtn = () => {
    if (currentCount > 1) {
      setCurrentCount(currentCount - 1);
    }
  };
  const plusBtn = () => {
    if (currentCount > 0 && currentCount < 10) {
      setCurrentCount(currentCount + 1);
    }
  };
  const inputCount = (e) => {
    setCurrentCount(e.target.value.replace(/\D/g, ""));
  };
  const addBucket = async () => {
    try {
      const result = await axios.put(
        `/addBucket?url=${encodeURIComponent(
          location.pathname
        )}&name=${encodeURIComponent(
          fetchElement?.fields?.product_title
        )}&price=${encodeURIComponent(currentPrice)}&count=${encodeURIComponent(
          currentCount
        )}`
      );
      console.log("asd" + result);
      if (result?.data === "success") {
        NotificationManager.success(
          "성공",
          "장바구니가 추가 되었습니다.",
          3000
        );
      }
    } catch (e) {
      NotificationManager.error("오류", "장바구니에 있는 상품입니다.", 3000);
    }
  };
  const buyButton = () => {
    NotificationManager.success("완료", "구매가 완료되었습니다.", 3000);
  };

  return (
    <section className="pro-detail-section">
      <div className="img-box">
        <img src={`/src/img/pro/${fetchElement?.fields?.product_main_img}`} alt="main img" />
        <div className="mark-box">
          <img
            src="/src/img/pro/badge/intro_img1.png"
            style={{
              display: parseInt(fetchElement?.fields?.product_badge.at(0))
                ? "inline-block"
                : "none",
            }}
            alt="mark-img"
          />
          <img
            src="/src/img/pro/badge/intro_img2.png"
            style={{
              display: parseInt(fetchElement?.fields?.product_badge.at(1))
                ? "inline-block"
                : "none",
            }}
            alt="mark-img"
          />
          <img
            src="/src/img/pro/badge/intro_img3.png"
            style={{
              display: parseInt(fetchElement?.fields?.product_badge.at(2))
                ? "inline-block"
                : "none",
            }}
            alt="mark-img"
          />
        </div>
      </div>
      <div className="func-box">
        <p className="pro-name">{fetchElement?.fields?.product_title}</p>
        <div className="price-box">
          <p className="pro-price">{currentPrice.toLocaleString()}</p>
          <p className="pro-krw">원</p>
        </div>
        <div className="count-box">
          <div onClick={minusBtn} className="minus-btn">
            -
          </div>
          <input
            type="text"
            className="current-Count"
            value={currentCount}
            onChange={inputCount}
          />
          <div onClick={plusBtn} className="plus-btn">
            +
          </div>
        </div>
      </div>
      <div className="pro-description">
        {fetchElement?.fields?.product_description}
      </div>
      <div className="price-result-box">
        <div className="price-total-box">
          <p className="pro-total-text">합계</p>
          <div className="pro-total-price-box">
            <p className="pro-total-price">
              {(currentPrice * currentCount).toLocaleString()}
            </p>
            <p className="pro-total-krw">원</p>
          </div>
        </div>
        <div className="purchase-box">
          <div className="pro-basket" onClick={addBucket}>
            장바구니 담기
          </div>
          <div className="pro-purchase" onClick={buyButton}>
            구매하기
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProDetail;
