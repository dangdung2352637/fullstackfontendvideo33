import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getAllUsers } from "../../services/userService";
import "./UserManage.scss";
import ModalUser from "./ModalUser";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModalUser : false,
    };
  }

  async componentDidMount() {
    let response = await getAllUsers("ALL");
    if (response && response.errCode === 0) {
      this.setState(
        {
          arrUsers: response.users,
        },
        () => {
          console.log("check state usser", this.state.arrUsers);
        }
      );
      console.log("check state usser", this.state.arrUsers);
    }
  }

  handleAddNewUser = () => {
    this.setState({
      isOpenModalUser : true,
    })
   
  }
  toggleModal = () => {
    this.setState({
      isOpenModalUser : !this.state.isOpenModalUser,
    })
   
  }

  render() {
    let arrUsers = this.state.arrUsers;
    return (
      <div className="users-container">
        <ModalUser
        isOpen = {this.state.isOpenModalUser}
        test = {'abc'}
        toggleModalParent = {this.toggleModal}
        />
        <div className="title text-center">Manage users with Eric</div>
        <div className="mx-1">
        <button
        onClick={() => this.handleAddNewUser()}
        className="btn btn-primary px-3"><i class="fas fa-plus"></i>  Add new user</button>
        </div>
        <div className="users-table mt3-3 mx-3">
          <table id="customers">
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
                        <button className="btn-edit"><i class="fas fa-pencil-alt"></i></button>
                        <button className="btn-delete"><i class="fas fa-trash-alt"></i></button>

                    </td>

                  </tr>
                );
              })}
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
