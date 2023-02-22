let navigationElement = document.getElementById("nav-bar");
let burgerElement = document.getElementById("burger-bar");

burgerElement.addEventListener("click", function(){
    navigationElement.classList.toggle("navActiv");
});