import React, { useContext } from 'react';

function BlogInfo() {
  const blogName = useContext(BlogContext);

  return (
    <div className="mb-4">
      <p className="text-lg">Welcome to {blogName}!</p>
    </div>
  );
}

export default BlogInfo;
