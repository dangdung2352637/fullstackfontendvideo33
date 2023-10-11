import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import {
  getAllUsers,
  createNewUserService,
  deleteUserService,
  editUserService
} from "../../services/userService";
import "./UserManage.scss";
import ModalUser from "./ModalUser";
import axios from "axios";
import { reject } from "lodash";
import { emitter } from "../../utils/emitter";
import ModalEditUser from "./ModalEditUser";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModalUser: false,
      isOpenModalEditUser: false,
      userEdit:{},
    };
  }

  handleAddNewUser = () => {
    this.setState({
      isOpenModalUser: true,
    });
  };
  toggleModal = () => {
    this.setState({
      isOpenModalUser: !this.state.isOpenModalUser,
    });
  };

  toggleUserEditModal = () => {
    this.setState({
      isOpenModalEditUser: !this.state.isOpenModalEditUser,
    });
  }


  async componentDidMount() {
    await this.getAllUsersFromReact();
  }

  getAllUsersFromReact = async () => {
    let response = await getAllUsers("ALL");
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
      });
    }
  };

  createNewuser = async (data) => {
    try {
      let response = await createNewUserService(data);
      if (response && response.errCode !== 0) {
        alert(response.errMessage);
      } else {
        await this.getAllUsersFromReact();
        this.setState({
          isOpenModalUser: false,
        });
        emitter.emit('EVENT_CLEAR_MODAL_DATA',{'id' : 'your id'})
      }
      console.log("check respon", response);
    } catch (e) {
      reject(e);
    }
    console.log("check data from child", data);
  };

  handleDeleteUser = async (user) => {
    console.log("user", user);
    try {
      let res = await deleteUserService(user.id);
      console.log("repon", res);
      if(res && res.errCode === 0){
        await this.getAllUsersFromReact();

      }else{
        alert(res.errMessage)
      }
    } catch (e) {
      console.log(e);
    }
  };

  handleEditUser = (user) => {
    console.log("check edit user", user);
    this.setState({
      isOpenModalEditUser: true,
      userEdit: user,
    })

  }

  doEditUser = async(user) => {
    try{
      let res = await editUserService(user);
      if(res && res.errCode === 0) {
        this.setState({
          isOpenModalEditUser:false,
        })
        this.getAllUsersFromReact()
      }else{
        alert(res.errMessage)
      }
    }catch(e){
console.log(e);
    }
  }

  render() {
    let arrUsers = this.state.arrUsers;
    return (
      <div className="users-container">
        <ModalUser
          isOpen={this.state.isOpenModalUser}
          createNewuser={this.createNewuser}
          toggleModalParent={this.toggleModal}
        />
        {this.state.isOpenModalEditUser &&
        <ModalEditUser
                  isOpen={this.state.isOpenModalEditUser}
                  toggleUserEditModal={this.toggleUserEditModal}
                  currrentUser={this.state.userEdit}
                  editUser={this.doEditUser}
        />}
        <div className="title text-center">Manage users with Eric</div>
        <div className="mx-1">
          <button
            onClick={() => this.handleAddNewUser()}
            className="btn btn-primary px-3"
          >
            <i className="fas fa-plus"></i> Edit a user
          </button>
        </div>
        <div className="users-table mt3-3 mx-3">
          <table id="customers">
            <tbody>
              <tr>
                <th>Email</th>
                <th>Firt name</th>
                <th>Last name</th>
                <th>Address</th>
                <th>Action</th>
              </tr>

              {arrUsers &&
                arrUsers.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.email}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.address}</td>
                      <td>
                        <button className="btn-edit" 
                          onClick={() => this.handleEditUser(item)}

                        >
                          <i className="fas fa-pencil-alt"></i>
                        </button>
                        <button
                          className="btn-delete"
                          onClick={() => this.handleDeleteUser(item)}
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
