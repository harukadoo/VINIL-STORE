const carousel = document.querySelector(".carousel"),
firstImg = document.querySelectorAll(".carousel__images")[0];
arrowIcons = document.querySelectorAll(".fa-solid");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 30;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
});

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();

    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
}

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mouseup", dragStop);



//прокрутка вниз за допомогою кнопок
function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

var contactButton = document.querySelector('.contact__button');
var contactBlock = document.querySelector('.footer');

contactButton.addEventListener('click', () => {
    scrollTo(contactBlock);
})

var assortmentButton = document.querySelector('.assortment__button');
var assortmentBlock = document.querySelector('.genre__container');

assortmentButton.addEventListener('click', () => {
    scrollTo(assortmentBlock);
})

var aboutButton = document.querySelector('.about__button');
var aboutBlock = document.querySelector('.about-us__container');

aboutButton.addEventListener('click', () => {
    scrollTo(aboutBlock);
})