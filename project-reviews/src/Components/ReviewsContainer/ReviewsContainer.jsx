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
            console.log(response, "this is get response")
            if(response.status !== 200){
                throw Error(response.statusText);
            }
            const parsedReviews = await response.json();
            console.log(parsedReviews)
            this.setState({reviews:parsedReviews.data})
        }catch(err){
            return err
        }
    }
    addReview = async (review, formData)=>{
        try{
            const createdReview = await fetch('http://localhost:9000/reviews',{
                method: 'POST',
                body: JSON.stringify(review),
                credentials: "include",
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            const createdJsonReview = await createdReview.json();
            this.setState({reviews: [...this.state.reviews, createdJsonReview.data]})
        } catch(err){
            console.log(err)
        }
    }
    deleteReview = async (id)=>{
        try{
            const deleteReview = await fetch('http://localhost:9000/reviews/' + id,{
                method: 'DELETE',
                credentials: "include"
            })
            const parsedResponse = await deleteReview.json();
            this.setState({reviews: this.state.reviews.filter((review, i)=> review._id !==id)})
        }catch(err){
            console.log(err, "there was an error")
        }
    }
    render(){
        return(
            <div>
            <p>this is ReviewsContainer</p>
            <NewReview addReview={this.addReview}/>
            <Reviews reviews={this.state.reviews} deleteReview={this.deleteReview} />
            </div>
            
        )
    }

}

export default ReviewsContainer;