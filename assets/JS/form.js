const form = document.querySelector("form");
const userInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");

const submitButton = document.getElementById("submit");




function redirect (event) {
    event.preventDefault();
    let valuesArray = JSON.parse(localStorage.getItem('Form Values'));

// const values = localStorage.getItem('Form Values');
// valuesArray.concat(values);

    // Virtual assistent helped with this formadata function
    const formData = new FormData(form);
    let values = {};

    
        formData.forEach(function (value, key) {
            values[key] = value;
        })

    valuesArray.push(values)
    console.log(valuesArray);
    localStorage.setItem('Form Values', JSON.stringify(valuesArray));


    location.href = "./blog.html"
};

submitButton.addEventListener('click', redirect);

