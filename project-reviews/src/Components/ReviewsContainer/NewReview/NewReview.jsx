import React, {Component} from 'react';

class NewReview extends Component {
    constructor(){
        super();
        this.state={
            title:'',
            description:''
        }
    }
    updateReview = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return(
            <form onSubmit={(e)=>{
                e.preventDefault();
                this.props.addReview(this.state)}}>
                Title:<input type="text" name="title" onChange={this.updateReview}/>
                Description:<textarea name="description" onChange={this.updateReview}/>
                <input type="submit" value="Add new game review"/>
            </form>
        )
    }


}

export default NewReview;