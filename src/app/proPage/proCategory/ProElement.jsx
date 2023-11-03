import { Link } from "react-router-dom";

const ProElement = () => {
  const clickValue = (e) => {
    console.log(e.target.innerHTML);
  }
  const tempData = { "article": ["자연 친화적 바디워시 3종 세트 (샤워볼, 바디워시, 때타올)", "친환경 주방 용품 (주방세제, 주방청소 클리너) 4종세트", "자연과 함께하는 세탁세제 (700ml)", "숲속을 걸어요(고체 핸드워시 & 칫솔세트)"], "page": ["1", "2", "3"] };
  let articleElement = tempData["article"].map((v, i) => <Link key={i} to="/ProDetail">
    <div className="pro-content-each">
      <img className="pro-each-img" src="/" />
      <p className="pro-each-text">{v}</p>
    </div>
  </Link>);
  let pageElement = tempData["page"].map((v, i) => <p key={i} onClick={clickValue}>{v}</p>);
  return [articleElement, pageElement];
}

export default ProElement;