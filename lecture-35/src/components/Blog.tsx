// src/components/Blog.tsx

import React from "react"; 
     interface Post {
        id: number;
        title: string;
        content: string;
        cover: string;
      }
      
      interface  Props {
        post: Post;
      }
      const Blog: React.FC<Props> = ({ post }) => {
    
       return(
        <article className='post'>
        <div className='cover-container'>
          <img src={post.cover} alt={post.title} />
        </div>
        <div className='post-footer'>
          <h3>{post.title} {post.id}</h3>
          <p>{post.content}</p>
        </div>
      </article>
      );
    }

export default Blog;
console.log(Blog);



