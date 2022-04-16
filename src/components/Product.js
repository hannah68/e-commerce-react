import { Link } from "react-router-dom";

import "../styles/Shop.css";

import { randomStar, starIcons } from "../utils";

const Product = (props) => {
	const { item } = props;

	return (
		<div className="product">
			<img className="product__img" src={item.img} alt={item.title} />
			<p className="product__name">{item.title}</p>
			<div className="product__stars">
				<div className="stars">
					{starIcons.map((star, index) => {
						return <span key={index}>{star}</span>;
					})}
					<span>{randomStar()}</span>
				</div>
				<p className="product__price">£{item.price}</p>
			</div>
			<Link
				className="product__btn"
				to={`/products/${item.id}`}
				state={{ item }}
			>
				More details
			</Link>
		</div>
	);
};

export default Product;
