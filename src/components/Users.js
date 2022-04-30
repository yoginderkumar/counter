import React from "react";
import { Input } from "antd";

import User from "./User";
import FollowersModal from "./FollowersModal";

class Users extends React.Component {
  state = {
    users: [],
    search: "",
    followers: [],
    selectedUser: {},
    isFollowersModalVisible: false,
  };

  componentDidMount() {
    const a = fetch("https://api.github.com/users");
    a.then((data) => data.json())
      .then((users) => this.setState({ users }))
      .catch((err) => console.log("err: ", err));
  }

  handleSearchInputHandler = (e) => {
    const { value } = e.target;
    this.setState({ search: value });
  };

  onFollowersClickHandler = (user) => {
    this.setState({ isFollowersModalVisible: true, selectedUser: user }, () => {
      this.getFollowersList();
    });
  };

  onCloseFollowersModal = () => {
    this.setState({ isFollowersModalVisible: false });
  };

  getFollowersList = () => {
    const { selectedUser } = this.state;
    fetch(selectedUser.followers_url)
      .then((data) => data.json())
      .then((followers) => {
        this.setState({ followers });
      })
      .catch((err) => console.log("Err: ", err));
  };

  render() {
    const { users, search, followers, isFollowersModalVisible } = this.state;
    const filteredUsers = users.filter((user) => user.login.includes(search));
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Input
          value={search}
          placeholder="Search by username"
          onChange={this.handleSearchInputHandler}
          style={{ width: "30%", marginTop: 20 }}
        />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {filteredUsers.map((user) => (
            <User
              user={user}
              key={user.node_id}
              onFollowersClickHandler={this.onFollowersClickHandler}
            />
          ))}
        </div>
        <FollowersModal
          followers={followers}
          isModalVisible={isFollowersModalVisible}
          onCloseModal={this.onCloseFollowersModal}
        />
      </div>
    );
  }
}

export default Users;
