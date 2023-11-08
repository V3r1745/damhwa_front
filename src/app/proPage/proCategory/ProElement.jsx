import { Link } from "react-router-dom";

const ProElement = (props) => {
  return (
    <Link to={`${props.location}/${props.id}`}>
      <div className="pro-content-each">
        <img className="pro-each-img" src={`/src/img/${props.img}`} />
        <p className="pro-each-price">{props.price.toLocaleString()}원</p>
        <p className="pro-each-text">{props.title}</p>
      </div>
    </Link>
  );
};

export default ProElement;
