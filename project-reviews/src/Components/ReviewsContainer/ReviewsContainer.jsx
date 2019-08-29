import React, {Component} from 'react';
import Reviews from './ReviewsList/ReviewsList'
import NewReview from './NewReview/NewReview'

class ReviewsContainer extends Component {
    constructor(){
     super();
     this.state = {
        reviews: []
        }
    }
    componentDidMount(){
        this.getReviews()
    };
    getReviews=async()=>{
        try{
            const response = await fetch('http://localhost:9000/reviews');

            if(response.status.code !==1){
                throw Error(response.statusText);
            }
            const parsedReviews = await response.json();
            this.setState({reviews:parsedReviews.data})
        }catch(err){
            return err
        }
    }
    render(){
        return(
            <div>
            <p>this is ReviewsContainer</p>
            <Reviews reviews={this.state.reviews} />
            </div>
            
        )
    }

}

export default ReviewsContainer;