const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></span></strong></p>
`;

function fetchPromise(method, url) {
    return new Promise((resolve, reject) => {
      fetch(url, { method })
        .then(response => {
          if (!response.ok) {
            reject(response.statusText);
          }
          return response.json();
        })
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }
  console.log(fetchPromise("Get", url));
  
    fetchPromise("GET", url)
      .then(response => {
        const posts = response;
        let result = "";
        posts.forEach((item) => {
          result += template(item);
        });
        document.getElementById("blog").innerHTML = result;
        })
        .then( () => {
            const users  = document.querySelectorAll('.author');
            users.forEach(user => {
            fetchPromise("GET", `https://jsonplaceholder.typicode.com/users/${user.dataset.id}`)
              .then(response => {
                const userName = response;
                console.log(userName.name)
                user.textContent = userName.name
        })
    })
  
  });
  

