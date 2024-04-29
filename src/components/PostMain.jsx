
import React, { useContext } from 'react';
import { PostContext } from '../context/PostContext';

const PostMain = () => {
  const { post } = useContext(PostContext);

  return (
    <div className="post-main">
      <img src={post.cover} alt={post.title} />
      <p>{post.content}</p>
    </div>
  );
};

export default PostMain;
