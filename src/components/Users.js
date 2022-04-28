import React from "react";
import { Card } from "antd";

const { Meta } = Card;

class Users extends React.Component {
  state = {
    users: [],
  };
  componentDidMount() {
    const a = fetch("https://api.github.com/users");
    a.then((data) => data.json())
      .then((users) => this.setState({ users }))
      .catch((err) => console.log("err: ", err));
  }
  render() {
    const { users } = this.state;
    console.log("Users: ", users);
    return (
      <div>
        {users.map((user, index) => (
          <Card
            hoverable
            key={user.node_id}
            style={{ width: 240, margin: 50 }}
            cover={
              <img alt="example" src={`https://robohash.org/${index}.png`} />
            }
          >
            <Meta title={user.login} />
          </Card>
        ))}
      </div>
    );
  }
}

export default Users;
