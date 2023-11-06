import { Link } from "react-router-dom";

const Washing = () => {
  const washingData = { "washing": ["세탁 3종 세트 (샤워볼, 바디워시, 때타올)", "친환경 세탁 용품 (세제, 청소 클리너) 4종세트", "세탁기에서 함께하는 세제 (700ml)", "세탁기속을 걸어요(고체 핸드워시 & 칫솔세트)"], "page": ["1", "2", "3"] };
  let washingElement = washingData["washing"].map((v, i) => <Link key={i} to={`/pro/washing/${i}`} >
    <div className="pro-content-each">
      <img className="pro-each-img" src="/" />
      <p className="pro-each-text">{v}</p>
    </div>
  </Link >);
  return <>
    {washingElement}
  </>
};

export default Washing;