/*function Clock(template) {

    let timer = this.timer;

    function setTime() {
        let date = new Date();

        let hours = date.getHours()
        if (hours < 10) {
            hours = "0" + hours;
        }

        let mins = date.getMinutes()
        if (mins < 10) {
            mins = "0" + mins;
        }

        let secs = date.getSeconds()
        if (secs < 10) {
            secs = "0" + sec;
        }

        template.clock.innerHTML = `${hours}:${mins}:${secs}`;
    }

    this.start = function () {
        this.timer = setInterval(setTime, 1000)
    }
}

let clock = new Clock({clock: document.querySelector('.clock')})
clock.start();

Clock.prototype.stopTime = function () {
    const stopTime = document.querySelector('.stop');
    stopTime.addEventListener('click', () => clearInterval(this.timer))
}

Clock.prototype.startTime = function () {
    const startTime = document.querySelector('.start');
    startTime.addEventListener('click', () => this.start())
}

clock.stopTime();
clock.startTime();*/
