const userInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");

console.log(userInput, titleInput, contentInput)

const redirect = function () {
    event.preventDefault();
    window.location.href = "blog.html"
}

