import React from "react";
import PostCard from "../Post/PostCard";

const dummyPosts = [
  {
    id: 1,
    user: { name: "Alice", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    content: "Hello World! This is my first post!",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
    likes: 12,
    comments: 3,
  },
  {
    id: 2,
    user: { name: "Bob", avatar: "https://randomuser.me/api/portraits/men/36.jpg" },
    content: "What a beautiful day 🌞",
    image: "",
    likes: 7,
    comments: 1,
  },
];

const Feed = () => (
  <div style={{ maxWidth: 600, margin: "32px auto" }}>
    {dummyPosts.map((post) => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>
);

export default Feed;