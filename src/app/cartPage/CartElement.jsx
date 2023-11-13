import axios from "axios";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CartElement = (props) => {
  const [count, setCount] = useState(props.count);
  useEffect(() => {
    axios.patch("/mod_item", {data: {num: props.index, count: count}})
  }, [count])
  return (
    <div className="cart-each-box" a={props.ajaxReload}>
      <div className="cart-each-check" onClick={() => {
				props.setCheck(props.check.with(props.index, !props.check.at(props.index)))
			}}>
        {props.check.at(props.index) ? "V" : ""}
      </div>
      <div className="cart-each-pro-box">
        <img src={`/src/img/pro/${(props.url).split("/").at(-1)}.jpg`} alt="" />
        <Link to={props.url}>
          <p className="cart-each-name">{props.title}</p>
        </Link>
      </div>
      <div className="cart-each-price-box">
        <p className="cart-each-price">
          {parseInt(props.price).toLocaleString()}
        </p>
        <p className="cart-each-krw">원</p>
      </div>
      <div className="cart-each-count-box">
        <div
          onClick={() => {
            if (count > 1) {
              setCount(parseInt(count) - 1);
              props.setTrigger(!props.trigger)
            }
          }}
          className="cart-each-minus"
        >
          -
        </div>
        <input type="number" value={count} onInput={(e) => {
          if (e.target.value > 10) {
          setCount(10)
              props.setTrigger(!props.trigger)
          } else {
            setCount(parseInt(e.target.value))
              props.setTrigger(!props.trigger)
          }
        }} onBlur={(e) => {
          if (e.target.value < 1) {
            setCount(1)
              props.setTrigger(!props.trigger)
          }
        }} />
        <div
          onClick={() => {
            if (count < 10) {
              setCount(parseInt(count) + 1);
              props.setTrigger(!props.trigger)
            }
          }}
          className="cart-each-plus"
        >
          +
        </div>
      </div>
      <div className="cart-each-total-box">
        <p className="cart-each-total">
          {(count * props.price ? props.price : 0).toLocaleString()}
        </p>
        <p className="cart-each-krw">원</p>
      </div>
    </div>
  );
};

export default CartElement;
