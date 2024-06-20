console.log("Hello from the logic file")

const localStorageData = localStorage.getItem('Form Values');
const localStorageParsed = JSON.parse(localStorageData)

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


for (let i = 0; i < localStorageParsed.length; i++) {
    h2El.textContent = localStorageParsed[i].title;
    pEl.textContent = localStorageParsed[i].content;
    h6El.textContent = localStorageParsed[i].username;
}
    document.body.appendChild(blogDiv);

console.log(localStorageParsed)







