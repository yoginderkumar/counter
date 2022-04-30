import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const User = ({
  user,
  style,
  isFollowingsDisabled,
  isFollowersDisabled,
  onFollowersClickHandler,
}) => {
  return (
    <Card
      hoverable
      style={{ width: 240, margin: 50, ...style }}
      cover={<img alt="example" src={user.avatar_url} />}
    >
      <Meta title={user.login} />
      <div style={{ display: "flex" }}>
        {!isFollowersDisabled && (
          <a
            style={{ marginRight: 10 }}
            onClick={() => onFollowersClickHandler(user)}
          >
            Followers
          </a>
        )}
        {!isFollowingsDisabled && <a>Followings</a>}
      </div>
    </Card>
  );
};

export default User;
