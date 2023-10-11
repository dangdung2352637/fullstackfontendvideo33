import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { emitter } from "../../utils/emitter";
import _ from 'lodash'

class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
    };
    this.listenToEmitter();
  }

  listenToEmitter = () => {
    emitter.on('EVENT_CLEAR_MODAL_DATA', data => {
        this.setState({
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            address: "",
        })
    })
  }
  toggle = () => {
    this.props.toggleUserEditModal();
  };
  componentDidMount() {
    let user = this.props.currrentUser

    if(user && !_.isEmpty(user)){
        this.setState({
            id:user.id,
            email: user.email,
            password: 'harcode',
            firstName:user.firstName ,
            lastName:user.lastName ,
            address: user.address,

        })
    }
    console.log("chek prop from parent", this.props.currrentUser);

  }

  handleOnChangeInput = (event, id) => {

    //good code
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };

  checkValidateInput = () => {
   let isValue = true ; 
    let arrInput = ['email', 'password' , 'firstName' , 'lastName' , 'address'];
    for(let i=0 ; i < arrInput.length ; i++){
        if(!this.state[arrInput[i]]){
            isValue = false;
            alert('missing parameter' , arrInput[i])
            break;
        }
    }
    return isValue;
  }

  handleSaveUser = () => {
    let isValue = this.checkValidateInput();
    if(isValue === true){
        //call api edit user
        this.props.editUser(this.state)
        console.log("data modal ", this.state);
    }
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => {
          this.toggle();
        }}
        className={"modal-user-container"}
        size="lg"
        centered
      >
        <ModalHeader
          toggle={() => {
            this.toggle();
          }}
        >
          Create a new user
        </ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container">
              <label>Email</label>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnChangeInput(event, "email");
                }}
                value={this.state.email}
                disabled
              ></input>
            </div>
            <div className="input-container">
              <label>Password</label>
              <input
                type="password"
                onChange={(event) => {
                  this.handleOnChangeInput(event, "password");
                }}
                value={this.state.password}
                disabled
              ></input>
            </div>
            <div className="input-container">
              <label>First name</label>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnChangeInput(event, "firstName");
                }}
                value={this.state.firstName}
              ></input>
            </div>
            <div className="input-container">
              <label>Last name</label>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnChangeInput(event, "lastName");
                }}
                value={this.state.lastName}
              ></input>
            </div>
            <div className="input-container max-width-input">
              <label>Address</label>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnChangeInput(event, "address");
                }}
                value={this.state.address}
              ></input>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="px-3"
            color="primary"
            onClick={() => {
              this.handleSaveUser();
            }}
          >
            Save Changes
          </Button>{" "}
          <Button
            className="px-3"
            color="secondary"
            onClick={() => {
              this.toggle();
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
