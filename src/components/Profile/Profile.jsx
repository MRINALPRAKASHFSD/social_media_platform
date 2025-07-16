import React from "react";

const user = {
  name: "Alice",
  avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  bio: "Web developer. Coffee lover. Dreamer.",
  followers: 123,
  following: 89,
};

const Profile = () => (
  <div style={{
    background: "#23272f",
    color: "#fff",
    borderRadius: "16px",
    maxWidth: "370px",
    margin: "40px auto",
    padding: "32px 28px",
    textAlign: "center",
    boxShadow: "0 6px 32px rgba(0,0,0,0.15)"
  }}>
    <img
      src={user.avatar}
      alt="avatar"
      style={{
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        marginBottom: "16px",
        border: "4px solid #61dafb"
      }}
    />
    <h2>{user.name}</h2>
    <p style={{ margin: "8px 0 20px" }}>{user.bio}</p>
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <strong>{user.followers}</strong>
        <div style={{ fontSize: "0.96rem" }}>Followers</div>
      </div>
      <div>
        <strong>{user.following}</strong>
        <div style={{ fontSize: "0.96rem" }}>Following</div>
      </div>
    </div>
  </div>
);

export default Profile;