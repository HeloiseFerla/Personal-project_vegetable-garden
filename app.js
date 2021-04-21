/*
//slider and slides
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

//buttons
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

//counter
let counter = 1;
const size = slides[0].clientWidth;

slider.style.transform = 'translateX('+(-size * counter)+ 'px';

nextButton.addEventListener("click", () =>{
    slider.style.transition = 'transform 0.2 ease-in-out';
    counter++;
    console.log(counter);
})
*/
