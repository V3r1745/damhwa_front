import { Link } from "react-router-dom";

const Bathroom = () => {
  const bathroomData = { "bathroom": ["욕실이 3종 세트 (샤워볼, 바디워시, 때타올)", "친환경 욕실 용품 (주방세제, 주방청소 클리너) 4종세트", "욕실과 함께하는 욕실세제 (700ml)", "욕실속을 걸어요(고체 핸드워시 & 칫솔세트)"], "page": ["1", "2", "3"] };
  let bathroomElement = bathroomData["bathroom"].map((v, i) => <Link key={i} to={`/pro/bathroom/${i}`} >
    <div className="pro-content-each">
      <img className="pro-each-img" src="/" />
      <p className="pro-each-text">{v}</p>
    </div>
  </Link >);
  return <>
    {bathroomElement}
  </>
};

export default Bathroom;