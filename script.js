const num1Input = document.querySelector("#num1")
const num2Input = document.querySelector("#num2")
const num3Input = document.querySelector("#num3")
const num4Input = document.querySelector("#num4")
const num5Input = document.querySelector("#num5")

const num1Output = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
const num2Output = Math.floor(Math.random() * (40 - 21 + 1)) + 21;
const num3Output = Math.floor(Math.random() * (60 - 41 + 1)) + 41;
const num4Output = Math.floor(Math.random() * (80 - 61 + 1)) + 61;
const num5Output = Math.floor(Math.random() * (100 - 81 + 1)) + 81;

num1Input.innerHTML = num1Output
num2Input.innerHTML = num2Output
num3Input.innerHTML = num3Output
num4Input.innerHTML = num4Output
num5Input.innerHTML = num5Output
