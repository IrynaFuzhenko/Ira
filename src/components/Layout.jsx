import React from 'react';

function Layout({ children }) {
  return (
    <div className="container mx-auto px-4">
      <header>
        <h1>Мій чудовий сайт</h1>
      </header>
      <nav>
        <ul>
          <li><a href="/">Головна</a></li>
          <li><a href="/about">Про нас</a></li>
          <li><a href="/contact">Контакти</a></li>
        </ul>
      </nav>
      <main>
        {children} 
      </main>
      <footer>
        <p>&copy; 2024 Мій чудовий сайт. Усі права захищені.</p>
      </footer>
        </div>
    );
}

export default Layout;
