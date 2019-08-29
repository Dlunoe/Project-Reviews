import React from 'react';

const Reviews = (props) =>{
    const reviewList = props.reviews.map((review, i)=>{
        return(
            <li key={review._id}>
                <span>{review.title}</span><br/>
                <small>{review.description}</small>
            </li>
        )
    })
    return(
        <ul>{reviewList}</ul>
    )
}

export default Reviews;