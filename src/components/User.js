import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const User = ({ user, isFollowersDisabled }) => {
  return (
    <Card
      hoverable
      style={{ width: 240, margin: 50 }}
      cover={<img alt="example" src={user.avatar_url} />}
    >
      <Meta title={user.login} />
      <div style={{ display: "flex" }}>
        {isFollowersDisabled ? null : (
          <a style={{ marginRight: 10 }}>Followers</a>
        )}
        <a>Followings</a>
      </div>
    </Card>
  );
};

export default User;
