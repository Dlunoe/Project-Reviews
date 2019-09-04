import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';;

class NewReview extends Component {
    constructor(){
        super();
        this.state={
            title:'',
            description:'',
            review:'',
            rating: null,
            creator: null,
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }
    updateReview = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    toggle(){
        this.setState(prevState=>({
            modal: !prevState.modal
        }));
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.toggle()
        console.log('state', this.state)
        this.props.addReview(this.state)
    }
    render(){
        return(
            <div>
                <Button color="primary" onClick={this.toggle}>Add a review</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add a review</ModalHeader>
                    <ModalBody>
                        <form>
                        Title:<input type="text" name="title" onChange={this.updateReview}/>
                        Description:<textarea name="description" onChange={this.updateReview}/>
                        Your review of the game:<textarea name="review" onChange={this.updateReview}/>
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

export default NewReview;