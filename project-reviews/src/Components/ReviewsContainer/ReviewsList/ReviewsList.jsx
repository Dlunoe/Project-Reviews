import React from 'react';
import EditReview from '../EditReviewModal/EditReviewModal'

const Reviews = (props) =>{
    const reviewList = props.reviews.map((review, i)=>{
          if(review.creator===props.userID){
            console.log(review)
            return(
                <li key={review._id}>
                    <h5>{review.title}</h5><br/>
                    <p>{review.description}</p>
                    <p>{review.playthrough}</p>
                    <small>{review.review}</small><br/>
                    <small>{review.rating}</small>               
                    <EditReview review={review} updateReview={props.updateReview}/>
                    <button onClick={(e)=>{
                        e.preventDefault();
                        props.deleteReview(review._id)
                    }}>Delete</button>
                </li>
            )
         }
    })
    return(
        <ul>{reviewList}</ul>
    )
}

export default Reviews;