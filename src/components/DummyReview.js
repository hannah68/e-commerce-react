import {dummyReview} from '../HelperFunctions';
import { AiOutlineLike } from "react-icons/ai";
import Review from '../components/Review';

const DummyReview = (props) => {
    const {product, isSubmitReviewForm, reviewInfo} = props;
    let style = {fontSize: '1.5rem', marginRight: '8px'}

    return (
        <div className='review-section' id="review">
            {dummyReview.map((el, index) => {
                return(
                    <div className="review" key={index}>
                        <div className="review-header">
                            <p className="review-header-name">{el.name}</p>
                            <p className="review-header-star">
                                {el.star.map((star, index) => <span key={index}>{star}</span>)}</p>
                            <p className="review-header-date">{el.date}</p>
                        </div>
                        <div className="review-body">
                            <img 
                                src={`.${product.img}`}
                                alt='furniture'
                                className='review-body-img'
                            />
                            <p className="review-body-text">{el.feedback}</p>
                            <button className="review-body-btn">
                                <span><AiOutlineLike style={style}/></span>
                                helpful
                            </button>
                        </div>
                    </div>
                )
            })}

           { isSubmitReviewForm && <Review reviewInfo={reviewInfo} product={product}/> } 
            
        </div>
    )
}

export default DummyReview
