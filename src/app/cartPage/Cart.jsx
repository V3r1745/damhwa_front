import { React, useState } from 'react';
import CartElements from "./CartElement";

const CartPage = () => {
  const elements = CartElements();
  return <>
    <main className="cart-main">
      <article>
        <section className="cart-top-section">
          <p className="cart-title">주문 상품</p>
          <div className="cart-delete">선택 삭제</div>
        </section>
        <section className="cart-mid-section">
          <div className="cart-collum">
            <div className="cart-check-all"></div>
            <p className="cart-pro-name">상품</p>
            <p className="cart-pro-price">가격</p>
            <p className="cart-pro-count">수량</p>
            <p className="cart-pro-total">총계</p>
          </div>
          <div className="cart-list-wrap">
            {elements}
          </div>
        </section>
        <section className="cart-bot-section">
          <div className="cart-total-box">
            <p className="cart-total-text">총 구매금액</p>
            <div className="cart-total-price-box">
              <p className="cart-total">5,500</p>
              <p className="cart-total-krw">원</p>
            </div>
          </div>
          <div className="cart-purchase">구매하기</div>
        </section>
      </article>
    </main>
  </>
}

export default CartPage;