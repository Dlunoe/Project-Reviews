import React from 'react';
import EditReview from '../EditReviewModal/EditReviewModal'

const Reviews = (props) =>{
    const reviewList = props.reviews.map((review, i)=>{
        return(
            <li key={review._id}>
                <span>{review.title}</span><br/>
                <small>{review.description}</small>
                <EditReview review={review} updateReview={props.updateReview}/>
                <button onClick={(e)=>{
                    e.preventDefault();
                    props.deleteReview(review._id)
                }}>Delete</button>
            </li>
        )
    })
    return(
        <ul>{reviewList}</ul>
    )
}

export default Reviews;