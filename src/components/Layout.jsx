import React from 'react';

function Layout({ children }) {
    return (
        <div className="layout">
            <header>
                <h1>Welcome to My Blog</h1>
            </header>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/posts">Posts</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>

            <main>
                {children}
            </main>

            <footer>
                <p>&copy; 2024 My Blog. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Layout;
