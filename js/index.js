// Your code goes here

//1
let doubleCl = document.querySelector(".content-section .text-content h2");
doubleCl.addEventListener("dblclick", (event) => {
  doubleCl.style.color = "pink";
});

//2 + prevent default

let clickNav = document.querySelectorAll("nav > a");
clickNav.forEach((attribute) =>
  attribute.addEventListener(
    "click",
    () => (attribute.style.color = "dodgerblue")
  )
);
clickNav.forEach((attribute) =>
  attribute.addEventListener("click", function (event) {
    event.preventDefault();
  })
);

//3
window.addEventListener("load", function () {
  this.alert("Welcome! Have fun!");
});

//4
let h2Scroll = document.querySelector("h2");
document.addEventListener("wheel", () => {
  h2Scroll.style.fontSize = "10rem";
});

//5

window.addEventListener("resize", function () {
  if (window.innerWidth < 850) {
    document.body.style.color = "blue";
  } else {
    document.body.style.color = "black";
  }
});

//6
let errorDrag = document.querySelector(".destination h4");
errorDrag.addEventListener("drag", (event) => {
  event.target.textContent = "Error! Don't drag me! :( ";
});

//7
let headerFirst = document.querySelector("h1");
headerFirst.addEventListener("mouseover", function () {
  headerFirst.style.fontSize = "10rem";
  headerFirst.style.color = "green";
  headerFirst.style.transition = "5s";
});

//8

headerFirst.addEventListener("mouseout", function () {
  headerFirst.style.fontSize = "5rem";
  headerFirst.style.color = "purple";
});

//9

let blueF = document.querySelector(".footer p");
blueF.addEventListener("click", (event) => {
  blueF.style.border = "2rem solid darkblue";
});

//10
let enlargeB = document.querySelector(".btn");
enlargeB.addEventListener("click", (event) => {
  enlargeB.style.padding = "5rem";
});
