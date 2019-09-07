import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class EditReview extends Component{
    constructor(props){
        super(props);
        this.state={
            id:this.props.review._id,
            title:this.props.review.title,
            description:this.props.review.description,
            playthrough: this.props.review.playthrough,
            review: this.props.review.review,
            rating: this.props.review.rating,
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        this.setState(prevState=>({
            modal: !prevState.modal
        }));
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.toggle()
        console.log('state', this.state)
        this.props.updateReview(this.props.review._id, this.state)
    }
    render(){
        return(
            <div>
                <Button color="primary" onClick={this.toggle} size="sm" class="list-edit">Edit</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Edit {this.props.review.title}</ModalHeader>
                    <ModalBody>
                        <form>
                        Title:<input type="text" name="title" onChange={this.handleChange}/><br/>
                        Description:<textarea name="description" onChange={this.handleChange} placeholder="What's a good description of how this playthrough differed from others, or perhaps log your current playtime and experiences instead"/><br/>
                        Playthrough:<input type="text" name="playthrough" onChange={this.handleChange} placeholder="Some description of which playthrough this was (x hours, certain campaign, etc)"/>
                        Your overall review:<textarea name="review" onChange={this.handleChange} placeholder="How did you enjoy the game this time around, did you do something new, discover something etc"/><br/>
                        1-5 scale, how much did you enjoy this playthrough <select name="rating" onChange={this.handleChange}>
                                <option></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleSubmit}>Submit</Button>
                        <Button color="seconday" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
        
    }
}

export default EditReview;