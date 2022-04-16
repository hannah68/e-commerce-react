import { Link } from "react-router-dom";

import "../styles/Home.css";

import { randomStar, starIcons } from "../utils";

const FeaturedItem = (props) => {
	const { item } = props;

	return (
		<div className="features-item">
			<img src={item.img} alt={item.category} />
			<div className="sub-img">
				<p className="sub-img__title">{item.title}</p>
				<div className="sub-img__star">
					<div className="stars">
						{starIcons.map((star, index) => {
							return <span key={index}>{star}</span>;
						})}
						<span>{randomStar()}</span>
					</div>
					<p>£{item.price}</p>
				</div>
				<Link to={`/products/${item.id}`} state={{ item }}>
					<button className="sub-img__btn">more details</button>
				</Link>
			</div>
		</div>
	);
};

export default FeaturedItem;
