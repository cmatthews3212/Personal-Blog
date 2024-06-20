const userInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");



const values = localStorage.getItem('Form Values');



// console.log(userInput, titleInput, contentInput)

const redirect = function () {
    event.preventDefault();
   
    const values = {
        username: userInput.value,
        title: titleInput.value,
        content: contentInput.value,
    };

    localStorage.setItem('Form Values', JSON.stringify(values));

    window.location.href = "blog.html"
};

