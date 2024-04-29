
import React from 'react';
import Layout from '../components/Layout';
import Posts from '../components/Posts';
import { BlogContext } from '../components/BlogContext';

function Blog() {
    const blogName = "My Blog";

    return (
        <BlogContext.Provider value={blogName}>
          <Layout>
            <Posts />
          </Layout>
        </BlogContext.Provider>
      );
}

export default Blog;

