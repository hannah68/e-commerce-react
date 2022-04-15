import {useState} from 'react'
import { FaStar} from 'react-icons/fa'

const StarRating = (props) => {
    const {rating, setRating, hover, setHover} = props;
    
    
    console.log(rating);
    console.log('hover', hover);

    return (
        <div className="stars review-stars">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <label key={index}>
                        <input 
                            type='radio'
                            value={index}
                            onClick={() => setRating(index)}
                        />
                        <FaStar
                            color={index <= (hover || rating) ? '#FF9529' : '#bbb6b2'}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                        />
                    </label>
                   
                );
            })}
                       
        </div>
    )
}

export default StarRating
