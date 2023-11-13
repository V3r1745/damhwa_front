import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartElements from "./CartElement";
import { connect } from "react-redux";
import axios from "axios";
import { NotificationManager } from "react-notifications";

const CartPage = (props) => {
  const navigate = useNavigate();
  const [ajaxResult, setAjaxResult] = useState([]);
  const [ajaxReload, setAjaxReload] = useState(Math.random());
  const [check, setCheck] = useState([]);
  const [trigger, setTrigger] = useState(true);
  const deleteList = () => {
    (async () => {
      const temp = Array.from(check.entries()).filter((v) => {
        return v.at(1) === true;
      }).map((v) => {
        return v.at(0)
      });
      try {
        await axios.delete("/delete", { data: temp });
        setTrigger(!trigger);
      } catch (e) {
        console.log(e);
      }
    })();
  };
  useEffect(() => {
    (async () => {
      const result = await axios.get("/getBucket");
      console.log(result.data.result.at(0).fields.bucket_list);
      setAjaxResult(result.data.result.at(0).fields.bucket_list);
      setCheck(
        Array.from(
          {
            length: result.data.result.at(0).fields.bucket_list.length,
          },
          () => false
        )
      );
    })();
  }, [navigate, trigger]);
  props.login.login === false && navigate("/login");
  return (
    <main className="cart-main">
      <article>
        <section className="cart-top-section">
          <p className="cart-title">주문 상품</p>
          <div className="cart-delete" onClick={deleteList}>
            선택 삭제
          </div>
        </section>
        <section className="cart-mid-section">
          <div className="cart-collum">
            <div
              className="cart-check-all"
              onClick={() => {
                if (check.every((v) => v === false)) {
                  setCheck(check.map(() => true));
                } else if (check.every((v) => v === true)) {
                  setCheck(check.map(() => false));
                } else {
                  setCheck(check.map(() => true));
                }
              }}
            >
              {check.every((v) => v === true) ? "V" : ""}
            </div>
            <p className="cart-pro-name">상품</p>
            <p className="cart-pro-price">가격</p>
            <p className="cart-pro-count">수량</p>
            <p className="cart-pro-total">총계</p>
          </div>
          <div className="cart-list-wrap">
            {ajaxResult.map((v, i) => {
              return (
                <CartElements
                  setTrigger={setTrigger}
                  trigger={trigger}
                  index={i}
                  ajaxRandom={ajaxReload}
                  reload={setAjaxReload}
                  check={check}
                  setCheck={setCheck}
                  key={v.url}
                  title={v.name}
                  count={v.count}
                  price={v.price}
                  url={v.url}
                />
              );
            })}
          </div>
        </section>
        <section className="cart-bot-section">
          <div className="cart-total-box">
            <p className="cart-total-text">총 구매금액</p>
            <div className="cart-total-price-box">
              <p className="cart-total">
                {ajaxResult
                  .reduce((pv, cv) => {
                    return pv + cv.count * cv.price;
                  }, 0)
                  .toLocaleString()}
              </p>
              <p className="cart-total-krw">원</p>
            </div>
          </div>
          <div
            className="cart-purchase"
            onClick={() => {
              NotificationManager.success("성공", "구매 완료!", 3000);
            }}
          >
            구매하기
          </div>
        </section>
      </article>
    </main>
  );
};

export default connect((state) => state)(CartPage);
