import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class EditReview extends Component{
    constructor(props){
        super(props);
        this.state={
            id:this.props.review._id,
            title:this.props.review.title,
            description:this.props.review.description,
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
                <Button color="primary" onClick={this.toggle}>Edit</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Edit {this.props.review.title}</ModalHeader>
                    <ModalBody>
                        <form>
                        Title:<input type="text" name="title" onChange={this.handleChange}/>
                        Description:<textarea name="description" onChange={this.handleChange}/>
                        Your review of the game:<textarea name="description" onChange={this.handleChange}/>
                        What would you rate this title? <select name="rating" onChange={this.updateReview}>
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