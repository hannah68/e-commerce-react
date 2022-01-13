import { AiOutlineLike } from "react-icons/ai";


const Review = (props) => {
    const {product, reviewInfo} = props;
    
    let style = {fontSize: '1.5rem', marginRight: '8px'}

    return (
        <div className='review-section' id="review">
            <div className="review">
                <div className="review-header">
                    <p className="review-header-name">
                        {reviewInfo.reviewerName}
                    </p>
                    <p className="review-header-star">
                        {reviewInfo.stars.map(el => el.name)}
                    </p>
                    <p className="review-header-date">
                        {reviewInfo.date}
                    </p>
                </div>
                <div className="review-body">
                    <img 
                        src={`.${product.img}`} 
                        alt={product.title} 
                        className='review-body-img'
                    />
                    <p className="review-body-text">
                        {reviewInfo.feedback}
                    </p>
                    <button className="review-body-btn">
                        <span><AiOutlineLike style={style}/></span>
                        helpful
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Review
