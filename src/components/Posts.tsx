import React, { useState, useEffect } from 'react';

function Post(props: any) {
    const [post, setData] = useState({
        id: '',
        title: '',
        content: '',
        cover: ''
    });
    const [likes, setLikes] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://my-json-server.typicode.com/IrynaFuzhenko/db/posts/2');
            const data = await response.json();
            setData(data);
        }
        fetchData();
    }, []);

    useEffect(() => {
        function handleLikes() {
            setLikes(likes + 1);
        }
        const likeButton = document.getElementById('like');
        if (likeButton) {
            likeButton.addEventListener("click", handleLikes);
            return () => {
                likeButton.removeEventListener('click', handleLikes);
            };
        }
    }, [likes]);

    function likeThis() {
        setLikes(likes + 1);
    }

    return (
        <article className='post'>
            <div className='cover-container'>
                <img src={post.cover} alt={post.title} />
            </div>
            <div className='post-footer'>
                <h3>
                    {post.title} {post.id}
                </h3>
                <p>{post.content}</p>
                <button id='like' onClick={likeThis}>
                    Like this post <strong>{likes}</strong>
                </button>
            </div>
        </article>
    );
}

export default Post;

