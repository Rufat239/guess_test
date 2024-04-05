let input = document.querySelector(".guess");
let choose = document.querySelector(".choose");
let result = document.querySelector(".result");

let arr = ["Rufat", "Rasul", "Omar", "Nuru", "Lotu Neman", "Eldost", "Muraz"];

let random = Math.floor(Math.random() * arr.length);

console.log(arr[random]);

choose.addEventListener("click", function () {
  let newInput = input.value;
  if (arr[random].toLowerCase() == newInput.toLowerCase()) {
    result.innerText = "You are win";
    result.style.color = "darkgreen";
  } else {
    result.innerText = "You lost";
    result.style.color = "red";
  }
});
