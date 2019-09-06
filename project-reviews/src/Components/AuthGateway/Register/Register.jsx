import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';;

class Register extends Component{
    constructor(){
        super();
        this.state={
            username:null,
            password: null,
            modal:false
        }
        this.toggle = this.toggle.bind(this)
    }
    handleChange=(e)=>{
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.handleRegister(this.state)
    }
    toggle(){
        this.setState(prevState=>({
            modal: !prevState.modal
        }));
    }
    render(){
        return(
            <div>
                <Button color="secondary" onClick={this.toggle} size="sm">New User? Register an account</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader>New User Signup</ModalHeader>
                    <ModalBody>
                        <form>
                        Username:<input type="text" name="username" onChange={this.handleChange}/><br/>
                        Password:<input type="password" name="password" onChange={this.handleChange}/>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleSubmit}>Sign up!</Button>
                        <Button color="seconday" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>  
        )
    }
}

export default Register;