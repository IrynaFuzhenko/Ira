import React, { useContext } from 'react';

function Header() {
  const blogName = useContext(BlogContext);

  return (
    <header className="mb-4">
      <h1 className="text-3xl font-bold">{blogName}</h1>
    </header>
  );
}

export default Header;
