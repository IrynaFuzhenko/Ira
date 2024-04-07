
const template = (item) => `
    <h3>${item.title}</h3>
    <div>${item.body}</div>
`;

function waitForUserInput() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const firstName = document.querySelector('input[name="firstName"]').value.trim();
            const lastName = document.querySelector('input[name="lastName"]').value.trim();
            
            if (!firstName && !lastName) {
                document.getElementById('waiting').textContent = "I'm miss You";
            } else {
                document.getElementById('waiting').textContent = `Hello ${firstName} ${lastName}!`;
            }
            resolve();
        }, 10000); 
    });
};
waitForUserInput();

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.onload = function() {
        if (xhr.status === 200) {
            const posts = JSON.parse(xhr.responseText);
            const demoElement = document.getElementById('demo');
            posts.forEach(post => {
                const postHTML = template(post);
                demoElement.insertAdjacentHTML('beforeend', postHTML);
            });
        } else {
            console.error('Request failed:', xhr.status);
        }
    };
    xhr.send();



