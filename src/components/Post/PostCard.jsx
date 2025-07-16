import React from "react";
import { motion } from "framer-motion";
import "./PostCard.css";

const PostCard = ({ post }) => (
  <motion.div
    className="post-card"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="post-card-header">
      <img src={post.user.avatar} alt="avatar" className="avatar" />
      <span className="username">{post.user.name}</span>
    </div>
    <div className="post-card-content">{post.content}</div>
    {post.image && <img src={post.image} alt="post" className="post-image" />}
    <div className="post-card-actions">
      <motion.button whileTap={{ scale: 1.2 }} className="like-btn">❤️ {post.likes}</motion.button>
      <motion.button whileTap={{ scale: 1.2 }} className="comment-btn">💬 {post.comments}</motion.button>
    </div>
  </motion.div>
);

export default PostCard;