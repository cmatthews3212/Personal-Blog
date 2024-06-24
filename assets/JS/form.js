const form = document.querySelector("form");
const userInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");

const submitButton = document.getElementById("submit");



// const values = 
// let valuesArray = [];

function alertForm () {
    // event.preventDefault();
    alert('Please fill out the form')
}


function redirect (event) {
    event.preventDefault();
    let valuesArray;
    if (JSON.parse(localStorage.getItem('Form Values')) == null) {
        valuesArray = [null]
    } else {
    valuesArray = JSON.parse(localStorage.getItem('Form Values')); 
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

   
if (userInput.value == '' && titleInput.value == '' && contentInput.value == '') {
   alert("please fill out the form!")
} else {
    location.href = "./blog.html"
}
    
    
};

// console.log("local storage", localStorage.getItem('Form Values'));





submitButton.addEventListener('click', redirect);





    

