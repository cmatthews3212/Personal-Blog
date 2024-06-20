const form = document.querySelector("form");
const userInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");

const submitButton = document.getElementById("submit");

let valuesArray = [];

const values = localStorage.getItem('Form Values');

submitButton.addEventListener('click', redirect);


function redirect (event) {
    event.preventDefault();

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

