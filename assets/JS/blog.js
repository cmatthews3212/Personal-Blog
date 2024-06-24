const backButton = document.getElementById("redirect")



const redirect = function (event) {
    event.preventDefault();
    location.href = "./index.html";
};

backButton.addEventListener('click', redirect);


const localStorageData = localStorage.getItem('Form Values');
const localStorageParsed = JSON.parse(localStorageData)




// console.log(blogDiv);


//  add form inputs to blog pst

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

// console.log(localStorageParsed)


// Toggle button

const toggle = document.getElementById("toggle");
const body = document.getElementById("body")
const h1 = document.getElementById("heading")
const blog = document.getElementsByClassName("blog-post")

// console.log(blog)

// console.log(body)

toggle.addEventListener('change', function () {
    console.log('this was clicked')
    if (this.checked) {
        body.setAttribute('style', 'background-color: #d8bfd8')
        h1.setAttribute('style', 'background-color: #ffc0cb')
       for (let i = 0; i < blog.length; i++) {
        blog[i].setAttribute('style', 'background-color: #ffc0cb')
       }
    } else {
        body.setAttribute('style', 'background-color: #ffc0cb')
        h1.setAttribute('style', 'background-color: #d8bfd8')
        for (let i = 0; i < blog.length; i++) {
         blog[i].setAttribute('style', 'background-color: #d8bfd8')
        }
    }
    
})

