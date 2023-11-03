import { Link } from "react-router-dom";

const Living = () => {
  const livingData = { "living": ["생활 3종 세트 (샤워볼, 바디워시, 때타올)", "친환경 생활 용품 (세제, 청소 클리너) 4종세트", "생활에서 함께하는 세제 (700ml)", "생활속을 걸어요(고체 핸드워시 & 칫솔세트)"], "page": ["1", "2", "3"] };
  let livingElement = livingData["living"].map((v, i) => <Link key={i} to={`/pro/living/${i}`} >
    <div className="pro-content-each">
      <img className="pro-each-img" src="/" />
      <p className="pro-each-text">{v}</p>
    </div>
  </Link >);
  return <>
    {livingElement}
  </>
};

export default Living;