import { Link } from "react-router-dom";

const ProElement = (props) => {
  return (
    <Link to={`${props.location}/${props.id}`}>
      <div className="pro-content-each">
        <div className="pro-each-img" style={{ backgroundImage: `url(/src/img/pro/${props.img})`}}></div>
        <p className="pro-each-price">{props.price.toLocaleString()}원</p>
        <p className="pro-each-text">{props.title}</p>
      </div>
    </Link>
  );
};

export default ProElement;

{/* <img className="pro-each-img" src={`/src/img/pro/${props.img}`} /> */}