import { Link } from "react-router-dom";

const Kitchen = () => {
  const kitchenData = { "kitchen": ["주방 3종 세트 (샤워볼, 바디워시, 때타올)", "친환경 주방 용품 (세제, 청소 클리너) 4종세트", "주방에서 함께하는 세제 (700ml)", "주방을 걸어요(고체 핸드워시 & 칫솔세트)"], "page": ["1", "2", "3"] };
  let kitchenElement = kitchenData["kitchen"].map((v, i) => <Link key={i} to={`/pro/kitchen/${i}`} >
    <div className="pro-content-each">
      <img className="pro-each-img" src="/" />
      <p className="pro-each-text">{v}</p>
    </div>
  </Link >);
  return <>
    {kitchenElement}
  </>
};

export default Kitchen;