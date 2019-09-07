import React from 'react';
import EditReview from '../EditReviewModal/EditReviewModal';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';;

const Reviews = (props) =>{
    const reviewList = props.reviews.map((review, i)=>{
          if(review.creator===props.userID){
            console.log(review)
            return(
                <li key={review._id} class="list-item">
                    <h3 class="list-title">{review.title}</h3><br/>
                    <small class="list-playthrough">{review.playthrough}</small>  
                    <p class="list-description">{review.description}</p><br/>                
                    <p class="list-review">{review.review}</p><br/>
                               
                    <EditReview review={review} updateReview={props.updateReview} class="list-edit"/>
                    <Button onClick={(e)=>{
                        e.preventDefault();
                        props.deleteReview(review._id)
                    }} class="list-delete">Delete</Button>  
                </li>
            )
         }
    })
    return(
        <ul>{reviewList}</ul>
    )
}

export default Reviews;