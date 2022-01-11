import {FaStar, FaStarHalfAlt, FaRegStar, FaUser, FaPen} from 'react-icons/fa'
import {useState} from 'react'

const ReviewForm = (props) => {
    const {product, setReviewInfo, reviewInfo, isSubmitReviewForm, setIsSubmitReviewForm} = props;
    
    
    console.log(reviewInfo);

    const reviewerNameHandler = (e) => {
        setReviewInfo({...reviewInfo, ReviewerName: e.target.value});
    }

    const changeStarHandler = (star) => {
        const updatedStarArr = reviewInfo.stars.map(el => el.id === star.id ? {...el, name: <FaStar/>} : el);
        setReviewInfo({...reviewInfo, stars: updatedStarArr});
    }

    const feedbackHandler = (e) => {
        setReviewInfo({...reviewInfo, feedback: e.target.value});
    }

    const submitReviewFormHandler = (e) => {
        e.preventDefault();
        setIsSubmitReviewForm(true)
    }

    return (
        <form className='review-form' onSubmit={submitReviewFormHandler}>
            <div className="review-container">
                <p className='review-title'>Your personal info.</p>
                <div className="user-name">
                    <span><FaUser/></span>
                    <input 
                        type="text" 
                        className='user-input' 
                        placeholder='Enter your name'
                        value={reviewInfo.ReviewerName}
                        onChange={reviewerNameHandler}
                    />
                </div>
                <div className="rating">
                    <p>Rate our overall services.</p>
                    <div className="stars review-stars">
                        {reviewInfo.stars.map(star => {
                            return (
                                <span 
                                    key={star.id} 
                                    onClick={() => changeStarHandler(star)}
                                    >
                                    {star.name}
                                </span>
                            )
                        })}
                    </div>
                </div>

                <div className="feedback">
                    <p className='feedback-text'>Write your feedback.</p>
                    <div className="user-text-review">
                        <span><FaPen/></span>
                        <textarea 
                            cols="76" 
                            rows="5"
                            value={reviewInfo.feedback}
                            onChange={feedbackHandler}
                        ></textarea>
                    </div>
                </div>
                <button type='submit' className='review-btn'>Submit</button>
            </div>
        </form>
    )
}

export default ReviewForm
