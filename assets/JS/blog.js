const backButton = document.getElementById("redirect")



const redirect = function (event) {
    event.preventDefault();
    location.href = "./index.html";
};

backButton.addEventListener('click', redirect);


const localStorageData = localStorage.getItem('Form Values');
const localStorageParsed = JSON.parse(localStorageData)




// console.log(blogDiv);


function addInputsToPost () {
    if (localStorageParsed == null) {
      return false;
    } else {
    
    
    for (let i = 0; i < localStorageParsed.length; i++) {
        let blogDiv = document.createElement("div");
        let h2El = document.createElement('h2');
        let pEl = document.createElement('p');
        let h6El = document.createElement('h6');
        blogDiv.classList.add('blog-post');
        h6El.classList.add('posted-by'); 
        blogDiv.appendChild(h2El);
        blogDiv.appendChild(pEl);
        blogDiv.appendChild(h6El);
        
        h2El.textContent = localStorageParsed[i].title;
        pEl.textContent = localStorageParsed[i].content;
        h6El.textContent = localStorageParsed[i].username;
        
        if (h2El.innerText == "" 
            && pEl.innerText == "" 
            && h6El.innerText == "") {
                
            } else {
                document.body.appendChild(blogDiv);
        }
    }
}


}
addInputsToPost();

console.log(localStorageParsed)

