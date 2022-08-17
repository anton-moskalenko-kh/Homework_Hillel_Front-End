/*function Slider(param) {

    let index = 0;
    let timer;

    this.init = function () {
        param.buttonPrev.addEventListener('click', () => this.prevSlide());
        param.buttonNext.addEventListener('click', () => this.nextSlide());
    };

    param.slides.forEach((item) => {
        param.dotsBlock.insertAdjacentHTML('beforeend', '<span class="dot"></span>')
        param.dotsBlock.firstElementChild.classList.add('active');
    });

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
            this.activeDots(index);
        }
        clearInterval(timer);
        this.setSlideInterval();
    }

    this.prevSlide = function () {
        if (index !== 0) {
            index--;
            this.activeSlide(index);
            this.activeDots(index);
        }
        clearInterval(timer);
        this.setSlideInterval();
    }

    this.setSlideInterval = function () {
        timer = setInterval(() => this.nextSlide(), 5000)
    }
    
    this.setSlideInterval();
}

const slider = new Slider({
    buttonNext: document.querySelector('.right-button'),
    buttonPrev: document.querySelector('.left-button'),
    slides: document.querySelectorAll('.main-slide'),
    dotsBlock: document.querySelector('.dots-block')
})

slider.init();

Slider.prototype.activeDots = function (n) {
        const dots = document.querySelectorAll('.dot')
        for (let dot of dots) {
            dot.classList.remove('active')
        }
        dots[n].classList.add('active')
}*/


