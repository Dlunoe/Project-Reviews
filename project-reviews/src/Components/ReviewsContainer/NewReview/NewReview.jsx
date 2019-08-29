import React, {Component} from 'react';

class NewReview extends Component {
    constructor(){
        super();
        this.state={
            title:'',
            description:''
        }
    }
    makeReview = (e) =>{
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    render(){
        return(
            <form>
                <input type="text" name="title" onChange={this.makeReview}/>
                <textarea name="description" onChange={this.makeReview}/>
            </form>
        )
    }


}

export default NewReview;