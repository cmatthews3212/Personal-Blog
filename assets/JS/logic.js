console.log("Hello from the logic file")

const blogDiv = document.createElement("div");
const h2El = document.createElement('h2');
const pEl = document.createElement('p');
const h6El = document.createElement('h6');

blogDiv.classList.add('blog-post');
h6El.classList.add('posted-by');

blogDiv.appendChild(h2El);
blogDiv.appendChild(pEl);
blogDiv.appendChild(h6El);

console.log(blogDiv);

h2El.textContent = "My Blog";
pEl.textContent = "Information about my blog";
h6El.textContent = "Christine Matthews";

document.body.appendChild(blogDiv);



