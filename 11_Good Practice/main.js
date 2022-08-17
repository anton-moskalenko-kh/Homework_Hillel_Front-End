const buttonNext = document.querySelector('.right-button');
const buttonPrev = document.querySelector('.left-button');
const slides = document.querySelectorAll('.main-slide');
const dotsBlock = document.querySelector('.dots-block');

let index = 0;
const activeSlide = function (n) {
    for (let slide of slides) {
        slide.classList.remove('active')
    }
    slides[n].classList.add('active')
}

slides.forEach((item) => {
    dotsBlock.insertAdjacentHTML('beforeend', '<span class="dot"></span>')
    dotsBlock.firstElementChild.classList.add('active');
})

const activeDot = function (n) {
    const dots = document.querySelectorAll('.dot')
    for (let dot of dots) {
        dot.classList.remove('active')
    }
    dots[n].classList.add('active')
}

const nextSlide = function () {
    if (index !== slides.length - 1) {
        index++;
        activeSlide(index);
        activeDot(index)
    }
    clearInterval(timer);
    goAhead();
}

const prevSlide = function () {
    if (index !== 0) {
        index--;
        activeSlide(index)
        activeDot(index)
    }
    clearInterval(timer);
    goAhead();
}

let timer;
function goAhead () {
    timer = setInterval(nextSlide,5000);
}
goAhead();

buttonPrev.addEventListener('click', prevSlide);
buttonNext.addEventListener('click', nextSlide);


/*function Slider(param) {
    this.init = function () {
        param.buttonPrev.addEventListener('click', () => this.prevSlide());
        param.buttonNext.addEventListener('click', () => this.nextSlide());
    };

    let index = 0;
    let timer;

    this.activeSlide = function (n) {
        for (let slide of param.slides) {
            slide.classList.remove('active')
        }
        param.slides[n].classList.add('active')
    };

    this.nextSlide = function () {
        if (index !== param.slides.length - 1) {
            index++;
            this.activeSlide(index);
        }
        clearInterval(timer);
        this.goAhead();
    }

    this.prevSlide = function () {
        if (index !== 0) {
            index--;
            this.activeSlide(index);
        }
        clearInterval(timer);
        this.goAhead();
    }

    this.goAhead = function () {
        timer = setInterval(() => this.nextSlide(), 5000)
    }

    this.goAhead();
}

const slider = new Slider({
    buttonNext: document.querySelector('.right-button'),
    buttonPrev: document.querySelector('.left-button'),
    slides: document.querySelectorAll('.main-slide')
})

slider.init();*/