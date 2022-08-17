// Задание 1

function User() {
    this.name = undefined; // можно поставить любое другое значение по умолчанию
    this.age = undefined;
    this.setDataUser = function (name, age) {
        if (name !== null && age !== null && age > 18) {
            this.name = name;
            this.age = age;
        }
        this.getDataUser = function () {
            console.log(this)
        }
    }
}

function createUser() {
    const user1 = new User();
    user1.setDataUser(prompt('Введите Ваше имя:'), prompt('Введите возраст:'));
    //user1.setDataUser("Антон","25") - можно указывать конкретные значения
    user1.getDataUser();
}

// Задание 2

function Car() {
    this.model = undefined; // можно поставить любое другое значение по умолчанию
    this.year = undefined;
    this.price = undefined;
    this.owner = undefined;
    this.setDataCar = function (model, year, price) {
        if (model !== null && year !== null && price !== null) {
            this.model = model;
            this.year = year;
            this.price = price;
        }
    }
    this.getDataCar = function () {
        console.log(this);
    };
    this.setOwner = function (user) {
        this.owner = user;
    };
}

function createCardCar() {
    const car1 = new Car();
    car1.setDataCar(prompt("Модель авто:"), prompt("Год выпуска:"), prompt("Цена:"));
    const user1 = new User();
    user1.setDataUser(prompt("Имя владельца:"), prompt("Возраст владельца"));
    car1.setOwner({name: user1.name, age: user1.age});
    car1.getDataCar();
}


















