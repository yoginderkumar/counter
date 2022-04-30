import React from "react";
import { Modal } from "antd";
import User from "./User";

export default ({ followers, isModalVisible, onCloseModal }) => {
  console.log("Followers: ", followers);
  return (
    <Modal
      title="Basic Modal"
      visible={isModalVisible}
      onOk={onCloseModal}
      onCancel={onCloseModal}
    >
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {followers.map((follower) => (
          <User
            style={{ width: 100, margin: 10 }}
            key={follower.node_id}
            user={follower}
            isFollowingsDisabled
            isFollowersDisabled
          />
        ))}
      </div>
    </Modal>
  );
};
