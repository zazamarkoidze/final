let navigationElement = document.getElementById("barNav");
let burgerElement = document.getElementById("burgerBar");

burgerElement.addEventListener("click", function(){
    navigationElement.classList.toggle("navActiv");
});
