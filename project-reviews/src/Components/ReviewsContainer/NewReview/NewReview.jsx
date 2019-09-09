import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';;

class NewReview extends Component {
    constructor(){
        super();
        this.state={
            title:'',
            description:'',
            playthrough:null,
            review:'',
            rating: null,
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
                <Button color="primary" onClick={this.toggle} class="list-edit">Add a review</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add a review</ModalHeader>
                    <ModalBody>
                        <form>
                        Title:<input type="text" name="title" onChange={this.updateReview}/><br/>
                        Description (What's a good description of how this playthrough differed from others, or perhaps log your current playtime and experiences):<br/><textarea name="description" onChange={this.updateReview}/><br/>
                        Playthrough (x hours, certain campaign, etc):<input name="playthrough" type="text" onChange={this.updateReview}/><br/>
                        Your overall review of the playthrough, how did you enjoy the game this time around:<br/><textarea name="review" onChange={this.updateReview}/><br/>
                        1-5 scale, how much did you enjoy this playthrough <select name="rating" onChange={this.updateReview}>
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