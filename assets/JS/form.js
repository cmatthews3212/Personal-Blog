const form = document.querySelector("form");
const userInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");

const submitButton = document.getElementById("submit");



// const values = 
// let valuesArray = [];


function redirect (event) {
    event.preventDefault();
    let valuesArray;
    if (JSON.parse(localStorage.getItem('Form Values')) == null) {
        valuesArray = [null]
    } else {
    valuesArray = JSON.parse(localStorage.getItem('Form Values')); //when I get rid of local storage there is an error unless I put this into array brackets
    }
    // Virtual assistent helped with this formadata function
    let values = {};
    const formData = new FormData(form);
    

    
        formData.forEach(function (value, key) {
            values[key] = value;
        })


        
      
    
        valuesArray.push(values)
        
        if (valuesArray[0] == null) {
            valuesArray.shift()
        }
        
   
    localStorage.setItem('Form Values', JSON.stringify(valuesArray));
    
    location.href = "./blog.html"
    
    
    
};


submitButton.addEventListener('click', redirect);
