class Slider{
    constructor(param) {
        this.param = param;
        this.index = 0;
        this.timer;
        this.createDots()
        this.setSlideInterval();
    }

    init() {
        this.param.buttonPrev.addEventListener('click', () => this.prevSlide());
        this.param.buttonNext.addEventListener('click', () => this.nextSlide());
    }

    createDots() {
        this.param.slides.forEach((item) => {
            this.param.dotsBlock.insertAdjacentHTML('beforeend', '<span class="dot"></span>')
            this.param.dotsBlock.firstElementChild.classList.add('active');
        });
    }

    activeSlide(n) {
        for (let slide of this.param.slides) {
            slide.classList.remove('active')
        }
        this.param.slides[n].classList.add('active')
    }

    activeDots(n) {
        const dots = document.querySelectorAll('.dot')
        for (let dot of dots) {
            dot.classList.remove('active')
        }
        dots[n].classList.add('active')
    }

    nextSlide() {
        if (this.index !== this.param.slides.length - 1) {
            this.index++;
            this.activeSlide(this.index);
            this.activeDots(this.index);
        }
        clearInterval(this.timer);
        this.setSlideInterval();
    }

    prevSlide() {
        if (this.index !== 0) {
            this.index--;
            this.activeSlide(this.index);
            this.activeDots(this.index);
        }
        clearInterval(this.timer);
        this.setSlideInterval();
    }

    setSlideInterval() {
        this.timer = setInterval(() => this.nextSlide(), 5000)
    }
}

const slider = new Slider({
    buttonNext: document.querySelector('.right-button'),
    buttonPrev: document.querySelector('.left-button'),
    slides: document.querySelectorAll('.main-slide'),
    dotsBlock: document.querySelector('.dots-block')
})

slider.init();
