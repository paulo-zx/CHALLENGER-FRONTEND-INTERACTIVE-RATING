let sub = document.querySelector(".sub");
let cir = document.querySelectorAll(".circle");
let cont2 = document.querySelector(".container2");
let number;

/*
cir.forEach((circulo) => {
    circulo.addEventListener('click', function() {
        this.style.background =  'hsl(25, 97%, 53%)';
    })
})*/


const modalSpan = document.querySelector(".container2 p:nth-of-type(1) span");



cir.forEach((circulo) =>
    circulo.addEventListener("click", (e) => {
        cir.forEach((item) => item.classList.remove("selected"));
        e.target.classList.add("selected");
        number = e.target.textContent;
    })
);



sub.addEventListener("click",function(){
    if (number) {
        cont2.style.display =  'block';
        modalSpan.textContent = number;
    }
})