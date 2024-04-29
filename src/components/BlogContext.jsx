import { createContext, useState } from 'react';

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blogName, setBlogName] = useState("My Blog");

  return (
    <BlogContext.Provider value={{ blogName, setBlogName }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogProvider, BlogContext };

