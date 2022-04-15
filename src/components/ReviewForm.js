import {FaStar, FaUser, FaPen } from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {useState, useEffect} from 'react'
import {APIEndpoints} from '../config'
import StarRating from './StarRating'


const ReviewForm = (props) => {
    const {
        setReviewInfo, 
        reviewInfo, 
        isSubmitReviewForm, 
        setIsSubmitReviewForm,
        product,
        rating,
        setRating,
        hover,
        setHover,
    } = props;

    // const [reviews, setReviews] = useState([]);


    // useEffect(() => {
    //     const getReviewData = async() => {
    //         const res = await fetch(APIEndpoints.review)
    //         const data = await res.json();
    //         setReviews(data)
    //     }
    //     getReviewData()
    // }, [])

    // console.log(reviews);

    // useEffect(() => {
    //     const postProductReviews = async() => {
    //         await fetch(APIEndpoints.review, {
    //             method: 'POST',
    //             headers: {
    //             "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({productId: product.id , review : reviewInfo})
    //         })
    //     }
    //     if(isSubmitReviewForm){
    //         postProductReviews();
    //     }
    // }, [isSubmitReviewForm, product, reviewInfo])
    
    // reviewerName handler =================================
    const reviewerNameHandler = (e) => {
        setReviewInfo({...reviewInfo, reviewerName: e.target.value});
    }

    // reviewerEmail handler ================================
    const reviewerEmailHandler = (e) => {
        setReviewInfo({...reviewInfo, reviewerEmail: e.target.value})
    }

    // change star handler ==================================
    const changeStarHandler = (star) => {
        const updatedStarArr = reviewInfo.stars.map(el => el.id === star.id ? {...el, name: <FaStar/>} : el);
        setReviewInfo({...reviewInfo, stars: updatedStarArr});
    }

    // feedback handler =======================================
    const feedbackHandler = (e) => {
        setReviewInfo({...reviewInfo, feedback: e.target.value});
    }

    // submit review ==========================================
    const submitReviewFormHandler = (e) => {
        e.preventDefault();
        let today = new Date().toLocaleDateString();
        setReviewInfo({...reviewInfo, date: today});
        // const updatedReview = reviews.map(item => {
        //     if(item.productId === product.id){
        //         console.log({...item, review : reviewInfo});
        //         return {...item, review : reviewInfo}
        //     }else{
        //         return item
        //     }
        // })
        // setReviews(updatedReview);
        setIsSubmitReviewForm(true);
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
                        value={reviewInfo.reviewerName}
                        onChange={reviewerNameHandler}
                    />
                </div>
                <div className="user-email">
                    <span><MdEmail/></span>
                    <input 
                        type="email" 
                        className='user-input' 
                        placeholder='Enter your email'
                        value={reviewInfo.reviewerEmail}
                        onChange={reviewerEmailHandler}
                    />
                </div>
                <div className="rating">
                    <p>Rate our overall services.</p>
                    <StarRating
                        rating={rating}
                        setRating={setRating}
                        hover={hover}
                        setHover={setHover}
                    />
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
