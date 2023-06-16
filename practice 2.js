let container = document.querySelector(".container");
let input = document.querySelector("#inputfield");
// let button = document.querySelector("#btn");
let form = document.querySelector("form");
let ul = document.querySelector("ul");

form.addEventListener("click", function (event) {
    event.preventDefault();
    if (input.value) {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        ul.append(li);
        li.style.listStyle = 'none'
        li.style.marginRight = "100px"
        let button = document.createElement("button");
        button.innerHTML = "Cancel";
        li.append(button);
        button.classList.add("cancel");
        button.addEventListener("click", function () {
        ul.removeChild(li)
        })
    } input.value = "";
})
