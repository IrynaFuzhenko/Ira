import React, { createContext, useState } from 'react';

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [post, setPost] = useState({
    id: '',
    title: '',
    content: '',
    cover: ''
  });

  return (
    <PostContext.Provider value={{ post, setPost }}>
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostProvider };
