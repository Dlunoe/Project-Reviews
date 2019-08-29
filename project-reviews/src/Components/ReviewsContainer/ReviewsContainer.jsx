import React, {Component} from 'react';
import Reviews from './ReviewsList/ReviewsList'
import NewReview from './NewReview/NewReview'

class ReviewsContainer extends Component {
    constructor(){
        super();

        this.state = {
            reviews: [{
                title:"The Game",
                description:"This is the best game ever"
            },
            {title:"The Next Game",
            description: "Even more game to game"}]
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