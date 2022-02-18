import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="card">
      <Link className="link" to={`/item/${item.fields.recordid}`}>
        <span className="title">{item.fields.title}</span>
        <img src={item.fields.img} alt="" className="img" />
        <p className="desc">{item.desc}</p>
        <button className="cardButton">Read More</button>
      </Link>
    </div>
  );
};

export default Card;
