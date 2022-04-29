import React from "react";
import User from "./User";
import { Input } from "antd";

class Users extends React.Component {
  state = {
    users: [],
    search: "",
    filteredUsers: [],
  };
  componentDidMount() {
    const a = fetch("https://api.github.com/users");
    a.then((data) => data.json())
      .then((users) => this.setState({ users }))
      .catch((err) => console.log("err: ", err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.updateUserData();
    }
  }

  handleSearchInputHandler = (e) => {
    const { value } = e.target;
    this.setState({ search: value });
  };

  updateUserData = () => {
    this.setState({
      filteredUsers: this.state.users.filter((user) =>
        user.login.includes(this.state.search)
      ),
    });
  };

  render() {
    const { users, filteredUsers, search } = this.state;
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
          {search
            ? filteredUsers.map((user) => (
                <User key={user.node_id} user={user} isFollowersDisabled />
              ))
            : users.map((user) => (
                <User key={user.node_id} user={user} isFollowersDisabled />
              ))}
        </div>
      </div>
    );
  }
}

export default Users;
