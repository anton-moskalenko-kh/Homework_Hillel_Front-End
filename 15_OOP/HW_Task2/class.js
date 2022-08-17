class Clock {
    constructor(template) {
        this.template = template;
    };

    setTime() {
        let date = new Date();

        let hours = date.getHours()
        if (hours < 10) {
            hours = "0" + hours;
        }

        let mins = date.getMinutes()
        if (mins < 10) {
            mins = "0" + mins;
        }

        let sec = date.getSeconds()
        if (sec < 10) {
            sec = "0" + sec;
        }
        this.template.clock.innerHTML = `${hours}:${mins}:${sec}`;
    }

    start() {
        this.setTime()
        this.timer = setInterval(() => this.setTime(), 1000)
    }

    stopTime() {
        const stopTime = document.querySelector('.stop');
        stopTime.addEventListener('click', () => clearInterval(this.timer))
    }

    startTime() {
        const startTime = document.querySelector('.start');
        startTime.addEventListener('click', () => this.start())
    }
}

let clock = new Clock({clock: document.querySelector('.clock')})
clock.start();
clock.stopTime();
clock.startTime();
