const backButton = document.getElementById("redirect")



const redirect = function (event) {
    event.preventDefault();
    location.href = "./index.html";
};

backButton.addEventListener('click', redirect);

