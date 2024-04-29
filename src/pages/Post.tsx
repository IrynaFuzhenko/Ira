import React, { useState, useEffect, createContext, useContext } from 'react';


const PostContext = createContext();


function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <h1>Blog Title</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}


function Header() {
  return (
    <header>
      <h2>Post Header</h2>
    </header>
  );
}


function PostTitle() {
  const post = useContext(PostContext);

  return (
    <h3>{post.title}</h3>
  );
}


function PostMain() {
  const post = useContext(PostContext);

  return (
    <div>
      <p>{post.content}</p>
    </div>
  );
}


function Post() {
  const [post, setPost] = useState({
    id: '',
    title: '',
    content: '',
    cover: ''
  });

  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://my-json-server.typicode.com/IrynaFuzhenko/db/posts/1');
      const data = await response.json();
      setPost(data);
    }
    fetchData();
  }, []);

  return (
    <PostContext.Provider value={post}>
      <Layout>
        <Header />
        <PostTitle />
        <PostMain />
      </Layout>
    </PostContext.Provider>
  );
}

export default Post;
