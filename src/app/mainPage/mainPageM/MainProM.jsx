import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MainProElement = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await axios.get("/pro?type=1&page=1");
      console.log(result.data);
      setData(result.data);
    })();
  }, []);
  return (
    <>
      <p className="today-pro-suggestion">오늘의 상품 추천</p>
      <div className="today-pro-wrap">
        <Link to={`/pro/kitchen/1/${data.at(0)?.pk}`} className="link-none">
          <div className="each-pro-box">
            <img
              src={`/src/img/pro/${data.at(0)?.fields.product_main_img}`}
              alt=""
            />
            <p className="each-pro-title">{data.at(0)?.fields.product_title}</p>
            <div className="each-pro-price-box">
              <p className="each-pro-price">
                {data.at(0)?.fields.product_price.toLocaleString()}
              </p>
              <p className="each-pro-krw">원</p>
            </div>
          </div>
        </Link>
        <Link to={`/pro/kitchen/1/${data.at(1)?.pk}`} className="link-none">
          <div className="each-pro-box">
            <img
              src={`/src/img/pro/${data.at(1)?.fields.product_main_img}`}
              alt=""
            />
            <p className="each-pro-title">{data.at(1)?.fields.product_title}</p>
            <div className="each-pro-price-box">
              <p className="each-pro-price">
                {data.at(1)?.fields.product_price.toLocaleString()}
              </p>
              <p className="each-pro-krw">원</p>
            </div>
          </div>
        </Link>
        <Link to={`/pro/kitchen/1/${data.at(2)?.pk}`} className="link-none">
          <div className="each-pro-box">
            <img
              src={`/src/img/pro/${data.at(2)?.fields.product_main_img}`}
              alt=""
            />
            <p className="each-pro-title">{data.at(2)?.fields.product_title}</p>
            <div className="each-pro-price-box">
              <p className="each-pro-price">
                {data.at(2)?.fields.product_price.toLocaleString()}
              </p>
              <p className="each-pro-krw">원</p>
            </div>
          </div>
        </Link>
        <Link to={`/pro/kitchen/1/${data.at(3)?.pk}`} className="link-none">
          <div className="each-pro-box">
            <img
              src={`/src/img/pro/${data.at(3)?.fields.product_main_img}`}
              alt=""
            />
            <p className="each-pro-title">{data.at(3)?.fields.product_title}</p>
            <div className="each-pro-price-box">
              <p className="each-pro-price">
                {data.at(3)?.fields.product_price.toLocaleString()}
              </p>
              <p className="each-pro-krw">원</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MainProElement;
