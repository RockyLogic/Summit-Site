
var fadeInText = document.querySelectorAll(".fadeIn")

textObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `fadeInAndUp 1s ${entry.target.dataset.delay} forwards ease-out`
        }
    })
})

// Text elements fade in and move up
fadeInText.forEach((element) => {
    textObserver.observe(element)
})


var slideLeft = document.querySelectorAll(".slideLeft");

sitesObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `slideLeft 1s ease-out`
        }
    })
})

// Text elements fade in and move up
slideLeft.forEach((element) => {
    sitesObserver.observe(element)
})

var slideRight = document.querySelectorAll(".slideRight")

statObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `slideRight 1s ease-out`
        }
    })
})

// Text elements fade in and move up
slideRight.forEach((element) => {
    statObserver.observe(element)
})

//Scroll back to the top on reload
$(document).ready(function () {
    $(this).scrollTop(0);
});