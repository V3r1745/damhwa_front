import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const Clean = () => {
  const currentPage = useOutletContext();
  const cleanData = { "clean": ["청소 3종 세트 (샤워볼, 바디워시, 때타올)", "친환경 청소 용품 (세제, 청소 클리너) 4종세트", "청소와 함께하는 세제 (700ml)", "청소와 걸어요(고체 핸드워시 & 칫솔세트)"], "price": ["20,000원", "22,000원", "31,000원", "14900원"], "page": ["1", "2", "3"] };
  let cleanElement = cleanData["clean"].map((v, i) => <Link key={i} to={`${currentPage.location}/${i}`} >
    <div className="pro-content-each">
      <img className="pro-each-img" src="/" />
      <p className="pro-each-price">{cleanData["price"][i]}</p>
      <p className="pro-each-text">{v}</p>
    </div>
  </Link >);
  return <section className="pro-section">
  {cleanElement}
</section>
};

export default Clean;