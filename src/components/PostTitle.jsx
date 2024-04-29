
import React, { useContext } from 'react';
import { PostContext } from '../context/PostContext';

const PostTitle = () => {
  const { post } = useContext(PostContext);

  return (
    <div className="post-title">
      <h1>{post.title}</h1>
    </div>
  );
};

export default PostTitle;
