import React from 'react';

const Reviews = (props) =>{
    const reviewList = props.reviews.map((review, i)=>{
        return(
            <li key={review._id}>
                <span>{review.title}</span><br/>
                <small>{review.description}</small>
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