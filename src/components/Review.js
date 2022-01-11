import React from 'react'

const Review = () => {
    return (
        <div className='review'>
            <div className="review-header">
                <p className="review-header-name">hanna naderi</p>
                <p className="review-header-star">star</p>
                <p className="review-header-date">06/09/2021</p>
            </div>
            <div className="review-body">
                <img src="../assets/images/sofa1.jpg" alt="" className='review-body-img'/>
                <p className="review-body-text">text</p>
                <button className="review-body-btn">helpful</button>
            </div>
        </div>
    )
}

export default Review
